import { a as Button, i as waLink, o as cn, r as mailto, t as FIRM } from "./firm-fg6IM1S3.js";
import { t as PRACTICE_AREAS } from "./practice-areas-21V3x4Rw.js";
import { t as Breadcrumbs } from "./Breadcrumbs-CK8jLCuP.js";
import * as React from "react";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Check, ChevronDown, ChevronUp, Circle, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cva } from "class-variance-authority";
import { z } from "zod";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/checkbox.tsx
var Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//#endregion
//#region src/components/site/ContactForm.tsx
var Schema = z.object({
	name: z.string().trim().min(2, "Please enter your full name").max(100),
	phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
	email: z.string().trim().email("Please enter a valid email").max(255),
	matter: z.string().min(1, "Please select a matter type"),
	contact: z.enum([
		"whatsapp",
		"email",
		"phone"
	]),
	message: z.string().trim().min(10, "Please provide a brief description").max(1e3),
	consent: z.literal(true, { errorMap: () => ({ message: "Please accept the disclaimer" }) })
});
var INITIAL = {
	name: "",
	phone: "",
	email: "",
	matter: "",
	contact: "whatsapp",
	message: "",
	consent: false
};
function buildMessage(d) {
	return [
		`Hello ${FIRM.short},`,
		"",
		`I would like to request legal assistance.`,
		"",
		`Name: ${d.name}`,
		`Phone: ${d.phone}`,
		`Email: ${d.email}`,
		`Matter: ${d.matter}`,
		`Preferred contact: ${d.contact}`,
		"",
		"Message:",
		d.message
	].join("\n");
}
function ContactForm() {
	const [data, setData] = useState(INITIAL);
	const [errors, setErrors] = useState({});
	const update = (k, v) => setData((d) => ({
		...d,
		[k]: v
	}));
	const validate = () => {
		const r = Schema.safeParse(data);
		if (r.success) {
			setErrors({});
			return true;
		}
		const e = {};
		r.error.issues.forEach((i) => {
			const k = i.path[0];
			if (!e[k]) e[k] = i.message;
		});
		setErrors(e);
		return false;
	};
	const handleWhatsApp = (e) => {
		e.preventDefault();
		if (!validate()) return;
		window.open(waLink(void 0, buildMessage(data)), "_blank", "noopener");
	};
	const handleEmail = (e) => {
		e.preventDefault();
		if (!validate()) return;
		window.location.href = mailto(FIRM.emails.primary, `Legal Consultation Request — ${data.name}`, buildMessage(data));
	};
	return /* @__PURE__ */ jsxs("form", {
		className: "space-y-5 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ jsx(Field, {
					label: "Full name",
					error: errors.name,
					htmlFor: "name",
					children: /* @__PURE__ */ jsx(Input, {
						id: "name",
						value: data.name,
						onChange: (e) => update("name", e.target.value),
						maxLength: 100,
						autoComplete: "name",
						required: true
					})
				}), /* @__PURE__ */ jsx(Field, {
					label: "Phone number",
					error: errors.phone,
					htmlFor: "phone",
					children: /* @__PURE__ */ jsx(Input, {
						id: "phone",
						type: "tel",
						value: data.phone,
						onChange: (e) => update("phone", e.target.value),
						maxLength: 30,
						autoComplete: "tel",
						required: true
					})
				})]
			}),
			/* @__PURE__ */ jsx(Field, {
				label: "Email",
				error: errors.email,
				htmlFor: "email",
				children: /* @__PURE__ */ jsx(Input, {
					id: "email",
					type: "email",
					value: data.email,
					onChange: (e) => update("email", e.target.value),
					maxLength: 255,
					autoComplete: "email",
					required: true
				})
			}),
			/* @__PURE__ */ jsx(Field, {
				label: "Matter type",
				error: errors.matter,
				htmlFor: "matter",
				children: /* @__PURE__ */ jsxs(Select, {
					value: data.matter,
					onValueChange: (v) => update("matter", v),
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id: "matter",
						children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a matter" })
					}), /* @__PURE__ */ jsxs(SelectContent, { children: [PRACTICE_AREAS.map((p) => /* @__PURE__ */ jsx(SelectItem, {
						value: p.title,
						children: p.title
					}, p.slug)), /* @__PURE__ */ jsx(SelectItem, {
						value: "Other / General enquiry",
						children: "Other / General enquiry"
					})] })]
				})
			}),
			/* @__PURE__ */ jsx(Field, {
				label: "Preferred contact method",
				error: errors.contact,
				children: /* @__PURE__ */ jsx(RadioGroup, {
					value: data.contact,
					onValueChange: (v) => update("contact", v),
					className: "flex flex-wrap gap-4",
					children: [
						"whatsapp",
						"email",
						"phone"
					].map((m) => /* @__PURE__ */ jsxs("label", {
						className: "flex items-center gap-2 text-sm capitalize",
						children: [/* @__PURE__ */ jsx(RadioGroupItem, {
							value: m,
							id: `c-${m}`
						}), m]
					}, m))
				})
			}),
			/* @__PURE__ */ jsx(Field, {
				label: "Short message",
				error: errors.message,
				htmlFor: "message",
				children: /* @__PURE__ */ jsx(Textarea, {
					id: "message",
					rows: 5,
					value: data.message,
					onChange: (e) => update("message", e.target.value),
					maxLength: 1e3,
					placeholder: "Briefly describe your matter. Please avoid sharing highly sensitive information here.",
					required: true
				})
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "flex items-start gap-3 text-sm text-charcoal/80",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					checked: data.consent,
					onCheckedChange: (v) => update("consent", v === true),
					className: "mt-1"
				}), /* @__PURE__ */ jsxs("span", { children: [
					"I understand that submitting this form does not create a lawyer-client relationship until formally accepted by ",
					FIRM.short,
					" Legal Practitioners."
				] })]
			}),
			errors.consent && /* @__PURE__ */ jsx("p", {
				className: "-mt-3 text-xs text-destructive",
				children: errors.consent
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted-foreground",
				children: "Please avoid submitting highly sensitive confidential information through this form."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-3 pt-1",
				children: [/* @__PURE__ */ jsxs(Button, {
					type: "submit",
					variant: "whatsapp",
					size: "lg",
					onClick: handleWhatsApp,
					children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "Send via WhatsApp"]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "navy",
					size: "lg",
					onClick: handleEmail,
					children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Send via Email"]
				})]
			})
		]
	});
}
function Field({ label, error, htmlFor, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx(Label, {
				htmlFor,
				className: "text-sm font-medium text-navy-deep",
				children: label
			}),
			children,
			error && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-destructive",
				children: error
			})
		]
	});
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose py-14 md:py-20",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [{ label: "Contact" }] }),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl",
						children: "Contact our legal team"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80",
						children: "Reach out through the channel that suits you best. We respond promptly and discreetly to all enquiries."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-16 md:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-8 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ jsx(ContactCard, {
						tone: "navy",
						icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5 text-gold" }),
						label: "WhatsApp",
						title: "Message us directly",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-3",
							children: FIRM.whatsapp.map((w) => /* @__PURE__ */ jsxs("a", {
								href: waLink(w.intl),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between rounded-md border border-ivory/15 px-4 py-3 text-ivory/90 transition-colors hover:border-gold/60 hover:text-gold",
								children: [/* @__PURE__ */ jsx("span", { children: w.display }), /* @__PURE__ */ jsx("span", {
									className: "text-xs uppercase tracking-[0.18em] text-gold",
									children: "Open"
								})]
							}, w.intl))
						})
					}),
					/* @__PURE__ */ jsxs(ContactCard, {
						icon: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-gold" }),
						label: "Telephone",
						title: "Call our chambers",
						children: [/* @__PURE__ */ jsx("a", {
							href: `tel:${FIRM.phone.tel}`,
							className: "font-serif text-2xl text-navy-deep hover:text-navy",
							children: FIRM.phone.display
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-charcoal/70",
							children: "Monday to Friday during business hours."
						})]
					}),
					/* @__PURE__ */ jsxs(ContactCard, {
						icon: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-gold" }),
						label: "Email",
						title: "Write to us",
						children: [/* @__PURE__ */ jsx("a", {
							href: mailto(),
							className: "break-all font-serif text-lg text-navy-deep hover:text-navy",
							children: FIRM.emails.primary
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: "Alternative contacts"
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-3 space-y-1.5 text-sm",
								children: FIRM.emails.alternates.map((e) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: mailto(e),
									className: "break-all text-charcoal/80 hover:text-navy",
									children: e
								}) }, e))
							})]
						})]
					}),
					/* @__PURE__ */ jsx(ContactCard, {
						icon: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-gold" }),
						label: "Office",
						title: "Visit our chambers",
						children: /* @__PURE__ */ jsxs("p", {
							className: "font-serif text-lg text-navy-deep",
							children: [
								FIRM.address.line1,
								/* @__PURE__ */ jsx("br", {}),
								FIRM.address.line2
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ivory py-16 md:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.22em] text-gold",
							children: "Send an enquiry"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-3xl text-navy-deep sm:text-4xl",
							children: "Tell us about your matter"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base leading-relaxed text-charcoal/80",
							children: "Complete the form and we will respond through your preferred channel. For urgent matters, WhatsApp or call us directly."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold-soft/40 p-4 text-sm text-navy-deep",
							children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "mt-0.5 h-5 w-5 shrink-0 text-navy-deep" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-semibold",
									children: "Urgent legal assistance?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-charcoal/80",
									children: "For urgent matters such as bail applications, please call or WhatsApp us directly so we can attend to you without delay."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ jsx("a", {
										href: `tel:${FIRM.phone.tel}`,
										children: /* @__PURE__ */ jsx(Button, {
											variant: "navy",
											size: "sm",
											children: "Call now"
										})
									}), /* @__PURE__ */ jsx("a", {
										href: waLink(),
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ jsx(Button, {
											variant: "whatsapp",
											size: "sm",
											children: "WhatsApp now"
										})
									})]
								})
							] })]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ jsx(ContactForm, {})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-16 md:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-prose",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold",
						children: "Find us"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl text-navy-deep",
						children: "Office location"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-5" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 overflow-hidden rounded-2xl border border-border shadow-soft",
						children: /* @__PURE__ */ jsx("iframe", {
							title: "Map to Machaya & Associates Legal Practitioners",
							src: `https://www.google.com/maps?q=${encodeURIComponent("No. 7 Eastcourt Road, Belvedere, Harare, Zimbabwe")}&output=embed`,
							width: "100%",
							height: "420",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							style: { border: 0 }
						})
					})
				]
			})
		})
	] });
}
function ContactCard({ icon, label, title, tone, children }) {
	const navy = tone === "navy";
	return /* @__PURE__ */ jsxs("article", {
		className: `rounded-2xl border p-8 shadow-soft ${navy ? "border-navy bg-navy-deep text-ivory" : "border-border bg-card"}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold",
				children: [icon, label]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: `mt-3 font-serif text-xl ${navy ? "text-ivory" : "text-navy-deep"}`,
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-5",
				children
			})
		]
	});
}
//#endregion
export { ContactPage as component };
