import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { mailto, waLink } from "@/lib/firm";

interface CTAProps {
  title?: string;
  body?: string;
  variant?: "navy" | "ivory";
}

export function CTASection({
  title = "Speak to a Legal Practitioner",
  body = "Get confidential, practical advice from our team. We respond promptly through WhatsApp, email, and phone.",
  variant = "navy",
}: CTAProps) {
  const isNavy = variant === "navy";
  return (
    <section className={isNavy ? "bg-navy-deep" : "bg-ivory"}>
      <div className="container-prose grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
        <div>
          <h2
            className={`font-serif text-3xl sm:text-4xl ${
              isNavy ? "text-ivory" : "text-navy-deep"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed ${
              isNavy ? "text-ivory/75" : "text-charcoal/75"
            }`}
          >
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <a href={mailto()}>
            <Button variant={isNavy ? "outlineGold" : "navy"} size="lg" className={isNavy ? "text-gold hover:text-navy-deep" : ""}>
              <Mail className="h-4 w-4" />
              Email
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="ghost" size="lg" className={isNavy ? "text-ivory hover:bg-ivory/10 hover:text-ivory" : "text-navy-deep"}>
              Contact page
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
