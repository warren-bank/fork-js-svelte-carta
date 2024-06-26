import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
/**
 * Carta math plugin. Code adapted from [marked-katex-extension](https://github.com/UziTech/marked-katex-extension).
 */
export const math = (options) => {
    return {
        onLoad: async ({ carta }) => {
            const highlighter = await carta.highlighter();
            if (!highlighter)
                return;
            await highlighter.loadLanguage('tex');
            carta.input?.update();
        },
        transformers: [
            {
                execution: 'sync',
                type: 'remark',
                transform({ processor }) {
                    processor.use(remarkMath, options?.remarkMath);
                }
            },
            {
                execution: 'sync',
                type: 'rehype',
                transform({ processor }) {
                    processor.use(rehypeKatex, options?.rehypeKatex);
                }
            }
        ],
        shortcuts: [
            {
                id: 'inlineKatex',
                combination: options?.block?.shortcut ?? new Set(['control', 'm']),
                action: (input) => input.toggleSelectionSurrounding('$')
            },
            {
                id: 'blockKatex',
                combination: options?.block?.shortcut ?? new Set(['control', 'shift', 'm']),
                action: (input) => input.toggleSelectionSurrounding(['$$\n', '\n$$'])
            }
        ],
        grammarRules: [
            {
                name: 'inline_math',
                type: 'inline',
                definition: {
                    match: '(\\$+)((?:[^\\$]|(?!(?<!\\$)\\1(?!\\$))\\$)*+)(\\1)',
                    name: 'markup.inline.math.markdown',
                    captures: {
                        '1': { name: 'punctuation.definition.latex.inline' },
                        '2': { name: 'meta.embedded.block.latex', patterns: [{ include: 'text.tex' }] },
                        '3': { name: 'punctuation.definition.latex.inline' }
                    }
                }
            },
            {
                name: 'block_math',
                type: 'block',
                definition: {
                    begin: '(^|\\G)(\\s*)(\\${2,})\\s*(?=([^$]*)?$)',
                    beginCaptures: {
                        '3': { name: 'punctuation.definition.latex.block' }
                    },
                    endCaptures: { '3': { name: 'punctuation.definition.latex.block' } },
                    end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
                    name: 'markup.block.math.markdown',
                    patterns: [
                        {
                            begin: '(^|\\G)(\\s*)(.*)',
                            contentName: 'meta.embedded.block.latex',
                            patterns: [{ include: 'text.tex' }],
                            while: '(^|\\G)(?!\\s*([$]{2,})\\s*$)'
                        }
                    ]
                }
            }
        ],
        highlightingRules: [
            {
                light: {
                    scope: 'punctuation.definition.latex',
                    settings: {
                        foreground: '#5AF'
                    }
                },
                dark: {
                    scope: 'punctuation.definition.latex',
                    settings: {
                        foreground: '#4DACFA'
                    }
                }
            }
        ]
    };
};
//# sourceMappingURL=index.js.map