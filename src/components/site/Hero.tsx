import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight, MapPin } from "lucide-react";
import { FIRM, mailto, waLink } from "@/lib/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--navy) 1px, transparent 1px), radial-gradient(circle at 80% 60%, var(--gold) 1px, transparent 1px)",
          backgroundSize: "44px 44px, 60px 60px",
        }}
      />
      <div className="container-prose relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-navy-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Harare · Zimbabwe
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-navy-deep sm:text-5xl lg:text-6xl">
            Trusted Legal Counsel in <span className="italic text-navy">Harare, Zimbabwe</span>
          </h1>
          <span className="gold-divider mt-6" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            {FIRM.name} provides client-focused legal, advisory, litigation, commercial,
            family, estate, employment, conveyancing, and dispute resolution services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="xl">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href={mailto()}>
              <Button variant="navy" size="xl">
                <Mail className="h-5 w-5" />
                Email Our Legal Team
              </Button>
            </a>
            <Link to="/practice-areas">
              <Button variant="ghost" size="xl" className="text-navy-deep">
                View Practice Areas
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            {["Harare-based", "Client-centered", "Court & advisory experience"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-charcoal/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-navy-deep p-8 text-ivory shadow-elegant">
            <div className="absolute inset-x-0 -top-px mx-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Visit our chambers</div>
            <div className="mt-4 font-serif text-2xl leading-snug">
              No. 7 Eastcourt Road
              <br />
              Belvedere, Harare
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-ivory/80">
              <MapPin className="h-4 w-4 text-gold" />
              Zimbabwe
            </div>
            <div className="my-8 h-px w-full bg-ivory/10" />
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Confidential consultation</div>
            <p className="mt-3 text-sm leading-relaxed text-ivory/75">
              Speak directly to a legal practitioner. Initial enquiries are handled with
              discretion and care.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex"
            >
              <Button variant="gold" size="lg">
                <MessageCircle className="h-4 w-4" />
                Start on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
