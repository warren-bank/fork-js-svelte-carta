import { fade, scale } from 'svelte/transition';
import SlashComponent from './Slash.svelte';
import BezierEasing from 'bezier-easing';
import { defaultSnippets } from './snippets';
export * from './default.css?inline';
/**
 * Carta slash extension.
 * @param options Extension options.
 * @returns The slash extension.
 */
export const slash = (options) => {
    const snippets = defaultSnippets.filter((snippet) => options?.disableDefaultSnippets === true
        ? false
        : !options?.disableDefaultSnippets?.includes(snippet.id));
    snippets.push(...(options?.snippets ?? []));
    const inTransition = options?.inTransition ??
        ((node) => scale(node, {
            duration: 150,
            easing: BezierEasing(0.05, 0.68, 0.2, 1.15)
        }));
    const outTransition = options?.inTransition ??
        ((node) => fade(node, {
            duration: 100
        }));
    const slashComponent = {
        component: SlashComponent,
        props: {
            snippets,
            inTransition,
            outTransition
        },
        parent: 'input'
    };
    return {
        components: [slashComponent]
    };
};
