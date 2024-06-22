import type { DualTheme, Theme, Plugin } from 'carta-md';
import type { RehypeShikiOptions } from '@shikijs/rehype';
export type CodeExtensionOptions = Omit<RehypeShikiOptions, 'theme' | 'themes'> & {
    theme?: Theme | DualTheme;
};
/**
 * Carta code highlighting plugin. Themes available on [GitHub](https://github.com/speed-highlight/core/tree/main/dist/themes).
 */
export declare const code: (options?: CodeExtensionOptions) => Plugin;
