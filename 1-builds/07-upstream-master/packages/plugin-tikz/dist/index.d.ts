import { Plugin } from 'carta-md';

export interface TikzExtensionOptions {
    /**
     * Enables TikZJax console output (server and client).
     */
    debug?: boolean;
    /**
     * Class for generated svg div container.
     */
    class?: string;
    /**
     * Whether to center the generated expression.
     * @default true
     */
    center?: boolean;
    /**
     * Post processing function for html.
     * This also runs on stored html.
     */
    postProcessing?: (html: string) => string;
}
/**
 * TikzJax extension for Carta.
 * @param options Tikz options.
 */
export declare const tikz: (options?: TikzExtensionOptions) => Plugin;
