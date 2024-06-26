import { Event, Carta } from 'carta-md';
import { TikzExtensionOptions } from '.';

import type * as hast from 'hast';
export declare const browserTikzTransform: (root: hast.Root, carta: Carta, options: TikzExtensionOptions | undefined) => void;
declare global {
    interface Window {
        tikzjax: boolean | undefined;
    }
}
export declare function processTikzScripts(e: Event, options?: TikzExtensionOptions): void;
