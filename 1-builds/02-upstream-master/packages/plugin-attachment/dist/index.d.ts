import type { Plugin } from 'carta-md';
import { type Writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';
export interface AttachmentExtensionOptions {
    /**
     * Upload a file to the server. Return the url of the uploaded file.
     * If an error occurs, return null. This function does **not** handle errors.
     * @param file The file to upload
     * @returns The uploaded file url, or null if it failed
     */
    upload: (file: File) => Promise<string | null>;
    /**
     * Supported mime types.
     *
     * @default ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'].
     */
    supportedMimeTypes?: string[];
    /**
     * Whether to disable the attach icon.
     *
     * @default false
     */
    disableIcon?: boolean;
    /**
     * Custom drop overlay component. Use `false` to disable the overlay.
     */
    dropOverlay?: false | typeof SvelteComponent;
    /**
     * Custom loading overlay component. Use `false` to disable the overlay.
     */
    loadingOverlay?: false | typeof SvelteComponent<{
        uploadingFiles: Writable<File[]>;
    }>;
}
/**
 * Carta attachment plugin.
 */
export declare const attachment: (options: AttachmentExtensionOptions) => Plugin;
