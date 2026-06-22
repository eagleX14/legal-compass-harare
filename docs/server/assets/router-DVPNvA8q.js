import { a as Button, i as waLink, r as mailto, t as FIRM } from "./firm-fg6IM1S3.js";
import { t as PRACTICE_AREAS } from "./practice-areas-21V3x4Rw.js";
import { t as FAQS } from "./routes-b_czLqzx.js";
import { t as Route$8 } from "./practice-areas._slug-CLq9dwda.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-CMKJDdsC.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site/Header.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/practice-areas",
		label: "Practice Areas"
	},
	{
		to: "/team",
		label: "Team"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_15%,transparent)] backdrop-blur-md",
		children: [
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:py-4",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-md bg-gradient-navy text-gold shadow-soft ring-1 ring-gold/30",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-serif text-lg tracking-wider",
							children: "M&A"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate font-serif text-base font-semibold text-navy-deep sm:text-lg",
							children: FIRM.short
						}), /* @__PURE__ */ jsx("div", {
							className: "truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs",
							children: FIRM.subtitle
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ jsx("nav", {
							className: "hidden lg:flex items-center gap-1",
							children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
								to: n.to,
								activeOptions: { exact: n.to === "/" },
								className: "px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-navy data-[status=active]:text-navy-deep data-[status=active]:underline data-[status=active]:decoration-gold data-[status=active]:decoration-2 data-[status=active]:underline-offset-8",
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ jsx("a", {
							href: waLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "ml-2 hidden md:inline-flex",
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "gold",
								size: "default",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "WhatsApp Consultation"]
							})
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Toggle menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							className: "ml-1 grid h-10 w-10 place-items-center rounded-md text-navy-deep lg:hidden",
							children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})
					]
				})]
			}),
			open && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border/60 bg-background lg:hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container-prose flex flex-col py-3",
					children: [nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-muted data-[status=active]:bg-muted data-[status=active]:text-navy-deep",
						children: n.label
					}, n.to)), /* @__PURE__ */ jsx("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "gold",
							size: "lg",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "WhatsApp Consultation"]
						})
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative mt-24 bg-gradient-navy text-ivory",
		children: [
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-12 py-16 md:grid-cols-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-serif text-2xl",
								children: FIRM.short
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-1 text-xs uppercase tracking-[0.18em] text-gold",
								children: FIRM.subtitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-sm text-sm leading-relaxed text-ivory/75",
								children: "A Harare-based law firm providing client-focused legal, advisory, litigation, commercial, family, estate, employment, conveyancing, and dispute resolution services across Zimbabwe."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.18em] text-gold",
							children: "Practice Areas"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2",
							children: PRACTICE_AREAS.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/practice-areas/$slug",
								params: { slug: p.slug },
								className: "text-ivory/80 transition-colors hover:text-gold",
								children: p.title
							}) }, p.slug))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.18em] text-gold",
							children: "Contact"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-5 space-y-3 text-sm text-ivory/85",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsx("span", { children: FIRM.address.full })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsx("a", {
										href: `tel:${FIRM.phone.tel}`,
										className: "hover:text-gold",
										children: FIRM.phone.display
									})]
								}),
								FIRM.whatsapp.map((w) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsxs("a", {
										href: waLink(w.intl),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-gold",
										children: ["WhatsApp ", w.display]
									})]
								}, w.intl)),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ jsx("a", {
											href: mailto(),
											className: "break-all hover:text-gold",
											children: FIRM.emails.primary
										}), FIRM.emails.alternates.map((e) => /* @__PURE__ */ jsx("a", {
											href: mailto(e),
											className: "break-all text-ivory/65 hover:text-gold",
											children: e
										}, e))]
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-ivory/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container-prose flex flex-col gap-4 py-6 text-xs text-ivory/60 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ jsx("p", {
						className: "max-w-3xl leading-relaxed",
						children: "Information on this website is provided for general information only and does not constitute legal advice. Contacting Machaya & Associates Legal Practitioners through this website does not create a lawyer-client relationship until a formal engagement is confirmed."
					}), /* @__PURE__ */ jsxs("p", {
						className: "shrink-0",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							FIRM.name,
							"."
						]
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/components/site/FloatingActions.tsx
function FloatingWhatsApp() {
	return /* @__PURE__ */ jsx("a", {
		href: waLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "WhatsApp Machaya & Associates",
		className: "fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-105 md:bottom-6 md:right-6",
		children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
	});
}
function MobileContactBar() {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md md:hidden",
		children: [
			/* @__PURE__ */ jsxs("a", {
				href: `tel:${FIRM.phone.tel}`,
				className: "flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-navy-deep",
				"aria-label": "Call the firm",
				children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-navy" }), "Call"]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: waLink(),
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex flex-col items-center gap-1 border-x border-border py-2.5 text-xs font-medium text-navy-deep",
				"aria-label": "WhatsApp the firm",
				children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5 text-whatsapp" }), "WhatsApp"]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: mailto(),
				className: "flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-navy-deep",
				"aria-label": "Email the firm",
				children: [/* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-gold" }), "Email"]
			})
		]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-7xl text-navy-deep",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-serif text-2xl text-navy-deep",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-navy-deep",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-2xl text-navy-deep",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Please try again or return home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-navy-deep",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-navy-deep hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var orgJsonLd = {
	"@context": "https://schema.org",
	"@type": "LegalService",
	name: FIRM.name,
	url: FIRM.url,
	email: FIRM.emails.primary,
	telephone: "+263 242 710173",
	areaServed: "Zimbabwe",
	address: {
		"@type": "PostalAddress",
		streetAddress: FIRM.address.line1,
		addressLocality: "Harare",
		addressRegion: "Harare",
		addressCountry: "ZW"
	},
	contactPoint: [{
		"@type": "ContactPoint",
		telephone: "+263 772 990 567",
		contactType: "customer service",
		areaServed: "ZW",
		availableLanguage: ["English"]
	}],
	serviceType: [
		"Civil Law",
		"Criminal Law",
		"Corporate Law",
		"Commercial Law",
		"Conveyancing",
		"Notarial Practice",
		"Family Law",
		"Debt Recovery",
		"Employment Law",
		"Intellectual Property Law",
		"Litigation",
		"Dispute Resolution",
		"Tax Law",
		"Estate Administration"
	]
};
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0f1b3d"
			},
			{ title: `${FIRM.name} | Law Firm in Harare, Zimbabwe` },
			{
				name: "description",
				content: "Machaya & Associates Legal Practitioners is a Harare-based law firm offering litigation, estates, corporate law, conveyancing, family law, employment law, intellectual property, tax law, and dispute resolution services."
			},
			{
				name: "author",
				content: FIRM.name
			},
			{
				property: "og:site_name",
				content: FIRM.short
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{ title: "Lovable App" },
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				name: "twitter:title",
				content: "Lovable App"
			},
			{
				name: "description",
				content: "A professional, SEO-optimized website for Machaya & Associates Legal Practitioners, offering comprehensive legal services in Zimbabwe."
			},
			{
				property: "og:description",
				content: "A professional, SEO-optimized website for Machaya & Associates Legal Practitioners, offering comprehensive legal services in Zimbabwe."
			},
			{
				name: "twitter:description",
				content: "A professional, SEO-optimized website for Machaya & Associates Legal Practitioners, offering comprehensive legal services in Zimbabwe."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/135fcaed-32e0-4f8e-90af-d8a45d9ec76f/id-preview-0da0e5f1--3a90071a-7982-49de-9f7a-6dc1600515ef.lovable.app-1782167243465.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/135fcaed-32e0-4f8e-90af-d8a45d9ec76f/id-preview-0da0e5f1--3a90071a-7982-49de-9f7a-6dc1600515ef.lovable.app-1782167243465.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(orgJsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1 pb-16 md:pb-0",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(FloatingWhatsApp, {}),
				/* @__PURE__ */ jsx(MobileContactBar, {})
			]
		})
	});
}
//#endregion
//#region src/routes/team.tsx
var $$splitComponentImporter$5 = () => import("./team-D4mgugbn.js");
var Route$6 = createFileRoute("/team")({
	head: () => ({
		meta: [
			{ title: `Our Team | ${FIRM.short} Legal Practitioners` },
			{
				name: "description",
				content: "Meet the legal practitioners at Machaya & Associates — Dambudzo Machaya, Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa."
			},
			{
				property: "og:title",
				content: `Our Team | ${FIRM.short}`
			},
			{
				property: "og:description",
				content: "Meet our founder and associates serving clients across Zimbabwe from Harare."
			},
			{
				property: "og:url",
				content: "/team"
			}
		],
		links: [{
			rel: "canonical",
			href: "/team"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/practice-areas",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/team",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			},
			...PRACTICE_AREAS.map((p) => ({
				path: `/practice-areas/${p.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/practice-areas.tsx
var $$splitComponentImporter$4 = () => import("./practice-areas-vov4zDOX.js");
var Route$4 = createFileRoute("/practice-areas")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-B7r9vMsG.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: `Contact ${FIRM.short} | Harare Law Firm` },
			{
				name: "description",
				content: "Contact Machaya & Associates Legal Practitioners. Call (0242) 710173, WhatsApp 0772 990 567 / 0717 515 465, email machayalawyers@machayaassociates.co.zw, or visit No. 7 Eastcourt Road, Belvedere, Harare."
			},
			{
				property: "og:title",
				content: `Contact ${FIRM.short}`
			},
			{
				property: "og:description",
				content: "Get in touch with our Harare-based legal team by WhatsApp, email, or phone."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$2 = () => import("./about-Du18hiG_.js");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `About ${FIRM.short} | Harare Law Firm` },
			{
				name: "description",
				content: "Learn about Machaya & Associates Legal Practitioners — a Harare-based law firm founded by Dambudzo Machaya, with associates Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa."
			},
			{
				property: "og:title",
				content: `About ${FIRM.short} | Harare Law Firm`
			},
			{
				property: "og:description",
				content: "A growing Harare law firm built on legal excellence, integrity, and client-centered service."
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-BfErpe2k.js");
var faqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQS.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: {
			"@type": "Answer",
			text: f.a
		}
	}))
};
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: `${FIRM.name} | Law Firm in Harare, Zimbabwe` },
			{
				name: "description",
				content: "Machaya & Associates Legal Practitioners is a Harare-based law firm offering litigation, estates, corporate law, conveyancing, family law, employment law, intellectual property, tax law, and dispute resolution services."
			},
			{
				property: "og:title",
				content: `${FIRM.name} | Law Firm in Harare, Zimbabwe`
			},
			{
				property: "og:description",
				content: "Trusted legal counsel in Harare, Zimbabwe. Litigation, estates, corporate, family, conveyancing, employment, IP, tax law, and dispute resolution."
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqJsonLd)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/practice-areas.index.tsx
var $$splitComponentImporter = () => import("./practice-areas.index-CVrK67rh.js");
var Route = createFileRoute("/practice-areas/")({
	head: () => ({
		meta: [
			{ title: `Practice Areas | ${FIRM.short} Legal Practitioners` },
			{
				name: "description",
				content: "Explore the full range of legal services offered by Machaya & Associates in Harare, Zimbabwe — including litigation, conveyancing, estate administration, family, commercial, employment, IP, and tax law."
			},
			{
				property: "og:title",
				content: `Practice Areas | ${FIRM.short}`
			},
			{
				property: "og:description",
				content: "Litigation, estates, corporate, conveyancing, family, employment, IP, and tax law services in Harare, Zimbabwe."
			},
			{
				property: "og:url",
				content: "/practice-areas"
			}
		],
		links: [{
			rel: "canonical",
			href: "/practice-areas"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TeamRoute = Route$6.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$7
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var PracticeAreasRoute = Route$4.update({
	id: "/practice-areas",
	path: "/practice-areas",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var PracticeAreasIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => PracticeAreasRoute
});
var PracticeAreasRouteChildren = {
	PracticeAreasSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => PracticeAreasRoute
	}),
	PracticeAreasIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PracticeAreasRoute: PracticeAreasRoute._addFileChildren(PracticeAreasRouteChildren),
	SitemapDotxmlRoute,
	TeamRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
