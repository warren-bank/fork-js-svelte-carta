import customMarkdown from './assets/markdown';
import getWasm from 'shiki/wasm';
export const customMarkdownLangName = 'cartamd';
export const defaultLightThemeName = 'carta-light';
export const defaultDarkThemeName = 'carta-dark';
export const loadDefaultTheme = async () => ({
    light: structuredClone((await import('./assets/theme-light')).default),
    dark: structuredClone((await import('./assets/theme-dark')).default)
});
/**
 * Loads the highlighter instance, with custom rules and options. Uses Shiki under the hood.
 * @param rules Custom rules for the highlighter, from plugins.
 * @param options Custom options for the highlighter.
 * @returns The highlighter instance.
 */
export async function loadHighlighter({ grammarRules, highlightingRules, theme, shiki }) {
    const highlighter = new Highlighter({
        grammarRules,
        highlightingRules
    });
    const bundle = shiki?.bundle;
    const themes = shiki?.themes ?? [];
    const langs = shiki?.langs ?? [];
    await highlighter.loadBundle(bundle);
    for (const lang of langs) {
        await highlighter.loadLanguage(lang);
    }
    for (const theme of themes) {
        await highlighter.loadTheme(theme);
    }
    await highlighter.loadLanguage(customMarkdown);
    // The markdown theme does not need to be loaded
    await highlighter.setMarkdownLanguage(customMarkdown);
    await highlighter.setMarkdownTheme(theme);
    return highlighter;
}
export class Highlighter {
    mGrammarRules;
    mHighlightingRules;
    mShiki;
    mBundledLanguages = {};
    mBundledThemes = {};
    mTheme;
    mLang;
    get shiki() {
        return this.mShiki;
    }
    get bundledLanguages() {
        return this.mBundledLanguages;
    }
    get bundledThemes() {
        return this.mBundledThemes;
    }
    get theme() {
        return this.mTheme;
    }
    get lang() {
        return this.mLang;
    }
    constructor({ grammarRules, highlightingRules }) {
        this.mGrammarRules = grammarRules;
        this.mHighlightingRules = highlightingRules;
    }
    /**
     * Loads a bundle into the highlighter.
     * @param bundle The bundle to load.
     */
    async loadBundle(bundle) {
        if (bundle) {
            const module = await bundle();
            this.mBundledLanguages = module.bundledLanguages;
            this.mBundledThemes = module.bundledThemes;
        }
        const module = await import('shiki/core');
        this.mShiki = await module.getHighlighterCore({
            loadWasm: getWasm
        });
    }
    /**
     * Loads a theme into the highlighter.
     * @param language The language to load.
     */
    async loadLanguage(language) {
        if (this.isLanguageRegistration(language)) {
            await this.shiki?.loadLanguage(language);
        }
        else if (this.isBundleLanguage(language)) {
            await this.shiki?.loadLanguage(this.bundledLanguages[language]);
        }
        else {
            console.error('Failed to load language, probably it is not included in the current bundle: ', language);
        }
    }
    /**
     * Loads a theme into the highlighter.
     * @param theme The theme to load.
     */
    async loadTheme(theme) {
        if (this.isThemeRegistration(theme)) {
            await this.shiki?.loadTheme(theme);
        }
        else if (this.isBundleTheme(theme)) {
            const registration = (await this.bundledThemes[theme]()).default;
            await this.shiki?.loadTheme(registration);
        }
        else {
            console.error('Failed to load theme, probably it is not included in the current bundle: ', theme);
        }
    }
    /**
     * Sets the language used by the highlighter.
     * @param language The language to set.
     */
    async setMarkdownLanguage(language) {
        if (this.isLanguageRegistration(language)) {
            this.injectGrammarRules(language);
        }
        else {
            const [registration] = (await this.bundledLanguages[language]()).default;
            this.injectGrammarRules(registration);
        }
        this.mLang = language;
    }
    /**
     * Sets the theme used by the highlighter to highlight custom markdown.
     * @param theme The theme to set.
     */
    async setMarkdownTheme(theme) {
        const loadIfNeeded = async (theme) => {
            if (this.isThemeRegistration(theme)) {
                this.injectHighlightingRules(theme);
            }
            else {
                const registration = (await this.bundledThemes[theme]()).default;
                this.injectHighlightingRules(registration);
            }
        };
        if (this.isSingleTheme(theme)) {
            await loadIfNeeded(theme);
        }
        else {
            await loadIfNeeded(theme.light);
            await loadIfNeeded(theme.dark);
        }
        this.mTheme = theme;
    }
    /**
     * Highlights markdown text.
     * @param markdown The markdown to highlight.
     * @returns The highlighted HTML.
     */
    highlightMarkdown(markdown) {
        if (this.isLanguageRegistration(this.mLang)) {
            return this.highlight(markdown, this.mLang.name);
        }
        else {
            return this.highlight(markdown, this.mLang);
        }
    }
    /**
     * Highlights code with a specific language.
     * @param code The code to highlight
     * @param lang The language of the code
     * @returns The highlighted HTML
     */
    highlight(code, lang) {
        // console.log(lang, this.mTheme, this.shiki?.getLanguage('cartamd'));
        if (this.isSingleTheme(this.theme)) {
            return this.shiki?.codeToHtml(code, {
                lang,
                theme: this.theme
            });
        }
        else {
            return this.shiki?.codeToHtml(code, {
                lang,
                themes: this.theme
            });
        }
    }
    /**
     * Checks if a language is a bundled language.
     * @param lang The language to check.
     * @returns Whether the language is a bundled language.
     */
    isBundleLanguage = (lang) => Object.keys(this.bundledLanguages).includes(lang);
    /**
     * Checks if a theme is a bundled theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a bundled theme.
     */
    isBundleTheme = (theme) => Object.keys(this.bundledThemes).includes(theme);
    /**
     * Checks if a theme is a dual theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a dual theme.
     */
    isDualTheme = (theme) => typeof theme == 'object' && 'light' in theme && 'dark' in theme;
    /**
     * Checks if a theme is a single theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a single theme.
     */
    isSingleTheme = (theme) => !this.isDualTheme(theme);
    /**
     * Checks if a language is a language registration.
     * @param lang The language to check.
     * @returns Whether the language is a language registration.
     */
    isLanguageRegistration = (lang) => typeof lang == 'object';
    /**
     * Checks if a theme is a theme registration.
     * @param theme The theme to check.
     * @returns Whether the theme is a theme registration.
     */
    isThemeRegistration = (theme) => typeof theme == 'object';
    /**
     * Find all nested languages in the markdown text and load them into the highlighter.
     * @param text Markdown text to parse for nested languages.
     * @returns The set of nested languages found in the text.
     */
    findNestedLanguages = (text) => {
        const languages = new Set();
        const regex = /```(\w+)$/gm;
        let match;
        while ((match = regex.exec(text))) {
            languages.add(match[1]);
        }
        return languages;
    };
    /**
     * Load all nested languages found in the markdown text into the highlighter.
     * @param text The text to parse for nested languages.
     * @returns Whether the highlighter was updated with new languages.
     */
    loadNestedLanguages = async (text) => {
        text = text.replaceAll('\r\n', '\n'); // Normalize line endings
        const languages = this.findNestedLanguages(text);
        const loadedLanguages = this.shiki.getLoadedLanguages();
        let updated = false;
        for (const lang of languages) {
            if (this.isBundleLanguage(lang) && !loadedLanguages.includes(lang)) {
                await this.loadLanguage(lang);
                loadedLanguages.push(lang);
                updated = true;
            }
        }
        return {
            updated
        };
    };
    /**
     * Inject custom Markdown grammar rules into the language.
     * @param lang The language to inject the grammar rules into.
     */
    injectGrammarRules(lang) {
        lang.repository = {
            ...lang.repository,
            ...Object.fromEntries(this.mGrammarRules.map(({ name, definition }) => [name, definition]))
        };
        for (const rule of this.mGrammarRules) {
            if (rule.type === 'block') {
                lang.repository.block.patterns.unshift({ include: `#${rule.name}` });
            }
            else {
                lang.repository.inline.patterns.unshift({ include: `#${rule.name}` });
            }
        }
    }
    /**
     * Inject custom Markdown highlighting rules into the theme.
     * @param theme The theme to inject the highlighting rules into.
     */
    injectHighlightingRules(theme) {
        if (theme.type === 'light') {
            theme.tokenColors ||= [];
            theme.tokenColors.unshift(...this.mHighlightingRules.map(({ light }) => light));
        }
        else {
            theme.tokenColors ||= [];
            theme.tokenColors.unshift(...this.mHighlightingRules.map(({ dark }) => dark));
        }
    }
}
