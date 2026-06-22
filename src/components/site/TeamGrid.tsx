import { TEAM } from "@/lib/firm";

export function TeamGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container-prose">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Our team</div>
            <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
              Founder & associates
            </h2>
            <span className="gold-divider mx-auto mt-6" />
            <p className="mt-6 text-base text-charcoal/75">
              Our team brings experience drawn from the Office of the Prosecutor, the
              Attorney General's Office, and respected Zimbabwean law firms.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 text-center shadow-soft transition-colors hover:border-gold/60"
            >
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy to-navy-deep font-serif text-2xl text-gold ring-4 ring-gold/15">
                {m.initials}
              </div>
              <h3 className="mt-5 font-serif text-lg text-navy-deep">{m.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-gold">
                {m.role}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
