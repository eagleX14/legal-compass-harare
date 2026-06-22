import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight, Home } from "lucide-react";
//#region src/components/site/Breadcrumbs.tsx
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "Breadcrumb",
		className: "text-sm",
		children: /* @__PURE__ */ jsxs("ol", {
			className: "flex flex-wrap items-center gap-1 text-muted-foreground",
			children: [/* @__PURE__ */ jsx("li", {
				className: "flex items-center",
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-1 hover:text-navy-deep",
					children: [/* @__PURE__ */ jsx(Home, { className: "h-3.5 w-3.5" }), "Home"]
				})
			}), items.map((it, i) => /* @__PURE__ */ jsxs("li", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }), it.to ? /* @__PURE__ */ jsx(Link, {
					to: it.to,
					params: it.params,
					className: "hover:text-navy-deep",
					children: it.label
				}) : /* @__PURE__ */ jsx("span", {
					className: "text-navy-deep",
					children: it.label
				})]
			}, i))]
		})
	});
}
//#endregion
export { Breadcrumbs as t };
