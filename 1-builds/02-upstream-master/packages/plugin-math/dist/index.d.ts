import type { Plugin } from 'carta-md';
import { type Options as RemarkMathOptions } from 'remark-math';
import { type Options as RehypeKatexOptions } from 'rehype-katex';
interface MathExtensionOptions {
    /**
     * Options for inline katex, eg: $a^2+b^2=c^2$
     */
    inline?: {
        /**
         * @default control+m
         */
        shortcut?: Set<string>;
    };
    /**
     * Option for block katex, eg:
     * $$
     * a^2+b^2=c^2
     * $$
     */
    block?: {
        /**
         * @default ctrl+shift+m
         */
        shortcut?: Set<string>;
    };
    /**
     * Options for remark-math
     */
    remarkMath?: RemarkMathOptions;
    /**
     * Options for rehype-katex
     */
    rehypeKatex?: RehypeKatexOptions;
}
/**
 * Carta math plugin. Code adapted from [marked-katex-extension](https://github.com/UziTech/marked-katex-extension).
 */
export declare const math: (options?: MathExtensionOptions) => Plugin;
export {};
