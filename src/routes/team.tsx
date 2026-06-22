import { createFileRoute } from "@tanstack/react-router";
import { TeamGrid } from "@/components/site/TeamGrid";
import { CTASection } from "@/components/site/CTASection";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Our Team | ${FIRM.short} Legal Practitioners` },
      {
        name: "description",
        content:
          "Meet the legal practitioners at Machaya & Associates — Dambudzo Machaya, Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa.",
      },
      { property: "og:title", content: `Our Team | ${FIRM.short}` },
      {
        property: "og:description",
        content:
          "Meet our founder and associates serving clients across Zimbabwe from Harare.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-prose py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Team" }]} />
          <h1 className="mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl">
            Our team
          </h1>
          <span className="gold-divider mt-6" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80">
            A collaborative team of legal practitioners committed to clear advice,
            careful preparation, and dedicated representation for every client.
          </p>
        </div>
      </section>
      <TeamGrid heading={false} />
      <CTASection />
    </>
  );
}
