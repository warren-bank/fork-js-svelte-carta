/// <reference types="svelte" />
import type { Plugin } from 'carta-md';
import { type TransitionConfig } from 'svelte/transition';
export * from './default.css?inline';
export interface EmojiExtensionOptions {
    /**
     * Custom in transition. See https://svelte.dev/docs#run-time-svelte-transition.
     */
    inTransition?: (node: Element) => TransitionConfig;
    /**
     * Custom out transition. See https://svelte.dev/docs#run-time-svelte-transition.
     */
    outTransition?: (node: Element) => TransitionConfig;
    /**
     * Maximum count of emoji icons to display that match partial user input.
     */
    maxResults?: number;
    /**
     * Options for the 'remark-emoji' plugin.
     */
    accessible?: boolean;
    padSpaceAfter?: boolean;
    emoticon?: boolean;
}
/**
 * Carta emoji plugin. Adds support to render emojis as well as an emojis snippet.
 */
export declare const emoji: (options?: EmojiExtensionOptions) => Plugin;
