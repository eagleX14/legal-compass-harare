import { a as Button, i as waLink, r as mailto } from "./firm-fg6IM1S3.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
//#region src/components/site/CTASection.tsx
function CTASection({ title = "Speak to a Legal Practitioner", body = "Get confidential, practical advice from our team. We respond promptly through WhatsApp, email, and phone.", variant = "navy" }) {
	const isNavy = variant === "navy";
	return /* @__PURE__ */ jsxs("section", {
		className: `relative overflow-hidden ${isNavy ? "bg-gradient-navy" : "bg-gradient-ivory"}`,
		children: [isNavy && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl",
			style: { background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 40%, transparent), transparent 65%)" }
		}), /* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "container-prose relative grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: `text-xs uppercase tracking-[0.22em] ${isNavy ? "text-gold" : "text-gold-deep"}`,
					children: "Speak with us"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: `mt-3 font-serif text-3xl sm:text-4xl ${isNavy ? "text-ivory" : "text-navy-deep"}`,
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: `mt-4 max-w-2xl text-base leading-relaxed ${isNavy ? "text-ivory/75" : "text-charcoal/75"}`,
					children: body
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "gold",
							size: "lg",
							className: "w-full sm:w-auto",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: mailto(),
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: isNavy ? "outlineGold" : "navy",
							size: "lg",
							className: `w-full sm:w-auto ${isNavy ? "border-gold/60 text-ivory hover:text-navy-deep" : ""}`,
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Email"]
						})
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "lg",
							className: `w-full sm:w-auto ${isNavy ? "text-ivory hover:bg-ivory/10 hover:text-ivory" : "text-navy-deep"}`,
							children: ["Contact page", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { CTASection as t };
