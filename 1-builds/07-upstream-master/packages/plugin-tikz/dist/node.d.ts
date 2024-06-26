import { Carta } from 'carta-md';
import { TikzExtensionOptions } from '.';

import * as hast from 'hast';
export declare const nodeTikzTransform: (root: hast.Root, carta: Carta, options: TikzExtensionOptions | undefined) => Promise<void>;
