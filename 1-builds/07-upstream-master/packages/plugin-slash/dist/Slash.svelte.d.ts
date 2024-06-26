import { SvelteComponentTyped } from "svelte";
import type { Carta } from 'carta-md';
import type { SlashSnippet } from './snippets';
import type { TransitionConfig } from 'svelte/transition';
declare const __propDef: {
    props: {
        carta: Carta;
        snippets: SlashSnippet[];
        inTransition: (node: Element) => TransitionConfig;
        outTransition: (node: Element) => TransitionConfig;
        groupBy?: (<K extends string | number | symbol, TItem extends Record<K, string | number | symbol>>(items: TItem[], key: K) => Record<string | number | symbol, TItem[]>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SlashProps = typeof __propDef.props;
export type SlashEvents = typeof __propDef.events;
export type SlashSlots = typeof __propDef.slots;
export default class Slash extends SvelteComponentTyped<SlashProps, SlashEvents, SlashSlots> {
    get groupBy(): <K extends string | number | symbol, TItem extends Record<K, string | number | symbol>>(items: TItem[], key: K) => Record<string | number | symbol, TItem[]>;
}
export {};
