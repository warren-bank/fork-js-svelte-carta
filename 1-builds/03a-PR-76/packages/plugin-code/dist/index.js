import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
// FIXME: find a better solution then copy-pasting these functions in next version.
// However, when importing from carta-md, this causes a MODULE_NOT_FOUND error
// for some reason.
/**
 * Checks if a theme is a dual theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a dual theme.
 */
export const isDualTheme = (theme) => typeof theme == 'object' && 'light' in theme && 'dark' in theme;
/**
 * Checks if a theme is a single theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a single theme.
 */
export const isSingleTheme = (theme) => !isDualTheme(theme);
/**
 * Carta code highlighting plugin. Themes available on [GitHub](https://github.com/speed-highlight/core/tree/main/dist/themes).
 */
export const code = (options) => {
    return {
        transformers: [
            {
                execution: 'async',
                type: 'rehype',
                async transform({ processor, carta }) {
                    let theme = options?.theme;
                    const cartaHighlighter = await carta.highlighter();
                    if (!theme) {
                        theme = cartaHighlighter.theme; // Use the theme specified in the highlighter
                    }
                    // https://github.com/shikijs/shiki/blob/v1.6.4/packages/rehype/src/core.ts#L72
                    const rehypeShikiFromHighlighterWrapper = (highlighter, options) => {
                        const onError = options?.onError;
                        if (onError)
                            delete options.onError;
                        const transformer = rehypeShikiFromHighlighter(highlighter, options);
                        const regex = /^.*Language `([^`]+)` not found.*$/;
                        // @ts-ignore
                        const transformerWrapper = async (tree) => {
                            try {
                                // @ts-ignore
                                transformer(tree);
                            }
                            catch (e) {
                                let ignoreError = false;
                                if ((e instanceof Error) && e?.message) {
                                    const match = regex.exec(e.message);
                                    if (match) {
                                        // load language into highlighter, then retry
                                        const lang = match[1];
                                        const updated = await carta.loadHighlighterLanguage(cartaHighlighter, lang);
                                        if (updated) {
                                            // @ts-ignore
                                            transformerWrapper(tree);
                                            ignoreError = true;
                                        }
                                    }
                                }
                                if (!ignoreError) {
                                    if (onError)
                                        onError(e);
                                    else
                                        throw e;
                                }
                            }
                        };
                        return transformerWrapper;
                    };
                    if (isSingleTheme(theme)) {
                        processor.use(rehypeShikiFromHighlighterWrapper, cartaHighlighter, { ...options, theme });
                    }
                    else {
                        processor.use(rehypeShikiFromHighlighterWrapper, cartaHighlighter, { ...options, themes: theme });
                    }
                }
            }
        ]
    };
};
//# sourceMappingURL=index.js.map