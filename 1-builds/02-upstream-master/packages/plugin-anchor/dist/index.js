import rehypeSlug, {} from 'rehype-slug';
import rehypeAutolinkHeadings, {} from 'rehype-autolink-headings';
export * from './default.css?inline';
/**
 * Carta anchor plugin. Adds support to render anchor links in header tags.
 */
export const anchor = (options) => {
    return {
        transformers: [
            {
                execution: 'sync',
                type: 'rehype',
                transform({ processor }) {
                    processor.use(rehypeSlug, options?.slug).use(rehypeAutolinkHeadings, options?.autolink);
                }
            }
        ]
    };
};
