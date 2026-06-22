import { a as Button, i as waLink } from "./firm-fg6IM1S3.js";
import { t as PRACTICE_AREAS } from "./practice-areas-21V3x4Rw.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Briefcase, Calculator, Gavel, Landmark, MessageCircle, Scale, Scroll, ShieldCheck, Stamp, Users, UsersRound } from "lucide-react";
//#region src/components/site/PracticeAreasGrid.tsx
var ICONS = {
	scroll: Scroll,
	gavel: Gavel,
	briefcase: Briefcase,
	stamp: Stamp,
	users: Users,
	scale: Scale,
	"users-round": UsersRound,
	"shield-check": ShieldCheck,
	landmark: Landmark,
	calculator: Calculator
};
function PracticeAreasGrid({ heading = true }) {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background py-20 md:py-24",
		id: "practice-areas",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-prose",
			children: [
				heading && /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "What we do"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
							children: "Comprehensive legal services"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mt-6" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-base text-charcoal/75",
							children: "Practical, strategic counsel across the matters that affect individuals, families, companies, and institutions in Zimbabwe."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: PRACTICE_AREAS.map((p) => {
						const Icon = ICONS[p.icon] ?? Scale;
						return /* @__PURE__ */ jsxs("article", {
							className: "premium-card group relative flex flex-col overflow-hidden p-6 sm:p-7",
							children: [
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": true,
									className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-navy text-gold ring-1 ring-gold/40 shadow-soft transition-transform group-hover:scale-105",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-serif text-xl text-navy-deep",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-charcoal/75",
									children: p.short
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 pt-1",
									children: [
										/* @__PURE__ */ jsxs(Link, {
											to: "/practice-areas/$slug",
											params: { slug: p.slug },
											className: "inline-flex items-center gap-1 text-sm font-semibold text-navy-deep transition-colors hover:text-gold-deep",
											children: ["Learn more", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
										}),
										/* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-border" }),
										/* @__PURE__ */ jsxs("a", {
											href: waLink(void 0, `Hello Machaya & Associates, I would like to request assistance with ${p.title}.`),
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 text-sm font-medium text-charcoal/75 hover:text-whatsapp",
											children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }), "Request assistance"]
										})
									]
								})
							]
						}, p.slug);
					})
				}),
				heading && /* @__PURE__ */ jsx("div", {
					className: "mt-12 flex justify-center",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/practice-areas",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outlineGold",
							size: "lg",
							children: "Explore all practice areas"
						})
					})
				})
			]
		})
	});
}
//#endregion
export { PracticeAreasGrid as t };
