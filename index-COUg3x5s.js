import { u as v, r as x, a as j, V as N, b as R, v as T, t as S, c as g } from "./mermaid-VLURNSYL-DR5qm_B6.js";
import { r as u, j as d } from "./embed-entry-B68VGA8B.js";
const H = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", b = [], E = { allowDangerousHtml: !0 }, F = /^(https?|ircs?|mailto|xmpp)$/i, D = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function A(e) {
  const r = w(e), t = h(e);
  return y(r.runSync(r.parse(t), t), e);
}
async function V(e) {
  const r = w(e), t = h(e), n = await r.run(r.parse(t), t);
  return y(n, e);
}
function q(e) {
  const r = w(e), [t, n] = u.useState(
    /** @type {Error | undefined} */
    void 0
  ), [a, i] = u.useState(
    /** @type {Root | undefined} */
    void 0
  );
  if (u.useEffect(
    /* c8 ignore next 7 -- hooks are client-only. */
    function() {
      const m = h(e);
      r.run(r.parse(m), m, function(f, p) {
        n(f), i(p);
      });
    },
    [
      e.children,
      e.rehypePlugins,
      e.remarkPlugins,
      e.remarkRehypeOptions
    ]
  ), t) throw t;
  return a ? y(a, e) : u.createElement(d.Fragment);
}
function w(e) {
  const r = e.rehypePlugins || b, t = e.remarkPlugins || b, n = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...E } : E;
  return v().use(x).use(t).use(j, n).use(r);
}
function h(e) {
  const r = e.children || "", t = new N();
  return typeof r == "string" && (t.value = r), t;
}
function y(e, r) {
  const t = r.allowedElements, n = r.allowElement, a = r.components, i = r.disallowedElements, m = r.skipHtml, f = r.unwrapDisallowed, p = r.urlTransform || I;
  for (const s of D)
    Object.hasOwn(r, s.from) && R(
      "Unexpected `" + s.from + "` prop, " + (s.to ? "use `" + s.to + "` instead" : "remove it") + " (see <" + H + "#" + s.id + "> for more info)"
    );
  return r.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: r.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), T(e, O), S(e, {
    Fragment: d.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: a,
    ignoreInvalidStyle: !0,
    jsx: d.jsx,
    jsxs: d.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function O(s, l, c) {
    if (s.type === "raw" && c && typeof l == "number")
      return m ? c.children.splice(l, 1) : c.children[l] = { type: "text", value: s.value }, l;
    if (s.type === "element") {
      let o;
      for (o in g)
        if (Object.hasOwn(g, o) && Object.hasOwn(s.properties, o)) {
          const P = s.properties[o], k = g[o];
          (k === null || k.includes(s.tagName)) && (s.properties[o] = p(String(P || ""), o, s));
        }
    }
    if (s.type === "element") {
      let o = t ? !t.includes(s.tagName) : i ? i.includes(s.tagName) : !1;
      if (!o && n && typeof l == "number" && (o = !n(s, l, c)), o && c && typeof l == "number")
        return f && s.children ? c.children.splice(l, 1, ...s.children) : c.children.splice(l, 1), l;
    }
  }
}
function I(e) {
  const r = e.indexOf(":"), t = e.indexOf("?"), n = e.indexOf("#"), a = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    a !== -1 && r > a || t !== -1 && r > t || n !== -1 && r > n || // It is a protocol, it should be allowed.
    F.test(e.slice(0, r)) ? e : ""
  );
}
export {
  V as MarkdownAsync,
  q as MarkdownHooks,
  A as default,
  I as defaultUrlTransform
};
