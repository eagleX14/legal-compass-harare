//#region src/lib/practice-areas.ts
var PRACTICE_AREAS = [
	{
		slug: "deceased-estates",
		title: "Administration of Deceased Estates",
		short: "Guidance through the winding up of estates, from registration with the Master of the High Court to final distribution.",
		icon: "scroll",
		description: "We assist families and executors with the full administration and winding up of deceased estates in Zimbabwe. Our team obtains the necessary authority from the Master of the High Court, prepares estate accounts, transfers assets to beneficiaries, and resolves estate disputes with sensitivity and rigor.",
		bullets: [
			"Registration of estates with the Master of the High Court",
			"Appointment of executors and letters of administration",
			"Preparation and lodging of estate accounts",
			"Transfer of immovable and movable property to beneficiaries",
			"Resolution of inheritance and beneficiary disputes"
		],
		faq: [{
			q: "How long does estate administration take in Zimbabwe?",
			a: "Timelines vary depending on the complexity of the estate, but most uncontested estates are wound up within several months once all documents are filed with the Master of the High Court."
		}, {
			q: "What documents do I need to register a deceased estate?",
			a: "You will typically need the death certificate, identification of the deceased and heirs, the will (if any), and a list of assets and liabilities. We will guide you through the full checklist."
		}]
	},
	{
		slug: "civil-criminal-law",
		title: "Civil and Criminal Law",
		short: "Representation before Zimbabwean courts and tribunals across contractual, labour, family, bail, trial, and appeal matters.",
		icon: "gavel",
		description: "We represent individuals and organisations before all levels of court and tribunal in Zimbabwe. Our practitioners handle contractual claims, labour-related matters, family disputes, bail applications, criminal trials, appeals, and reviews with discipline and clarity.",
		bullets: [
			"Contractual and delictual civil claims",
			"Bail applications and criminal trial defence",
			"Appeals and reviews in superior courts",
			"Tribunal and labour court representation",
			"Strategic case preparation and advocacy"
		],
		faq: [{
			q: "Do you handle urgent bail applications?",
			a: "Yes. Please contact us by phone or WhatsApp without delay so we can attend to urgent bail matters promptly."
		}]
	},
	{
		slug: "corporate-commercial-law",
		title: "Corporate and Commercial Law",
		short: "Advisory and transactional support for companies, from formation and due diligence to mergers, agreements, and liquidation.",
		icon: "briefcase",
		description: "We advise companies, institutions, and entrepreneurs on the legal architecture of doing business in Zimbabwe. From entity formation and due diligence to mergers, de-mergers, transactional opinions, and liquidation, our team delivers practical, commercially sound counsel.",
		bullets: [
			"Formation of companies, trusts, and private business corporations",
			"Mergers, acquisitions, de-mergers, and joint ventures",
			"Due diligence and transactional legal opinions",
			"Drafting of agreements of sale, leases, MOUs, and shareholder agreements",
			"Codes of conduct, employment contracts, and commercial policies",
			"Corporate liquidation and winding up"
		],
		faq: [{
			q: "Can you assist with registering a new company in Zimbabwe?",
			a: "Yes. We handle company formation end-to-end, including name reservation, incorporation documents, and post-registration compliance."
		}]
	},
	{
		slug: "conveyancing-notarial-practice",
		title: "Conveyancing and Notarial Practice",
		short: "Property transfers, bond registrations, subdivisions, ante-nuptial contracts, notarial deeds, and authentication.",
		icon: "stamp",
		description: "Our conveyancing and notarial team handles the full spectrum of property and notarial work in Zimbabwe — from transfers and mortgage bonds to ante-nuptial contracts and the notarisation of documents intended for local and international use.",
		bullets: [
			"Transfer of immovable property",
			"Registration and cancellation of mortgage bonds",
			"Subdivisions and consolidations",
			"Ante-nuptial contracts and notarial bonds",
			"Servitudes and notarial deeds",
			"Notarisation and authentication of documents"
		],
		faq: [{
			q: "Do you draft ante-nuptial contracts?",
			a: "Yes. Ante-nuptial contracts must be executed before a notary public prior to marriage, and our notarial practitioners are available to prepare and register them."
		}]
	},
	{
		slug: "family-law",
		title: "Family Law",
		short: "Compassionate representation across divorce, custody, maintenance, family trusts, and ante- and post-nuptial contracts.",
		icon: "users",
		description: "Family disputes require both legal precision and genuine care. We handle divorce, guardianship and adoption, maintenance, family trusts, family investments, and related litigation with discretion and a steady focus on your family's interests.",
		bullets: [
			"Divorce and matrimonial property division",
			"Guardianship, custody, and adoption",
			"Maintenance claims and enforcement",
			"Ante-nuptial and post-nuptial contracts",
			"Establishment of family trusts and investments"
		],
		faq: [{
			q: "Is the consultation confidential?",
			a: "Yes. All consultations are conducted in strict confidence in line with our professional obligations."
		}]
	},
	{
		slug: "debt-collection-recovery",
		title: "Debt Collection and Recovery",
		short: "Strategic, cost-effective recovery of outstanding debts through demand, negotiation, litigation, and enforcement.",
		icon: "scale",
		description: "We help creditors recover what is owed through a measured progression of demand letters, negotiation, legal proceedings, and the execution of judgments. Our approach balances commercial sensitivity with firm enforcement.",
		bullets: [
			"Letters of demand and pre-litigation negotiation",
			"Institution of legal proceedings for recovery",
			"Default and summary judgment applications",
			"Execution and enforcement of judgments",
			"Strategic, cost-aware recovery planning"
		],
		faq: [{
			q: "Do you act for businesses with multiple outstanding debtors?",
			a: "Yes. We work with businesses on portfolio-based debt recovery as well as individual claims."
		}]
	},
	{
		slug: "employment-law",
		title: "Employment Law",
		short: "Advisory and dispute representation for employers, employees, employment councils, and trade unions.",
		icon: "users-round",
		description: "We advise employers, employees, employment councils, and trade unions across the full lifecycle of the employment relationship — from contracts and policy design through to disputes, disciplinary hearings, and labour court representation.",
		bullets: [
			"Human resources and corporate employment advisory",
			"Employment contracts, policies, and codes of conduct",
			"Disciplinary hearings and grievance procedures",
			"Labour disputes and retrenchments",
			"Representation before employment councils and the Labour Court"
		],
		faq: []
	},
	{
		slug: "intellectual-property-law",
		title: "Intellectual Property Law",
		short: "Registration, management, protection, and enforcement of trademarks, copyrights, patents, and industrial designs.",
		icon: "shield-check",
		description: "We help businesses identify, register, protect, and enforce their intellectual property in Zimbabwe — including trademarks, copyrights, patents, industrial designs, and related IP assets.",
		bullets: [
			"Trademark searches, registration, and renewals",
			"Copyright and patent advice",
			"Industrial design registration",
			"IP portfolio management",
			"Enforcement and infringement litigation"
		],
		faq: []
	},
	{
		slug: "litigation-dispute-resolution",
		title: "Litigation and Dispute Resolution",
		short: "Representation for individuals, businesses, and institutions in negotiation, mediation, arbitration, and court.",
		icon: "landmark",
		description: "We represent individuals, businesses, and institutions across civil, commercial, labour, family, and criminal disputes. Our approach blends careful negotiation and mediation with confident arbitration and courtroom advocacy when needed.",
		bullets: [
			"Civil and commercial litigation",
			"Labour and family disputes",
			"Mediation and arbitration",
			"Negotiated settlements",
			"High Court and Supreme Court representation"
		],
		faq: []
	},
	{
		slug: "tax-law",
		title: "Tax Law",
		short: "Tax compliance, advisory, dispute resolution, and representation before relevant authorities in Zimbabwe.",
		icon: "calculator",
		description: "We provide advisory and dispute services across direct and indirect tax matters in Zimbabwe — supporting clients with lawful, efficient tax management and representation before the relevant authorities.",
		bullets: [
			"Tax compliance and advisory",
			"Tax dispute resolution",
			"Objections, appeals, and representation",
			"Transactional tax structuring"
		],
		faq: []
	}
];
var getPracticeArea = (slug) => PRACTICE_AREAS.find((p) => p.slug === slug);
//#endregion
export { getPracticeArea as n, PRACTICE_AREAS as t };
