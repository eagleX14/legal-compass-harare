import { t as FIRM } from "./firm-fg6IM1S3.js";
import { t as CTASection } from "./CTASection-DoftLcsD.js";
import { t as TeamGrid } from "./TeamGrid--k-GQOFn.js";
import { t as Breadcrumbs } from "./Breadcrumbs-CK8jLCuP.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Eye, Handshake, Lock, ShieldCheck, Sparkles } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var VALUES = [
	{
		icon: ShieldCheck,
		k: "Integrity",
		v: "Ethical practice in every matter we accept."
	},
	{
		icon: Sparkles,
		k: "Professionalism",
		v: "Disciplined, prepared, and respectful."
	},
	{
		icon: Handshake,
		k: "Responsiveness",
		v: "Direct, prompt communication with clients."
	},
	{
		icon: Lock,
		k: "Confidentiality",
		v: "Discretion is foundational to our work."
	},
	{
		icon: Eye,
		k: "Client-centered",
		v: "Your objectives shape our strategy."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose py-14 md:py-20",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [{ label: "About" }] }),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl",
						children: "About our firm"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80",
						children: [FIRM.name, " is a growing law firm based in Harare, Zimbabwe, dedicated to providing comprehensive legal and advisory services to a diverse clientele."]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Our story"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
							children: "Founded on excellence and integrity"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 space-y-5 text-base leading-relaxed text-charcoal/80",
					children: [/* @__PURE__ */ jsx("p", { children: "The firm was founded by Dambudzo Machaya, with associates Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa. It is built on legal excellence, integrity, and client-centered service — and grounded in the belief that good lawyering means clear advice, careful preparation, and steady representation." }), /* @__PURE__ */ jsx("p", { children: "Our team brings experience drawn from the Office of the Prosecutor, the Attorney General's Office, and respected Zimbabwean law firms. That blend of public and private practice gives us strong insight into how matters move through Zimbabwe's legal and regulatory systems — from advisory work to courtroom advocacy." })]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("article", {
					className: "rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Mission"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-2xl text-navy-deep sm:text-3xl",
							children: "Why we practice"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base leading-relaxed text-charcoal/80",
							children: "To provide exceptional, innovative, and client-focused legal services that safeguard clients' interests while promoting justice, integrity, and the rule of law."
						})
					]
				}), /* @__PURE__ */ jsxs("article", {
					className: "rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Vision"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-2xl text-navy-deep sm:text-3xl",
							children: "What we aspire to"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base leading-relaxed text-charcoal/80",
							children: "To uphold the highest standards of professionalism, ethics, and service excellence while fostering enduring relationships founded upon trust, responsiveness, and a steadfast commitment to achieving clients' objectives."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Our values"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
							children: "The principles that guide us"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mt-6" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
					children: VALUES.map((v) => {
						const Icon = v.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-11 w-11 place-items-center rounded-lg bg-navy-deep text-gold",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-serif text-lg text-navy-deep",
									children: v.k
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-charcoal/75",
									children: v.v
								})
							]
						}, v.k);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(TeamGrid, {}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { AboutPage as component };
