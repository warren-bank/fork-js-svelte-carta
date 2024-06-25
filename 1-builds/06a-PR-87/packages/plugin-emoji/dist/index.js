import remarkEmoji from 'remark-emoji';
import { fade, scale } from 'svelte/transition';
import Emoji from './Emoji.svelte';
import BezierEasing from 'bezier-easing';
export * from './default.css?inline';
/**
 * Carta emoji plugin. Adds support to render emojis as well as an emojis snippet.
 */
export const emoji = (options) => {
    const inTransition = options?.inTransition ??
        ((node) => scale(node, {
            duration: 150,
            easing: BezierEasing(0.05, 0.68, 0.2, 1.15)
        }));
    const outTransition = options?.inTransition ??
        ((node) => fade(node, {
            duration: 100
        }));
    const emojiComponent = {
        component: Emoji,
        parent: 'input',
        props: {
            inTransition,
            outTransition
        }
    };
    const grammar = {
        name: 'emoji',
        type: 'inline',
        definition: {
            match: ':(?:\\+1|[-\\w]+):',
            name: 'markup.emoji.markdown'
        }
    };
    const highlighting = {
        light: {
            scope: 'markup.emoji',
            settings: {
                foreground: '#3bf'
            }
        },
        dark: {
            scope: 'markup.emoji',
            settings: {
                foreground: '#4dacfa'
            }
        }
    };
    return {
        transformers: [
            {
                execution: 'sync',
                type: 'remark',
                transform({ processor }) {
                    processor.use(remarkEmoji, options);
                }
            }
        ],
        components: [emojiComponent],
        grammarRules: [grammar],
        highlightingRules: [highlighting]
    };
};
