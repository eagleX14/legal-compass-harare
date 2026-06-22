import { t as CTASection } from "./CTASection-DoftLcsD.js";
import { t as Breadcrumbs } from "./Breadcrumbs-CK8jLCuP.js";
import { t as PracticeAreasGrid } from "./PracticeAreasGrid-CDExNoHf.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/practice-areas.index.tsx?tsr-split=component
function PracticeAreasIndex() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose py-14 md:py-20",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [{ label: "Practice Areas" }] }),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl",
						children: "Practice areas"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80",
						children: "Practical, strategic counsel across ten core areas of law — for individuals, families, companies, and institutions across Zimbabwe."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(PracticeAreasGrid, { heading: false }),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { PracticeAreasIndex as component };
