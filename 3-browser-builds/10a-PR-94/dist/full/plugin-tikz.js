const s = (t) => ({
  onLoad: async ({ carta: e }) => {
    var r;
    const n = await e.highlighter();
    n && (await n.loadLanguage("tex"), (r = e.input) == null || r.update());
  },
  transformers: [
    {
      execution: "async",
      type: "rehype",
      transform({ carta: e, processor: n }) {
        n.use(o, { carta: e, options: t });
      }
    }
  ],
  listeners: [
    [
      "carta-render",
      async (e) => {
        (await import('./browser-CEksbyWR-DW60-fUJ.js')).processTikzScripts(e, t);
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
}), o = ({ carta: t, options: e }) => async function(n) {
  return (await import('./browser-CEksbyWR-DW60-fUJ.js')).browserTikzTransform(n, t, e) ;
};

export { s as default };
