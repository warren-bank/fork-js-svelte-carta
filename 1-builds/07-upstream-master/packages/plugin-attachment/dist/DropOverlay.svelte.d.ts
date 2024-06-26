import { SvelteComponentTyped } from "svelte";
import type { Carta } from 'carta-md';
import type { Writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        carta: Carta;
        draggingOverTextArea: Writable<boolean>;
        draggingOverOverlay: Writable<boolean>;
        handleDrop: (event: DragEvent) => void;
        dropOverlay: typeof SvelteComponent | false | undefined;
    };
    events: {
        dragover: DragEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DropOverlayProps = typeof __propDef.props;
export type DropOverlayEvents = typeof __propDef.events;
export type DropOverlaySlots = typeof __propDef.slots;
export default class DropOverlay extends SvelteComponentTyped<DropOverlayProps, DropOverlayEvents, DropOverlaySlots> {
}
export {};
