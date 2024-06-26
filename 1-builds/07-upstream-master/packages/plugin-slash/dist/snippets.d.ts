import type { InputEnhancer } from 'carta-md';
export interface SlashSnippet {
    /**
     * Unique snippet identifier.
     */
    id: string;
    group: string;
    title: string;
    description: string;
    /**
     * Snippet callback.
     * @param input Carta input.
     */
    action: (input: InputEnhancer) => void;
}
/**
 * Default slash snippets.
 */
export declare const defaultSnippets: readonly [{
    readonly id: "bigHeading";
    readonly title: "Heading 1";
    readonly description: "Big section heading";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "mediumHeading";
    readonly title: "Heading 2";
    readonly description: "Medium section heading";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "smallHeading";
    readonly title: "Heading 3";
    readonly description: "Small section heading";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "numberedList";
    readonly title: "Numbered List";
    readonly description: "Create a list with numbering";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "bulletedList";
    readonly title: "Bulleted List";
    readonly description: "Create a bulleted list";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "taskList";
    readonly title: "Task List";
    readonly description: "Create a task list";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "quote";
    readonly title: "Quote";
    readonly description: "Create a quote";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "code";
    readonly title: "Code";
    readonly description: "Add a code block";
    readonly group: "Basic";
    readonly action: (input: InputEnhancer) => void;
}];
export type DefaultSnippetId = (typeof defaultSnippets)[number]['id'];
