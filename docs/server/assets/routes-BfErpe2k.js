import { a as Button, i as waLink, r as mailto, t as FIRM } from "./firm-fg6IM1S3.js";
import { t as FAQS } from "./routes-b_czLqzx.js";
import { t as CTASection } from "./CTASection-DoftLcsD.js";
import { t as TeamGrid } from "./TeamGrid--k-GQOFn.js";
import { t as PracticeAreasGrid } from "./PracticeAreasGrid-CDExNoHf.js";
import { t as FAQAccordion } from "./FAQAccordion-wQ7OYkaJ.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Compass, HeartHandshake, Mail, MapPin, MessageCircle, Phone, Target } from "lucide-react";
//#region src/assets/hero-chambers.jpg
var hero_chambers_default = "/assets/hero-chambers-DKhrOUlB.jpg";
//#endregion
//#region src/components/site/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-gradient-navy text-ivory",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl",
				style: { background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent), transparent 60%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl",
				style: { background: "radial-gradient(circle, color-mix(in oklab, var(--navy) 80%, transparent), transparent 65%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.07]",
				style: {
					backgroundImage: "radial-gradient(circle at 20% 20%, var(--ivory) 1px, transparent 1px), radial-gradient(circle at 80% 60%, var(--gold) 1px, transparent 1px)",
					backgroundSize: "44px 44px, 60px 60px"
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container-prose relative grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur-sm sm:text-xs",
							children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_var(--gold)]" }), "Harare · Zimbabwe · Est. Belvedere"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-6 font-serif text-[2.25rem] leading-[1.05] text-ivory sm:text-5xl lg:text-[4rem]",
							children: ["Trusted Legal Counsel in ", /* @__PURE__ */ jsx("span", {
								className: "gold-text italic",
								children: "Harare, Zimbabwe"
							})]
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-7" }),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory/80 sm:text-lg",
							children: [FIRM.name, " provides discreet, client-focused legal, advisory, litigation, commercial, family, estate, employment, conveyancing, and dispute resolution services."]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: waLink(),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "gold",
										size: "xl",
										className: "w-full sm:w-auto",
										children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), "WhatsApp Us"]
									})
								}),
								/* @__PURE__ */ jsx("a", {
									href: mailto(),
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "outlineGold",
										size: "xl",
										className: "w-full border-gold/50 text-ivory hover:text-navy-deep sm:w-auto",
										children: [/* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }), "Email Our Legal Team"]
									})
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/practice-areas",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "ghost",
										size: "xl",
										className: "w-full text-ivory/90 hover:bg-ivory/10 hover:text-ivory sm:w-auto",
										children: ["Practice Areas", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								})
							]
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm sm:grid-cols-3",
							children: [
								"Harare-based",
								"Client-centered",
								"Court & advisory experience"
							].map((t) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-ivory/75",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }), t]
							}, t))
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "absolute -inset-4 rounded-3xl bg-gradient-gold opacity-30 blur-3xl"
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden rounded-2xl shadow-elegant ring-1 ring-gold/30",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: hero_chambers_default,
									alt: "Elegant law firm chambers with mahogany desk, brass scales of justice, and antique law books",
									width: 1024,
									height: 1536,
									className: "h-[380px] w-full object-cover sm:h-[520px] lg:h-[640px]"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-deep/40 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-8",
									children: [
										/* @__PURE__ */ jsx("span", { className: "hairline-gold" }),
										/* @__PURE__ */ jsx("div", {
											className: "mt-4 text-[10px] uppercase tracking-[0.22em] text-gold",
											children: "Visit our chambers"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-2 font-serif text-lg leading-snug sm:text-2xl",
											children: "No. 7 Eastcourt Road, Belvedere, Harare"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-3 flex items-center gap-2 text-xs text-ivory/80",
											children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-gold" }), "Zimbabwe"]
										}),
										/* @__PURE__ */ jsx("a", {
											href: waLink(),
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-5 inline-flex",
											children: /* @__PURE__ */ jsxs(Button, {
												variant: "gold",
												size: "default",
												children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "Start on WhatsApp"]
											})
										})
									]
								})
							]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/site/WhyChooseUs.tsx
var POINTS = [
	{
		icon: HeartHandshake,
		title: "Client-centered approach",
		body: "We listen carefully, explain clearly, and build a strategy around your actual objectives."
	},
	{
		icon: Award,
		title: "Professional excellence",
		body: "Disciplined preparation, ethical practice, and meticulous attention to detail on every matter."
	},
	{
		icon: Compass,
		title: "Strategic & practical",
		body: "Solutions that work in the real world — commercially sound, legally rigorous, and actionable."
	},
	{
		icon: Phone,
		title: "Responsive & accessible",
		body: "Direct access to your legal practitioner through phone, WhatsApp, email, and office visits."
	},
	{
		icon: Target,
		title: "Results-driven",
		body: "We focus on outcomes that protect and advance our clients' interests at every stage."
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-gradient-navy py-20 text-ivory md:py-28",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-3xl",
			style: { background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 65%)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "container-prose relative",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "Why clients choose us"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-4 font-serif text-3xl text-ivory sm:text-4xl",
						children: [
							"A firm built on ",
							/* @__PURE__ */ jsx("span", {
								className: "gold-text",
								children: "trust"
							}),
							" and results"
						]
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mt-6" })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
				children: POINTS.map((p) => /* @__PURE__ */ jsxs("div", {
					className: "group relative flex flex-col rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-ivory/[0.07]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold ring-1 ring-gold-deep/30",
							children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-serif text-lg text-ivory",
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-ivory/70",
							children: p.body
						})
					]
				}, p.title))
			})]
		})]
	});
}
//#endregion
//#region src/assets/about-scales.jpg
var about_scales_default = "/assets/about-scales-DLEY1Bjf.jpg";
//#endregion
//#region src/assets/cta-courthouse.jpg
var cta_courthouse_default = "/assets/cta-courthouse-kq5dBsuQ.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsxs("section", {
			"aria-label": "Trust",
			className: "relative border-y border-border bg-gradient-ivory",
			children: [/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
			}), /* @__PURE__ */ jsx("div", {
				className: "container-prose grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4",
				children: [
					{
						k: "Harare",
						v: "Belvedere chambers"
					},
					{
						k: "Multi-practice",
						v: "10 areas of law"
					},
					{
						k: "Direct access",
						v: "WhatsApp, email & phone"
					},
					{
						k: "Confidential",
						v: "Discreet consultations"
					}
				].map((t, i) => /* @__PURE__ */ jsxs("div", {
					className: `px-2 text-center ${i > 0 ? "sm:border-l sm:border-gold/20" : ""}`,
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-serif text-lg text-navy-deep sm:text-xl",
						children: t.k
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs",
						children: t.v
					})]
				}, t.k))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-12 lg:grid-cols-12 lg:items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": true,
								className: "absolute -inset-4 rounded-3xl bg-gradient-gold opacity-25 blur-3xl"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative overflow-hidden rounded-2xl shadow-elegant ring-1 ring-gold/30",
								children: [/* @__PURE__ */ jsx("img", {
									src: about_scales_default,
									alt: "Brass scales of justice resting on antique leather-bound law books",
									width: 1280,
									height: 1024,
									loading: "lazy",
									className: "h-[320px] w-full object-cover sm:h-[460px]"
								}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute -bottom-5 left-4 right-4 rounded-xl border border-gold/40 bg-gradient-ivory px-5 py-4 text-navy-deep shadow-elegant sm:-bottom-6 sm:right-auto sm:left-auto sm:-right-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] uppercase tracking-[0.22em] text-gold-deep",
									children: "Est. Harare"
								}), /* @__PURE__ */ jsx("div", {
									className: "font-serif text-lg",
									children: "Belvedere Chambers"
								})]
							})
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "About the firm"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
							children: "A Harare-based law firm built on integrity and service"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-base leading-relaxed text-charcoal/80",
							children: "Machaya & Associates Legal Practitioners is a growing law firm based in Harare, Zimbabwe, dedicated to providing comprehensive legal and advisory services to a diverse clientele. Founded by Dambudzo Machaya — with associates Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa — the firm is built on legal excellence, integrity, and client-centered service."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base leading-relaxed text-charcoal/80",
							children: "Our team brings experience drawn from the Office of the Prosecutor, the Attorney General's Office, and respected Zimbabwean law firms — giving us strong insight into both public and private legal practice."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/about",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outlineGold",
									size: "lg",
									children: ["Read more about us", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
								})
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative h-[260px] overflow-hidden sm:h-[320px] md:h-[400px]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: cta_courthouse_default,
					alt: "Neoclassical courthouse colonnade at golden hour",
					width: 1600,
					height: 900,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-midnight via-navy-deep/70 to-navy/20" }),
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
				}),
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "container-prose relative flex h-full items-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-xl text-ivory",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-[0.22em] text-gold sm:text-xs",
							children: "Committed to the rule of law"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "mt-3 font-serif text-2xl leading-tight text-ivory sm:text-3xl md:text-4xl",
							children: [
								"Practical counsel. Principled advocacy. ",
								/* @__PURE__ */ jsx("span", {
									className: "gold-text",
									children: "Real outcomes"
								}),
								" for our clients."
							]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(PracticeAreasGrid, {}),
		/* @__PURE__ */ jsx(WhyChooseUs, {}),
		/* @__PURE__ */ jsx(TeamGrid, {}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Schedule a confidential consultation",
			body: "Speak with a legal practitioner about your matter. We respond promptly and discreetly through WhatsApp, email, and phone."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "Visit · Call · Write"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
						children: "Get in touch with our team"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-8 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-5 w-5 text-gold" }), /* @__PURE__ */ jsx("span", {
									className: "text-charcoal/85",
									children: FIRM.address.full
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-5 w-5 text-gold" }), /* @__PURE__ */ jsx("a", {
									href: `tel:${FIRM.phone.tel}`,
									className: "text-charcoal/85 hover:text-navy-deep",
									children: FIRM.phone.display
								})]
							}),
							FIRM.whatsapp.map((w) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-5 w-5 text-gold" }), /* @__PURE__ */ jsxs("a", {
									href: waLink(w.intl),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-charcoal/85 hover:text-navy-deep",
									children: ["WhatsApp ", w.display]
								})]
							}, w.intl)),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-5 w-5 text-gold" }), /* @__PURE__ */ jsx("a", {
									href: mailto(),
									className: "break-all text-charcoal/85 hover:text-navy-deep",
									children: FIRM.emails.primary
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "navy",
								size: "lg",
								children: ["Full contact details", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					})
				] }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "Frequently asked"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-serif text-3xl text-navy-deep sm:text-4xl",
						children: "Common questions"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: /* @__PURE__ */ jsx(FAQAccordion, { items: FAQS })
					})
				] })]
			})
		})
	] });
}
//#endregion
export { Home as component };
