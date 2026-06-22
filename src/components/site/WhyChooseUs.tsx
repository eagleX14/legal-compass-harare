import { HeartHandshake, Award, Compass, Phone, Target } from "lucide-react";

const POINTS = [
  {
    icon: HeartHandshake,
    title: "Client-centered approach",
    body: "We listen carefully, explain clearly, and build a strategy around your actual objectives.",
  },
  {
    icon: Award,
    title: "Professional excellence",
    body: "Disciplined preparation, ethical practice, and meticulous attention to detail on every matter.",
  },
  {
    icon: Compass,
    title: "Strategic & practical",
    body: "Solutions that work in the real world — commercially sound, legally rigorous, and actionable.",
  },
  {
    icon: Phone,
    title: "Responsive & accessible",
    body: "Direct access to your legal practitioner through phone, WhatsApp, email, and office visits.",
  },
  {
    icon: Target,
    title: "Results-driven",
    body: "We focus on outcomes that protect and advance our clients' interests at every stage.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-20 md:py-24">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Why clients choose us</div>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
            A firm built on trust and results
          </h2>
          <span className="gold-divider mx-auto mt-6" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-deep text-gold">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-navy-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
