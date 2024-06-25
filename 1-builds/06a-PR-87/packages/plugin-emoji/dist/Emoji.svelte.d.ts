import { SvelteComponentTyped } from "svelte";
import type { Carta } from 'carta-md';
import type { TransitionConfig } from 'svelte/transition';
declare const __propDef: {
    props: {
        carta: Carta;
        inTransition: (node: Element) => TransitionConfig;
        outTransition: (node: Element) => TransitionConfig;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EmojiProps = typeof __propDef.props;
export type EmojiEvents = typeof __propDef.events;
export type EmojiSlots = typeof __propDef.slots;
export default class Emoji extends SvelteComponentTyped<EmojiProps, EmojiEvents, EmojiSlots> {
}
export {};
