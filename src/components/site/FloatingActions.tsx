import { MessageCircle, Phone, Mail } from "lucide-react";
import { FIRM, mailto, waLink } from "@/lib/firm";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Machaya & Associates"
      className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <a
        href={`tel:${FIRM.phone.tel}`}
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-navy-deep"
        aria-label="Call the firm"
      >
        <Phone className="h-5 w-5 text-navy" />
        Call
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-xs font-medium text-navy-deep"
        aria-label="WhatsApp the firm"
      >
        <MessageCircle className="h-5 w-5 text-whatsapp" />
        WhatsApp
      </a>
      <a
        href={mailto()}
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-navy-deep"
        aria-label="Email the firm"
      >
        <Mail className="h-5 w-5 text-gold" />
        Email
      </a>
    </div>
  );
}
