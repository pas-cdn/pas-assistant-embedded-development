import { q as m, j as e, v as x, I as f, S as d } from "./embed-entry-Dnm00syM.js";
const u = m({
  slots: {
    container: "flex flex-col items-center justify-center gap-2",
    iconContainer: "flex items-center justify-center w-25 h-25 bg-gray-900 rounded-full",
    icon: "text-[#2B3140] w-15 h-15",
    text: "font-semibold text-[#4A556E] text-lg/7"
  }
}), s = ({
  className: t,
  title: n,
  iconName: c,
  ...a
}) => {
  const { container: l, iconContainer: i, text: o, icon: r } = u();
  return /* @__PURE__ */ e.jsxs("div", { className: l(), ...a, children: [
    /* @__PURE__ */ e.jsx("div", { className: x(i(), t), children: /* @__PURE__ */ e.jsx(f, { name: c, className: r() }) }),
    /* @__PURE__ */ e.jsx("p", { className: o(), children: n })
  ] });
};
s.displayName = "Empty";
function p() {
  const { t } = d();
  return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center w-full h-full bg-list-active-side-nav", children: /* @__PURE__ */ e.jsx(
    s,
    {
      title: t("common.fallback.noAssistantSelected"),
      iconName: "file"
    }
  ) });
}
export {
  p as default
};
