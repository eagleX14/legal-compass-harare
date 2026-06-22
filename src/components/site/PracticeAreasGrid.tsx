import { Link } from "@tanstack/react-router";
import {
  Scroll,
  Gavel,
  Briefcase,
  Stamp,
  Users,
  Scale,
  UsersRound,
  ShieldCheck,
  Landmark,
  Calculator,
  ArrowUpRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/firm";

const ICONS: Record<string, LucideIcon> = {
  scroll: Scroll,
  gavel: Gavel,
  briefcase: Briefcase,
  stamp: Stamp,
  users: Users,
  scale: Scale,
  "users-round": UsersRound,
  "shield-check": ShieldCheck,
  landmark: Landmark,
  calculator: Calculator,
};

export function PracticeAreasGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-background py-20 md:py-24" id="practice-areas">
      <div className="container-prose">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">What we do</div>
            <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
              Comprehensive legal services
            </h2>
            <span className="gold-divider mx-auto mt-6" />
            <p className="mt-6 text-base text-charcoal/75">
              Practical, strategic counsel across the matters that affect individuals,
              families, companies, and institutions in Zimbabwe.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((p) => {
            const Icon = ICONS[p.icon] ?? Scale;
            return (
              <article
                key={p.slug}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-ivory text-navy-deep ring-1 ring-gold/30 transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-navy-deep">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{p.short}</p>
                <div className="mt-6 flex items-center gap-2 pt-1">
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-navy-deep hover:text-navy"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <span className="mx-2 h-3 w-px bg-border" />
                  <a
                    href={waLink(
                      undefined,
                      `Hello Machaya & Associates, I would like to request assistance with ${p.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-whatsapp"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Request assistance
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {heading && (
          <div className="mt-12 flex justify-center">
            <Link to="/practice-areas">
              <Button variant="outlineGold" size="lg">
                Explore all practice areas
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
