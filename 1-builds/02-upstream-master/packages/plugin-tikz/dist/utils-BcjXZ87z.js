function r(n) {
  n = n.replaceAll("&nbsp;", "");
  let e = n.split(`
`);
  return e = e.map((t) => t.trim()), e = e.filter((t) => t), e.join(`
`);
}
export {
  r as t
};
