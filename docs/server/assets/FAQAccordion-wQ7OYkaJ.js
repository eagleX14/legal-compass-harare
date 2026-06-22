import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
//#region src/components/site/FAQAccordion.tsx
function FAQAccordion({ items }) {
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsx("div", {
		className: "divide-y divide-border rounded-xl border border-border bg-card",
		children: items.map((it, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => setOpen(isOpen ? null : i),
				"aria-expanded": isOpen,
				className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-serif text-base text-navy-deep sm:text-lg",
					children: it.q
				}), /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}` })]
			}), isOpen && /* @__PURE__ */ jsx("div", {
				className: "px-5 pb-6 text-sm leading-relaxed text-charcoal/80",
				children: it.a
			})] }, i);
		})
	});
}
//#endregion
export { FAQAccordion as t };
