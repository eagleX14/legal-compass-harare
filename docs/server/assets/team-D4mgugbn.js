import { t as CTASection } from "./CTASection-DoftLcsD.js";
import { t as TeamGrid } from "./TeamGrid--k-GQOFn.js";
import { t as Breadcrumbs } from "./Breadcrumbs-CK8jLCuP.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/team.tsx?tsr-split=component
function TeamPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose py-14 md:py-20",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [{ label: "Team" }] }),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl",
						children: "Our team"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80",
						children: "A collaborative team of legal practitioners committed to clear advice, careful preparation, and dedicated representation for every client."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(TeamGrid, { heading: false }),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { TeamPage as component };
