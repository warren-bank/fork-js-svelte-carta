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
                    const highlighter = await carta.highlighter();
                    if (!theme) {
                        theme = highlighter.theme; // Use the theme specified in the highlighter
                    }
                    if (isSingleTheme(theme)) {
                        processor.use(rehypeShikiFromHighlighter, highlighter, { ...options, theme });
                    }
                    else {
                        processor.use(rehypeShikiFromHighlighter, highlighter, { ...options, themes: theme });
                    }
                }
            }
        ]
    };
};
//# sourceMappingURL=index.js.map