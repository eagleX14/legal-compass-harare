import { a as Button, i as waLink, r as mailto, t as FIRM } from "./firm-fg6IM1S3.js";
import { t as PRACTICE_AREAS } from "./practice-areas-21V3x4Rw.js";
import { t as Route } from "./practice-areas._slug-CLq9dwda.js";
import { t as CTASection } from "./CTASection-DoftLcsD.js";
import { t as Breadcrumbs } from "./Breadcrumbs-CK8jLCuP.js";
import { t as FAQAccordion } from "./FAQAccordion-wQ7OYkaJ.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
//#region src/routes/practice-areas.$slug.tsx?tsr-split=component
function PracticeAreaPage() {
	const area = Route.useLoaderData();
	const params = Route.useParams();
	const related = PRACTICE_AREAS.filter((p) => p.slug !== params.slug).slice(0, 4);
	const waMsg = `Hello ${FIRM.short}, I would like to request assistance with ${area.title}.`;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose py-14 md:py-20",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [{
						label: "Practice Areas",
						to: "/practice-areas"
					}, { label: area.title }] }),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl text-navy-deep sm:text-5xl",
						children: area.title
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80",
						children: area.short
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx("a", {
							href: waLink(void 0, waMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "gold",
								size: "lg",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "Request assistance on WhatsApp"]
							})
						}), /* @__PURE__ */ jsx("a", {
							href: mailto(FIRM.emails.primary, `Enquiry: ${area.title}`, `Hello ${FIRM.short},\n\nI would like to request assistance regarding ${area.title}.\n\n`),
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "navy",
								size: "lg",
								children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Email our team"]
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Overview"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-3xl text-navy-deep",
							children: "How we can help"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-base leading-relaxed text-charcoal/80",
							children: area.description
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-8 space-y-3",
							children: area.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 text-base text-charcoal/85",
								children: [/* @__PURE__ */ jsx(Check, { className: "mt-1 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsx("span", { children: b })]
							}, b))
						})
					]
				}), /* @__PURE__ */ jsx("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "Get in touch"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-serif text-2xl text-navy-deep",
								children: "Speak to a practitioner"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-charcoal/75",
								children: "Confidential. Direct. Professional. Reach us through your preferred channel and we will respond promptly."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex flex-col gap-3",
								children: [
									/* @__PURE__ */ jsx("a", {
										href: waLink(void 0, waMsg),
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "whatsapp",
											size: "lg",
											className: "w-full justify-center",
											children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
										})
									}),
									/* @__PURE__ */ jsx("a", {
										href: mailto(FIRM.emails.primary, `Enquiry: ${area.title}`),
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "navy",
											size: "lg",
											className: "w-full justify-center",
											children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Email"]
										})
									}),
									/* @__PURE__ */ jsx("a", {
										href: `tel:${FIRM.phone.tel}`,
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "outlineGold",
											size: "lg",
											className: "w-full justify-center",
											children: ["Call ", FIRM.phone.display]
										})
									})
								]
							})
						]
					})
				})]
			})
		}),
		area.faq.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "bg-ivory py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "FAQ"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-3xl text-navy-deep",
							children: "Frequently asked questions"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ jsx(FAQAccordion, { items: area.faq })
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "More from our practice"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl text-navy-deep",
						children: "Related areas"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: related.map((r) => /* @__PURE__ */ jsxs(Link, {
							to: "/practice-areas/$slug",
							params: { slug: r.slug },
							className: "group flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-serif text-lg text-navy-deep",
									children: r.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 line-clamp-3 text-sm text-charcoal/75",
									children: r.short
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy",
									children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}, r.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, { title: `Need help with ${area.title.toLowerCase()}?` })
	] });
}
//#endregion
export { PracticeAreaPage as component };
