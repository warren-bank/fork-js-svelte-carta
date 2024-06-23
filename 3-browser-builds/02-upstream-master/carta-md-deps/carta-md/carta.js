import {Carta, MarkdownEditor, Markdown} from 'carta-md'

import 'carta-md/default.css'

/**
 * each wrapper function initializes its corresponding Svelte component
 * @param {{target: HTMLElement}} options
 * @returns instance of Svelte component
 */
export default {
  "Carta":          Carta,
  "MarkdownEditor": (options) => new MarkdownEditor({...options, props: options}),
  "Markdown":       (options) => new Markdown(      {...options, props: options})
}
