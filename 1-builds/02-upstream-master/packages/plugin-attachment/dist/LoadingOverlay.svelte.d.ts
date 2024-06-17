import { SvelteComponentTyped } from "svelte";
import type { Carta } from 'carta-md';
import type { Writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        carta: Carta;
        uploadingFiles: Writable<File[]>;
        loadingOverlay: typeof SvelteComponent | false | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoadingOverlayProps = typeof __propDef.props;
export type LoadingOverlayEvents = typeof __propDef.events;
export type LoadingOverlaySlots = typeof __propDef.slots;
export default class LoadingOverlay extends SvelteComponentTyped<LoadingOverlayProps, LoadingOverlayEvents, LoadingOverlaySlots> {
}
export {};
