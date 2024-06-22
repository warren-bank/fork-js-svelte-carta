import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm, {} from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { InputEnhancer } from './input';
import { defaultKeyboardShortcuts } from './shortcuts';
import { defaultIcons } from './icons';
import { defaultPrefixes } from './prefixes';
import { Renderer } from './renderer';
import { CustomEvent } from './utils';
import { loadHighlighter, loadDefaultTheme, loadNestedLanguages } from './highlight';
const cartaEvents = ['carta-render', 'carta-render-ssr'];
export class Carta {
    sanitizer;
    historyOptions;
    theme;
    shikiOptions;
    rendererDebounce;
    keyboardShortcuts;
    icons;
    prefixes;
    grammarRules;
    highlightingRules;
    textareaListeners;
    cartaListeners;
    components;
    dispatcher = new EventTarget();
    syncProcessor;
    asyncProcessor;
    mElement;
    mInput;
    mRenderer;
    mHighlighter;
    mSyncTransformers = [];
    mAsyncTransformers = [];
    get element() {
        return this.mElement;
    }
    get input() {
        return this.mInput;
    }
    get renderer() {
        return this.mRenderer;
    }
    async highlighter() {
        if (!this.mHighlighter) {
            const promise = async () => {
                return loadHighlighter({
                    theme: this.theme ?? (await loadDefaultTheme()),
                    grammarRules: this.grammarRules,
                    highlightingRules: this.highlightingRules,
                    shiki: this.shikiOptions
                });
            };
            this.mHighlighter = promise();
            this.mHighlighter = await this.mHighlighter;
        }
        return this.mHighlighter;
    }
    elementsToBind = [];
    constructor(options) {
        this.sanitizer = options?.sanitizer || undefined;
        this.historyOptions = options?.historyOptions;
        this.theme = options?.theme;
        this.shikiOptions = options?.shikiOptions;
        this.rendererDebounce = options?.rendererDebounce ?? 300;
        // Load plugins
        this.keyboardShortcuts = [];
        this.icons = [];
        this.prefixes = [];
        this.textareaListeners = [];
        this.cartaListeners = [];
        this.components = [];
        this.grammarRules = [];
        this.highlightingRules = [];
        const listeners = [];
        for (const ext of options?.extensions ?? []) {
            this.keyboardShortcuts.push(...(ext.shortcuts ?? []));
            this.icons.push(...(ext.icons ?? []));
            this.prefixes.push(...(ext.prefixes ?? []));
            this.components.push(...(ext.components ?? []));
            this.grammarRules.push(...(ext.grammarRules ?? []));
            this.highlightingRules.push(...(ext.highlightingRules ?? []));
            listeners.push(...(ext.listeners ?? []));
        }
        // Split different listeners
        this.textareaListeners = listeners.filter((it) => !cartaEvents.includes(it[0]));
        this.cartaListeners = listeners.filter((it) => cartaEvents.includes(it[0]));
        // Setup carta listeners
        this.cartaListeners.forEach((it) => {
            this.dispatcher.addEventListener(...it);
        });
        // Load default keyboard shortcuts
        this.keyboardShortcuts.push(...defaultKeyboardShortcuts.filter((shortcut) => options?.disableShortcuts === true
            ? false
            : !options?.disableShortcuts?.includes(shortcut.id)));
        // Load default icons
        this.icons.unshift(...defaultIcons.filter((icon) => options?.disableIcons === true ? false : !options?.disableIcons?.includes(icon.id)));
        // Load default prefixes
        this.prefixes.push(...defaultPrefixes.filter((prefix) => options?.disablePrefixes === true ? false : !options?.disablePrefixes?.includes(prefix.id)));
        // Load unified extensions
        this.mSyncTransformers = [];
        this.mAsyncTransformers = [];
        for (const ext of options?.extensions ?? []) {
            for (const transformer of ext.transformers ?? []) {
                if (transformer.execution === 'sync') {
                    this.mSyncTransformers.push(transformer);
                }
                else {
                    this.mAsyncTransformers.push(transformer);
                }
            }
        }
        this.syncProcessor = this.setupSynchronousProcessor({ gfmOptions: options?.gfmOptions });
        this.asyncProcessor = this.setupAsynchronousProcessor({ gfmOptions: options?.gfmOptions });
        for (const ext of options?.extensions ?? []) {
            if (ext.onLoad) {
                ext.onLoad({
                    carta: this
                });
            }
        }
    }
    setupSynchronousProcessor({ gfmOptions }) {
        const syncProcessor = unified();
        const remarkPlugins = this.mSyncTransformers.filter((it) => it.type === 'remark');
        const rehypePlugins = this.mSyncTransformers.filter((it) => it.type === 'rehype');
        syncProcessor.use(remarkParse);
        syncProcessor.use(remarkGfm, gfmOptions);
        for (const plugin of remarkPlugins) {
            plugin.transform({ processor: syncProcessor, carta: this });
        }
        syncProcessor.use(remarkRehype);
        for (const plugin of rehypePlugins) {
            plugin.transform({ processor: syncProcessor, carta: this });
        }
        syncProcessor.use(rehypeStringify);
        return syncProcessor;
    }
    async setupAsynchronousProcessor({ gfmOptions }) {
        const asyncProcessor = unified();
        const remarkPlugins = [...this.mSyncTransformers, ...this.mAsyncTransformers].filter((it) => it.type === 'remark');
        const rehypePlugins = [...this.mSyncTransformers, ...this.mAsyncTransformers].filter((it) => it.type === 'rehype');
        asyncProcessor.use(remarkParse);
        asyncProcessor.use(remarkGfm, gfmOptions);
        for (const plugin of remarkPlugins) {
            await plugin.transform({ processor: asyncProcessor, carta: this });
        }
        asyncProcessor.use(remarkRehype);
        for (const plugin of rehypePlugins) {
            await plugin.transform({ processor: asyncProcessor, carta: this });
        }
        asyncProcessor.use(rehypeStringify);
        return asyncProcessor;
    }
    /**
     * Render markdown to html asynchronously.
     * @param markdown Markdown input.
     * @returns Rendered html.
     */
    async render(markdown) {
        const processor = await this.asyncProcessor;
        const highlighter = await this.highlighter();
        await loadNestedLanguages(highlighter, markdown);
        const dirty = String(await processor.process(markdown));
        if (!dirty)
            return '';
        this.dispatcher.dispatchEvent(new CustomEvent('carta-render', { detail: { carta: this } }));
        return (this.sanitizer && this.sanitizer(dirty)) ?? dirty;
    }
    /**
     * Render markdown, excluding syntax highlighting (SSR).
     * @param markdown Markdown input.
     * @returns Rendered html.
     */
    renderSSR(markdown) {
        const dirty = String(this.syncProcessor.processSync(markdown));
        if (typeof dirty != 'string')
            return '';
        this.dispatcher.dispatchEvent(new CustomEvent('carta-render-ssr', { detail: { carta: this } }));
        if (this.sanitizer)
            return this.sanitizer(dirty);
        return dirty;
    }
    /**
     * **Internal**: set the editor element.
     * @param element The editor element.
     */
    $setElement(element) {
        this.mElement = element;
    }
    /**
     * **Internal**: set the input element.
     * @param textarea The input textarea element.
     * @param callback Update callback.
     */
    $setInput(textarea, container, callback) {
        // Remove old listeners if any
        const previousInput = this.input;
        this.mInput = new InputEnhancer(textarea, container, {
            shortcuts: this.keyboardShortcuts,
            prefixes: this.prefixes,
            listeners: this.textareaListeners,
            historyOpts: this.historyOptions
        });
        if (previousInput) {
            previousInput.events.removeEventListener('update', callback);
            this.mInput.history = previousInput.history;
        }
        this.mInput.events.addEventListener('update', callback);
        // Bind elements
        this.elementsToBind.forEach((it) => {
            it.callback = this.input?.$bindToCaret(it.elem, {
                portal: it.portal,
                editorElement: this.element
            }).destroy;
        });
    }
    /**
     * **Internal**: set the renderer element.
     * @param container Div container of the rendered element.
     */
    $setRenderer(container) {
        this.mRenderer = new Renderer(container);
    }
    /**
     * Bind an element to the caret position.
     * @param element The element to bind.
     * @param portal The portal element.
     * @returns The unbind function.
     *
     * @example
     * ```svelte
     * <script>
     * 	export let carta;
     * </script>
     *
     * <div use:carta.bindToCaret>
     *   <!-- Stuff here -->
     * </div>
     *
     * ```
     */
    bindToCaret(element, portal = document.querySelector('body')) {
        let callback;
        if (this.input)
            callback = this.input.$bindToCaret(element, { portal, editorElement: this.element }).destroy;
        // Bind the element later, when the input is ready
        this.elementsToBind.push({ elem: element, portal, callback });
        return {
            destroy: () => {
                callback && callback();
                this.elementsToBind = this.elementsToBind.filter((it) => it.elem != element);
            }
        };
    }
}
