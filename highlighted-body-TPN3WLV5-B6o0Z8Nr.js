import { R as c, M as p, B as x } from "./mermaid-VLURNSYL-KtsFwY3v.js";
import { r, j as d } from "./embed-entry-DNbXY835.js";
var R = ({ code: i, language: e, raw: t, className: g, startLine: u, ...m }) => {
  let { shikiTheme: o } = r.useContext(c), a = p(), [n, s] = r.useState(t);
  return r.useEffect(() => {
    if (!a) {
      s(t);
      return;
    }
    let l = a.highlight({ code: i, language: e, themes: o }, (h) => {
      s(h);
    });
    l && s(l);
  }, [i, e, o, a, t]), d.jsx(x, { className: g, language: e, result: n, startLine: u, ...m });
};
export {
  R as HighlightedCodeBlockBody
};
