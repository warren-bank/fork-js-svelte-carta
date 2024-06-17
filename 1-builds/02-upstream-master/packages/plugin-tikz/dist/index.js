const u = (t) => ({
  onLoad: async ({ carta: e }) => {
    var o;
    await (await e.highlighter()).loadLanguage("tex"), (o = e.input) == null || o.update();
  },
  transformers: [
    {
      execution: "async",
      type: "rehype",
      transform({ carta: e, processor: n }) {
        n.use(c, { carta: e, options: t });
      }
    }
  ],
  listeners: [
    [
      "carta-render",
      async (e) => {
        typeof window < "u" && (await r()).processTikzScripts(e, t);
      }
    ]
  ],
  grammarRules: [
    {
      name: "tikz",
      type: "block",
      definition: {
        begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(tikz)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        beginCaptures: {
          3: { name: "punctuation.definition.markdown" },
          4: { name: "fenced_code.block.language.markdown" },
          5: { name: "fenced_code.block.language.attributes.markdown" }
        },
        end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        endCaptures: { 3: { name: "punctuation.definition.markdown" } },
        name: "markup.fenced_code.block.markdown",
        patterns: [
          {
            begin: "(^|\\G)(\\s*)(.*)",
            contentName: "meta.embedded.block.latex",
            patterns: [{ include: "text.tex" }],
            while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      }
    }
  ]
});
let i, s;
const r = async () => i ?? (i = await import("./browser-CM6jQExh.js")), d = async () => s ?? (s = await import("./node-BVxloVZz.js")), c = ({ carta: t, options: e }) => async function(n) {
  return typeof window < "u" ? (await r()).browserTikzTransform(n, t, e) : await (await d()).nodeTikzTransform(n, t, e);
};
export {
  u as tikz
};
