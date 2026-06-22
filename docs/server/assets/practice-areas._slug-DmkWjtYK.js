import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/practice-areas.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-prose py-24 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-serif text-4xl text-navy-deep",
		children: "Practice area not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/practice-areas",
		className: "mt-6 inline-block text-navy underline",
		children: "View all practice areas"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
