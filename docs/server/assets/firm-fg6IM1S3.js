import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			gold: "bg-gradient-gold text-navy-deep shadow-gold hover:brightness-105 font-semibold ring-1 ring-gold-deep/30",
			navy: "bg-gradient-navy text-ivory shadow-elegant hover:brightness-110 font-medium ring-1 ring-ivory/10",
			whatsapp: "bg-whatsapp text-white shadow-soft hover:brightness-110 font-medium",
			outlineGold: "border border-gold/60 bg-transparent text-navy-deep hover:bg-gradient-gold hover:text-navy-deep hover:border-transparent shadow-sm"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-11 rounded-md px-7 text-base",
			xl: "h-13 rounded-md px-8 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/lib/firm.ts
var FIRM = {
	name: "Machaya & Associates Legal Practitioners",
	short: "Machaya & Associates",
	subtitle: "Legal Practitioners",
	domain: "machayaaandassociates.co.zw",
	url: "https://machayaaandassociates.co.zw",
	address: {
		line1: "No. 7 Eastcourt Road",
		line2: "Belvedere, Harare, Zimbabwe",
		full: "No. 7 Eastcourt Road, Belvedere, Harare, Zimbabwe"
	},
	phone: {
		display: "(0242) 710173",
		tel: "+263242710173"
	},
	whatsapp: [{
		display: "0772 990 567",
		intl: "263772990567"
	}, {
		display: "0717 515 465",
		intl: "263717515465"
	}],
	emails: {
		primary: "machayalawyers@machayaassociates.co.zw",
		alternates: [
			"deemachaya@gmail.com",
			"kchimiti@gmail.com",
			"mmakuva@gmail.com",
			"bridgetchapepa@gmail.com"
		]
	}
};
var waLink = (number = FIRM.whatsapp[0].intl, message = "Hello Machaya & Associates, I would like to request a legal consultation.") => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
var mailto = (to = FIRM.emails.primary, subject = "Legal Consultation Request", body) => `mailto:${to}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
var TEAM = [
	{
		name: "Dambudzo Machaya",
		role: "Founder & Legal Practitioner",
		initials: "DM",
		bio: "Founding partner of Machaya & Associates Legal Practitioners, with experience drawn from both public and private legal practice in Zimbabwe."
	},
	{
		name: "Kenias Chimiti",
		role: "Associate, Legal Practitioner",
		initials: "KC",
		bio: "Associate at the firm, advising clients across civil, commercial, and dispute resolution matters."
	},
	{
		name: "Moffat Makuvatsine",
		role: "Associate, Legal Practitioner",
		initials: "MM",
		bio: "Associate at the firm, contributing to the firm's litigation, advisory, and transactional work."
	},
	{
		name: "Bridget T. Chapepa",
		role: "Associate, Legal Practitioner",
		initials: "BC",
		bio: "Associate at the firm, working across the firm's broad civil, family, and commercial practice areas."
	}
];
//#endregion
export { Button as a, waLink as i, TEAM as n, cn as o, mailto as r, FIRM as t };
