import { visit as k, SKIP as h } from "unist-util-visit";
import { fromDom as T } from "hast-util-from-dom";
import v from "md5";
import { t as x } from "./utils-BcjXZ87z.js";
let o = 0;
const S = (t, r, e) => k(t, (a, i, c) => {
  if (a.type !== "element" || a.tagName !== "pre") return;
  const s = a.children.at(0);
  if (!s || s.tagName !== "code" || !s.properties.className || !s.properties.className.includes("language-tikz")) return;
  const f = x(s.children[0].value), n = document.createElement("div"), d = document.createElement("div"), u = document.createTextNode(f);
  n.classList.add("tikz-generated"), n.setAttribute("tikz-generation", o.toString()), ((e == null ? void 0 : e.center) ?? !0) && n.setAttribute("align", "center"), e != null && e.class && n.classList.add(...e.class.split(" ")), d.setAttribute("type", "tikzjax"), e != null && e.debug && d.setAttribute("data-show-console", "true"), d.appendChild(u);
  const g = v(JSON.stringify(d.dataset) + u.nodeValue);
  let l = window.localStorage.getItem(g);
  l ? (e != null && e.postProcessing && (l = e.postProcessing(l)), n.innerHTML = l) : n.appendChild(d), r.sanitizer && (n.innerHTML = r.sanitizer(n.innerHTML));
  const z = T(n);
  return c == null || c.children.splice(i, 1, z), [h, i];
});
function A(t, r) {
  var i;
  const a = (i = t.detail.carta.renderer) == null ? void 0 : i.container;
  if (!a) {
    console.error("Failed to process tikz code: cannot find renderer container element.");
    return;
  }
  o++, y(a), b(r);
}
function y(t) {
  Array.from(t.querySelectorAll(".tikz-generated[tikz-generation]")).filter((r) => Number(r.getAttribute("tikz-generation") ?? -1) < o).forEach((r) => r.remove());
}
async function b(t) {
  if (window.tikzjax != null) return;
  window.tikzjax = !0;
  const e = (
    /* html */
    `<script type="text/javascript" id="tikzjax">${(await import("./tikzjax-Bvw2IMTd.js")).default}<\/script>`
  ), a = document.createRange();
  a.selectNode(document.getElementsByTagName("body")[0]);
  const i = a.createContextualFragment(e);
  document.body.appendChild(i), document.addEventListener("tikzjax-load-finished", (c) => {
    const m = c.target;
    t != null && t.postProcessing && (m.outerHTML = t.postProcessing(m.outerHTML));
  });
}
export {
  S as browserTikzTransform,
  A as processTikzScripts
};
