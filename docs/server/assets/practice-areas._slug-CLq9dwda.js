import { t as FIRM } from "./firm-fg6IM1S3.js";
import { n as getPracticeArea } from "./practice-areas-21V3x4Rw.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/practice-areas.$slug.tsx
var $$splitComponentImporter = () => import("./practice-areas._slug-B-AUlaHS.js");
var $$splitNotFoundComponentImporter = () => import("./practice-areas._slug-DmkWjtYK.js");
var Route = createFileRoute("/practice-areas/$slug")({
	loader: ({ params }) => {
		const area = getPracticeArea(params.slug);
		if (!area) throw notFound();
		return area;
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [] };
		const title = `${loaderData.title} | ${FIRM.short} — Harare, Zimbabwe`;
		const desc = loaderData.short;
		const url = `/practice-areas/${params.slug}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Practice Areas",
							item: "/practice-areas"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: loaderData.title,
							item: url
						}
					]
				})
			}, ...loaderData.faq.length ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: loaderData.faq.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.a
						}
					}))
				})
			}] : []]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
