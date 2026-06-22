import { n as TEAM } from "./firm-fg6IM1S3.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/TeamGrid.tsx
function TeamGrid({ heading = true }) {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background py-20 md:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-prose",
			children: [heading && /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "Our team"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
						children: "Founder & associates"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-base text-charcoal/75",
						children: "Our team brings experience drawn from the Office of the Prosecutor, the Attorney General's Office, and respected Zimbabwean law firms."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: TEAM.map((m) => /* @__PURE__ */ jsxs("article", {
					className: "flex flex-col rounded-xl border border-border bg-card p-6 text-center shadow-soft transition-colors hover:border-gold/60",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy to-navy-deep font-serif text-2xl text-gold ring-4 ring-gold/15",
							children: m.initials
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-serif text-lg text-navy-deep",
							children: m.name
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-1 text-xs uppercase tracking-[0.15em] text-gold",
							children: m.role
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed text-charcoal/75",
							children: m.bio
						})
					]
				}, m.name))
			})]
		})
	});
}
//#endregion
export { TeamGrid as t };
