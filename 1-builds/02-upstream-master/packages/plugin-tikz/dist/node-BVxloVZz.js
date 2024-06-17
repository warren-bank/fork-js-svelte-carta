import { load as h, tex as k, dvi2svg as N } from "node-tikzjax";
import { visit as s, EXIT as v, SKIP as y } from "unist-util-visit";
import { t as z } from "./utils-BcjXZ87z.js";
import { unified as T } from "unified";
import P from "rehype-parse";
const Z = async (u, b, e) => {
  const m = [];
  await h(), s(u, (a, n, l) => {
    if (a.type !== "element" || a.tagName !== "pre") return;
    const t = a.children.at(0);
    if (!t || t.tagName !== "code" || !t.properties.className || !t.properties.className.includes("language-tikz")) return;
    const d = z(t.children[0].value), f = k(d, {
      showConsole: e == null ? void 0 : e.debug
    }).then((r) => N(r)).then((r) => {
      e != null && e.postProcessing && (r = e.postProcessing(r));
      const g = T().use(P).parse(r);
      let i;
      if (s(g, (c) => {
        if (c.type === "element" && c.tagName === "svg")
          return i = c, [v];
      }), i) {
        const c = {
          type: "element",
          tagName: "div",
          properties: {
            className: ["tikz-generated", ...((e == null ? void 0 : e.class) ?? "").split(" ")],
            align: e != null && e.center ? "center" : void 0
          },
          children: [i]
        };
        l == null || l.children.splice(n, 1, c);
      } else
        console.error("plugin-tikz: could not find SVG node in TikZ output");
    }).catch((r) => {
      e != null && e.debug && console.error("plugin-tikz: error processing TikZ code block:", r);
    });
    return m.push(f), [y];
  }), await Promise.all(m);
};
export {
  Z as nodeTikzTransform
};
