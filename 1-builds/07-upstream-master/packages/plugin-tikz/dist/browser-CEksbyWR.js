import { visit as z, SKIP as k } from "unist-util-visit";
import { fromDom as T } from "hast-util-from-dom";
import h from "md5";
import { t as x } from "./utils-BcjXZ87z.js";
const j = (r, i, e) => {
  const n = (/* @__PURE__ */ new Date()).getTime();
  z(r, (t, m, c) => {
    if (t.type !== "element" || t.tagName !== "pre") return;
    const s = t.children.at(0);
    if (!s || s.tagName !== "code" || !s.properties.className || !s.properties.className.includes("language-tikz")) return;
    const u = x(s.children[0].value), a = document.createElement("div"), d = document.createElement("div"), o = document.createTextNode(u);
    a.classList.add("tikz-generated"), a.setAttribute("tikz-generation", n.toString()), ((e == null ? void 0 : e.center) ?? !0) && a.setAttribute("align", "center"), e != null && e.class && a.classList.add(...e.class.split(" ")), d.setAttribute("type", "tikzjax"), e != null && e.debug && d.setAttribute("data-show-console", "true"), d.appendChild(o);
    const g = h(JSON.stringify(d.dataset) + o.nodeValue);
    let l = window.localStorage.getItem(g);
    l ? (e != null && e.postProcessing && (l = e.postProcessing(l)), a.innerHTML = l) : a.appendChild(d), i.sanitizer && (a.innerHTML = i.sanitizer(a.innerHTML));
    const f = T(a);
    return c == null || c.children.splice(m, 1, f), [k, m];
  });
};
function L(r, i) {
  var t;
  const n = (t = r.detail.carta.renderer) == null ? void 0 : t.container;
  if (!n) {
    console.error("Failed to process tikz code: cannot find renderer container element.");
    return;
  }
  b(n), y(i);
}
function b(r) {
  const i = r.querySelectorAll(".tikz-generated[tikz-generation]"), e = Array.from(i).map(
    (t) => Number(t.getAttribute("tikz-generation") ?? -1)
  ), n = Math.max(...e);
  r.querySelectorAll(".tikz-generated[tikz-generation]").forEach((t) => {
    Number(t.getAttribute("tikz-generation") ?? -1) < n && t.remove();
  });
}
async function y(r) {
  if (window.tikzjax != null) return;
  window.tikzjax = !0;
  const e = (
    /* html */
    `<script type="text/javascript" id="tikzjax">${(await import("./tikzjax-Bvw2IMTd.js")).default}<\/script>`
  ), n = document.createRange();
  n.selectNode(document.getElementsByTagName("body")[0]);
  const t = n.createContextualFragment(e);
  document.body.appendChild(t), document.addEventListener("tikzjax-load-finished", (m) => {
    const c = m.target;
    r != null && r.postProcessing && (c.outerHTML = r.postProcessing(c.outerHTML));
  });
}
export {
  j as browserTikzTransform,
  L as processTikzScripts
};
