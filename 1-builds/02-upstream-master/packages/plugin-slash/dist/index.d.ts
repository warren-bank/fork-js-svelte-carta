/// <reference types="svelte" />
import { type TransitionConfig } from 'svelte/transition';
import type { Plugin } from 'carta-md';
import { type DefaultSnippetId, type SlashSnippet } from './snippets';
export * from './default.css?inline';
export interface SlashExtensionOptions {
    /**
     * List of default snippets to disable.
     */
    disableDefaultSnippets?: DefaultSnippetId[] | true;
    /**
     * Additional snippets.
     */
    snippets?: SlashSnippet[];
    /**
     * Custom in transition. See https://svelte.dev/docs#run-time-svelte-transition.
     */
    inTransition?: (node: Element) => TransitionConfig;
    /**
     * Custom out transition. See https://svelte.dev/docs#run-time-svelte-transition.
     */
    outTransition?: (node: Element) => TransitionConfig;
}
/**
 * Carta slash extension.
 * @param options Extension options.
 * @returns The slash extension.
 */
export declare const slash: (options?: SlashExtensionOptions) => Plugin;
