import type { DualTheme, Theme, Plugin } from 'carta-md';
import type { RehypeShikiCoreOptions } from '@shikijs/rehype/core';
export type CodeExtensionOptions = Omit<RehypeShikiCoreOptions, 'theme' | 'themes'> & {
    theme?: Theme | DualTheme;
};
/**
 * Checks if a theme is a dual theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a dual theme.
 */
export declare const isDualTheme: (theme: Theme | DualTheme) => theme is DualTheme;
/**
 * Checks if a theme is a single theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a single theme.
 */
export declare const isSingleTheme: (theme: Theme | DualTheme) => theme is Theme;
/**
 * Carta code highlighting plugin. Themes available on [GitHub](https://github.com/speed-highlight/core/tree/main/dist/themes).
 */
export declare const code: (options?: CodeExtensionOptions) => Plugin;
