import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { TeamGrid } from "@/components/site/TeamGrid";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ShieldCheck, Eye, Lock, Handshake, Sparkles } from "lucide-react";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${FIRM.short} | Harare Law Firm` },
      {
        name: "description",
        content:
          "Learn about Machaya & Associates Legal Practitioners — a Harare-based law firm founded by Dambudzo Machaya, with associates Kenias Chimiti, Moffat Makuvatsine, and Bridget T. Chapepa.",
      },
      { property: "og:title", content: `About ${FIRM.short} | Harare Law Firm` },
      {
        property: "og:description",
        content:
          "A growing Harare law firm built on legal excellence, integrity, and client-centered service.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, k: "Integrity", v: "Ethical practice in every matter we accept." },
  { icon: Sparkles, k: "Professionalism", v: "Disciplined, prepared, and respectful." },
  { icon: Handshake, k: "Responsiveness", v: "Direct, prompt communication with clients." },
  { icon: Lock, k: "Confidentiality", v: "Discretion is foundational to our work." },
  { icon: Eye, k: "Client-centered", v: "Your objectives shape our strategy." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-prose py-14 md:py-20">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="mt-6 font-serif text-4xl text-navy-deep sm:text-5xl lg:text-6xl">
            About our firm
          </h1>
          <span className="gold-divider mt-6" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80">
            {FIRM.name} is a growing law firm based in Harare, Zimbabwe, dedicated to
            providing comprehensive legal and advisory services to a diverse clientele.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Our story</div>
            <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
              Founded on excellence and integrity
            </h2>
            <span className="gold-divider mt-6" />
          </div>
          <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-charcoal/80">
            <p>
              The firm was founded by Dambudzo Machaya, with associates Kenias Chimiti,
              Moffat Makuvatsine, and Bridget T. Chapepa. It is built on legal excellence,
              integrity, and client-centered service — and grounded in the belief that
              good lawyering means clear advice, careful preparation, and steady
              representation.
            </p>
            <p>
              Our team brings experience drawn from the Office of the Prosecutor, the
              Attorney General's Office, and respected Zimbabwean law firms. That blend of
              public and private practice gives us strong insight into how matters move
              through Zimbabwe's legal and regulatory systems — from advisory work to
              courtroom advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-prose grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Mission</div>
            <h2 className="mt-3 font-serif text-2xl text-navy-deep sm:text-3xl">
              Why we practice
            </h2>
            <span className="gold-divider mt-5" />
            <p className="mt-5 text-base leading-relaxed text-charcoal/80">
              To provide exceptional, innovative, and client-focused legal services that
              safeguard clients' interests while promoting justice, integrity, and the
              rule of law.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Vision</div>
            <h2 className="mt-3 font-serif text-2xl text-navy-deep sm:text-3xl">
              What we aspire to
            </h2>
            <span className="gold-divider mt-5" />
            <p className="mt-5 text-base leading-relaxed text-charcoal/80">
              To uphold the highest standards of professionalism, ethics, and service
              excellence while fostering enduring relationships founded upon trust,
              responsiveness, and a steadfast commitment to achieving clients' objectives.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Our values</div>
            <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
              The principles that guide us
            </h2>
            <span className="gold-divider mx-auto mt-6" />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v) => {
              const Icon = v.icon as React.ElementType;
              return (
                <div
                  key={v.k}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-deep text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-navy-deep">{v.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{v.v}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TeamGrid />
      <CTASection />
    </>
  );
}
