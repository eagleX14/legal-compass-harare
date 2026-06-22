import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreasGrid } from "@/components/site/PracticeAreasGrid";
import { CTASection } from "@/components/site/CTASection";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title: `Practice Areas | ${FIRM.short} Legal Practitioners` },
      {
        name: "description",
        content:
          "Explore the full range of legal services offered by Machaya & Associates in Harare, Zimbabwe — including litigation, conveyancing, estate administration, family, commercial, employment, IP, and tax law.",
      },
      { property: "og:title", content: `Practice Areas | ${FIRM.short}` },
      {
        property: "og:description",
        content:
          "Litigation, estates, corporate, conveyancing, family, employment, IP, and tax law services in Harare, Zimbabwe.",
      },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasIndex,
});

function PracticeAreasIndex() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-prose py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Practice Areas" }]} />
          <h1 className="mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl">
            Practice areas
          </h1>
          <span className="gold-divider mt-6" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80">
            Practical, strategic counsel across ten core areas of law — for individuals,
            families, companies, and institutions across Zimbabwe.
          </p>
        </div>
      </section>
      <PracticeAreasGrid heading={false} />
      <CTASection />
    </>
  );
}
