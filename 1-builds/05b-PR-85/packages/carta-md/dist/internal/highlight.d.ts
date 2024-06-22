import type { BundledTheme, BundledLanguage, LanguageRegistration, ThemeRegistration, HighlighterCore, DynamicImportLanguageRegistration, DynamicImportThemeRegistration } from 'shiki';
import type { Intellisense } from './utils';
/**
 * Custom TextMate grammar rule for the highlighter.
 */
export type GrammarRule = {
    name: string;
    type: 'block' | 'inline';
    definition: LanguageRegistration['repository'][string];
};
/**
 * Custom TextMate highlighting rule for the highlighter.
 */
export type HighlightingRule = {
    light: NonNullable<ThemeRegistration['tokenColors']>[number];
    dark: NonNullable<ThemeRegistration['tokenColors']>[number];
};
/**
 * Shiki options for the highlighter.
 */
export type ShikiOptions = {
    bundle?: ShikiBundle;
    themes?: Array<Theme>;
    langs?: Array<Language>;
};
export type ShikiBundle = () => Promise<{
    bundledLanguages: Record<string, DynamicImportLanguageRegistration>;
    bundledThemes: Record<string, DynamicImportThemeRegistration>;
}>;
type CustomMarkdownLangName = Awaited<(typeof import('./assets/markdown'))['default']['name']>;
type DefaultLightThemeName = Awaited<(typeof import('./assets/theme-light'))['default']['name']>;
type DefaultDarkThemeName = Awaited<(typeof import('./assets/theme-dark'))['default']['name']>;
export declare const customMarkdownLangName: CustomMarkdownLangName;
export declare const defaultLightThemeName: DefaultLightThemeName;
export declare const defaultDarkThemeName: DefaultDarkThemeName;
export declare const loadDefaultTheme: () => Promise<{
    light: ThemeRegistration;
    dark: ThemeRegistration;
}>;
/**
 * Language name for the highlighter.
 */
export type LanguageName = Intellisense<BundledLanguage | CustomMarkdownLangName>;
/**
 * Theme name for the highlighter.
 */
export type ThemeName = Intellisense<BundledTheme | DefaultLightThemeName | DefaultDarkThemeName>;
/**
 * Language for the highlighter.
 */
export type Language = LanguageName | LanguageRegistration;
/**
 * Theme for the highlighter.
 */
export type Theme = ThemeName | ThemeRegistration;
/**
 * Dual theme for light and dark mode.
 */
export type DualTheme = {
    light: Theme;
    dark: Theme;
};
/**
 * Options for the highlighter.
 */
export type HighlighterOptions = {
    grammarRules: GrammarRule[];
    highlightingRules: HighlightingRule[];
    theme: Theme | DualTheme;
    shiki?: ShikiOptions;
};
/**
 * Loads the highlighter instance, with custom rules and options. Uses Shiki under the hood.
 * @param rules Custom rules for the highlighter, from plugins.
 * @param options Custom options for the highlighter.
 * @returns The highlighter instance.
 */
export declare function loadHighlighter({ grammarRules, highlightingRules, theme, shiki }: HighlighterOptions): Promise<Highlighter>;
export declare class Highlighter {
    private mGrammarRules;
    private mHighlightingRules;
    private mShiki;
    private mBundledLanguages;
    private mBundledThemes;
    private mTheme;
    private mLang;
    get shiki(): HighlighterCore | undefined;
    get bundledLanguages(): Record<string, DynamicImportLanguageRegistration>;
    get bundledThemes(): Record<string, DynamicImportThemeRegistration>;
    get theme(): Theme | DualTheme | undefined;
    get lang(): Language | undefined;
    constructor({ grammarRules, highlightingRules }: {
        grammarRules: GrammarRule[];
        highlightingRules: HighlightingRule[];
    });
    /**
     * Loads a bundle into the highlighter.
     * @param bundle The bundle to load.
     */
    loadBundle(bundle?: ShikiBundle): Promise<void>;
    /**
     * Loads a theme into the highlighter.
     * @param language The language to load.
     */
    loadLanguage(language: Language): Promise<void>;
    /**
     * Loads a theme into the highlighter.
     * @param theme The theme to load.
     */
    loadTheme(theme: Theme): Promise<void>;
    /**
     * Sets the language used by the highlighter.
     * @param language The language to set.
     */
    setMarkdownLanguage(language: Language): Promise<void>;
    /**
     * Sets the theme used by the highlighter to highlight custom markdown.
     * @param theme The theme to set.
     */
    setMarkdownTheme(theme: Theme | DualTheme): Promise<void>;
    /**
     * Highlights markdown text.
     * @param markdown The markdown to highlight.
     * @returns The highlighted HTML.
     */
    highlightMarkdown(markdown: string): string | undefined;
    /**
     * Highlights code with a specific language.
     * @param code The code to highlight
     * @param lang The language of the code
     * @returns The highlighted HTML
     */
    highlight(code: string, lang: string): string | undefined;
    /**
     * Checks if a language is a bundled language.
     * @param lang The language to check.
     * @returns Whether the language is a bundled language.
     */
    isBundleLanguage: (lang: string) => lang is BundledLanguage;
    /**
     * Checks if a theme is a bundled theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a bundled theme.
     */
    isBundleTheme: (theme: string) => theme is BundledTheme;
    /**
     * Checks if a theme is a dual theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a dual theme.
     */
    isDualTheme: (theme: Theme | DualTheme) => theme is DualTheme;
    /**
     * Checks if a theme is a single theme.
     * @param theme The theme to check.
     * @returns Whether the theme is a single theme.
     */
    isSingleTheme: (theme: Theme | DualTheme) => theme is Theme;
    /**
     * Checks if a language is a language registration.
     * @param lang The language to check.
     * @returns Whether the language is a language registration.
     */
    isLanguageRegistration: (lang: Language) => lang is LanguageRegistration;
    /**
     * Checks if a theme is a theme registration.
     * @param theme The theme to check.
     * @returns Whether the theme is a theme registration.
     */
    isThemeRegistration: (theme: Theme) => theme is ThemeRegistration;
    /**
     * Find all nested languages in the markdown text and load them into the highlighter.
     * @param text Markdown text to parse for nested languages.
     * @returns The set of nested languages found in the text.
     */
    findNestedLanguages: (text: string) => Set<string>;
    /**
     * Load all nested languages found in the markdown text into the highlighter.
     * @param text The text to parse for nested languages.
     * @returns Whether the highlighter was updated with new languages.
     */
    loadNestedLanguages: (text: string) => Promise<{
        updated: boolean;
    }>;
    /**
     * Inject custom Markdown grammar rules into the language.
     * @param lang The language to inject the grammar rules into.
     */
    private injectGrammarRules;
    /**
     * Inject custom Markdown highlighting rules into the theme.
     * @param theme The theme to inject the highlighting rules into.
     */
    private injectHighlightingRules;
}
export {};
