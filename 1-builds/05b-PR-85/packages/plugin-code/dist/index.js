import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
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
                    if (highlighter.isSingleTheme(theme)) {
                        processor.use(rehypeShikiFromHighlighter, highlighter.shiki, { ...options, theme });
                    }
                    else {
                        processor.use(rehypeShikiFromHighlighter, highlighter.shiki, { ...options, themes: theme });
                    }
                }
            }
        ]
    };
};
//# sourceMappingURL=index.js.map