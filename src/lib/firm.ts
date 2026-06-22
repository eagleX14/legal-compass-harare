export const FIRM = {
  name: "Machaya & Associates Legal Practitioners",
  short: "Machaya & Associates",
  subtitle: "Legal Practitioners",
  domain: "machayaaandassociates.co.zw",
  url: "https://machayaaandassociates.co.zw",
  address: {
    line1: "No. 7 Eastcourt Road",
    line2: "Belvedere, Harare, Zimbabwe",
    full: "No. 7 Eastcourt Road, Belvedere, Harare, Zimbabwe",
  },
  phone: {
    display: "(0242) 710173",
    tel: "+263242710173",
  },
  whatsapp: [
    { display: "0772 990 567", intl: "263772990567" },
    { display: "0717 515 465", intl: "263717515465" },
  ],
  emails: {
    primary: "machayalawyers@machayaassociates.co.zw",
    alternates: [
      "deemachaya@gmail.com",
      "kchimiti@gmail.com",
      "mmakuva@gmail.com",
      "bridgetchapepa@gmail.com",
    ],
  },
};

export const waLink = (
  number: string = FIRM.whatsapp[0].intl,
  message = "Hello Machaya & Associates, I would like to request a legal consultation."
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const mailto = (
  to: string = FIRM.emails.primary,
  subject = "Legal Consultation Request",
  body?: string
) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const TEAM = [
  {
    name: "Dambudzo Machaya",
    role: "Founder & Legal Practitioner",
    initials: "DM",
    bio: "Founding partner of Machaya & Associates Legal Practitioners, with experience drawn from both public and private legal practice in Zimbabwe.",
  },
  {
    name: "Kenias Chimiti",
    role: "Associate, Legal Practitioner",
    initials: "KC",
    bio: "Associate at the firm, advising clients across civil, commercial, and dispute resolution matters.",
  },
  {
    name: "Moffat Makuvatsine",
    role: "Associate, Legal Practitioner",
    initials: "MM",
    bio: "Associate at the firm, contributing to the firm's litigation, advisory, and transactional work.",
  },
  {
    name: "Bridget T. Chapepa",
    role: "Associate, Legal Practitioner",
    initials: "BC",
    bio: "Associate at the firm, working across the firm's broad civil, family, and commercial practice areas.",
  },
];
