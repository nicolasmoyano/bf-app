import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardList,
  FileText,
  Globe2,
  PackageCheck,
  Sparkles,
  Store,
} from "lucide-react";

const bookingUrl = "https://calendly.com/brandformstudio/30min";

const offers = [
  {
    icon: Store,
    name: "Buyer Kit Sprint",
    eyebrow: "For product brands",
    description:
      "Give retail buyers one clear, credible way to understand your range, commercial facts and next step.",
    items: ["Retail buyer one-pager", "Product and range sheet", "Order-ready leave-behind"],
  },
  {
    icon: Globe2,
    name: "Client-Ready Presence",
    eyebrow: "For local experts",
    description:
      "Find and fix the online information gaps that make suitable clients hesitate, choose somebody else or fail to book.",
    items: ["Website and booking journey", "Profiles, proof and credibility", "Search and AI discovery diagnostic"],
  },
  {
    icon: FileText,
    name: "Document Rescue Sprint",
    eyebrow: "For critical PDFs",
    description:
      "Turn an important but difficult document into a clear, usable tool that helps someone make a decision.",
    items: ["Content and decision-flow redesign", "On-brand, accessible layout", "Reusable production template"],
  },
];

const process = [
  {
    number: "01",
    title: "Find the point of friction",
    description:
      "We start with the real moment someone needs to understand, trust or buy from you—not a generic design brief.",
  },
  {
    number: "02",
    title: "Shape the sales tool",
    description:
      "We clarify the story, facts, hierarchy and next action, then design the material around that decision.",
  },
  {
    number: "03",
    title: "Leave you ready to use it",
    description:
      "You receive finished assets and, where useful, a practical template your team can keep current without starting over.",
  },
];

const faqs = [
  {
    question: "Is this branding, design, or marketing?",
    answer:
      "It can touch all three, but the scope stays practical: we improve a specific point where someone needs to understand your offer and take action. The output is a sales-ready tool, not an open-ended brand project.",
  },
  {
    question: "What counts as a buyer kit?",
    answer:
      "Usually a concise retail buyer one-pager, a product or range sheet and an order-ready leave-behind. The exact kit depends on the sales meeting, product range and the decision the buyer needs to make.",
  },
  {
    question: "Can you work from our existing PDF or materials?",
    answer:
      "Yes. Existing PDFs, presentations, spreadsheets, product photography and barcode data are useful starting points. We reorganize the information before styling it, so the result is easier to use—not just nicer to look at.",
  },
  {
    question: "Where does AI visibility fit?",
    answer:
      "It is one diagnostic within Client-Ready Presence. We use it to understand how search and AI-assisted discovery interpret a local business, but we sell the clearer outcome: making it easier for the right client to choose you.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brandform Studio",
  url: "https://www.brandform.studio",
  description:
    "Sales-ready design for small businesses: buyer kits, client-ready online presence, and critical document redesign.",
  areaServed: { "@type": "Country", name: "Sweden" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sales-ready design services",
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
      },
    })),
  },
};

function BookingLink({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
      className={
        secondary
          ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
          : "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#07110f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="relative border-b border-white/10 pt-36 sm:pt-44">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-10 h-[540px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-200">
              <Sparkles className="h-3.5 w-3.5" />
              Sales-ready design for small businesses
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]">
              Make your business easier to buy from.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Brandform turns unclear websites, PDFs and sales materials into tools that help buyers understand your offer and take the next step.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <BookingLink>Book a free fit call</BookingLink>
              <a href="#offers" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]">
                See the offers
              </a>
            </div>
            <p className="mt-5 text-xs text-slate-400">Fixed scope · Senior thinking · Built to be used</p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-slate-950/60 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-px overflow-hidden rounded-[1.15rem] bg-white/10 md:grid-cols-[1.1fr_.9fr]">
              <div className="bg-[#0a1513] p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">The sales moment</span>
                  <span className="flex items-center gap-2 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Decision-ready</span>
                </div>
                <div className="mt-10 space-y-5">
                  {[
                    [PackageCheck, "A buyer needs to understand the range quickly."],
                    [BadgeCheck, "A prospective client needs proof they can trust."],
                    [ClipboardList, "A team needs a critical PDF to guide an action."],
                  ].map(([Icon, label]) => {
                    const ItemIcon = Icon as typeof PackageCheck;
                    return <div key={label as string} className="flex items-center gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"><ItemIcon className="h-4 w-4 text-emerald-300" /></div><span className="text-sm text-slate-300">{label as string}</span></div>;
                  })}
                </div>
              </div>
              <div className="bg-[#0d1917] p-7 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">What changes</span>
                <div className="mt-9 space-y-6">
                  <div><p className="font-medium text-white">The right facts, in the right order.</p><p className="mt-2 text-sm leading-6 text-slate-400">We turn scattered information into a focused story and a clear next action.</p></div>
                  <div className="border-t border-white/10 pt-6"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">Not just polish</p><p className="mt-3 text-sm leading-6 text-slate-300">We redesign the decision flow, not only the layout.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><p className="section-kicker">The problem</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Good businesses lose momentum when their materials make people work too hard.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["The range is unclear", "A buyer cannot quickly see products, commercial facts and why the range belongs in their store."],
                ["The document is doing too much", "A PDF tries to be a catalogue, price list, pitch and order form at the same time."],
                ["Trust is scattered", "Credentials, proof, service detail and booking information are spread across different places."],
                ["Nothing is reusable", "A new product or service means rebuilding the material from the start."],
              ].map(([title, description]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><h3 className="font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-2xl"><p className="section-kicker">Three focused offers</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Choose the sales moment that needs fixing first.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Each engagement has a clear job, a defined output and an optional next phase—not a vague monthly retainer.</p></div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {offers.map(({ icon: Icon, name, eyebrow, description, items }) => <article key={name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-emerald-300/25 hover:bg-emerald-300/[0.035]"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.07]"><Icon className="h-4.5 w-4.5 text-emerald-300" /></div><p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-emerald-200">{eyebrow}</p><h3 className="mt-2 text-xl font-medium text-white">{name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{items.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{item}</li>)}</ul>{name === "Buyer Kit Sprint" && <Link href="/buyer-kit" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100">View a concept buyer kit <ArrowRight className="h-4 w-4" /></Link>}</article>)}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="section-kicker">How it works</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Senior thinking, without agency drag.</h2><p className="mt-5 text-lg leading-8 text-slate-400">A focused engagement designed to work asynchronously and leave you with something useful.</p></div><div className="divide-y divide-white/10 border-y border-white/10">{process.map((step) => <article key={step.number} className="grid gap-4 py-8 sm:grid-cols-[64px_1fr]"><span className="font-mono text-sm text-emerald-300">{step.number}</span><div><h3 className="text-xl font-medium text-white">{step.title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{step.description}</p></div></article>)}</div></div></div></section>

      <section id="pricing" className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-24"><div><p className="section-kicker">Founding offer</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with the material closest to the sale.</h2><p className="mt-5 text-lg leading-8 text-slate-400">For the first Buyer Kit Sprint, we keep the scope deliberately tight: a buyer one-pager and product range sheet built from your existing facts and assets.</p></div><div className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.055] p-7 sm:p-10"><div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" /><div className="relative"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start"><div><p className="text-sm font-medium text-emerald-200">Buyer Kit Pilot</p><p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">6,900 SEK</p><p className="mt-1 text-sm text-slate-400">One-time founding price · Excluding VAT</p></div><span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-200">Fixed scope</span></div><ul className="mt-9 grid gap-4 sm:grid-cols-2">{["One kickoff and source-material review", "Retail buyer one-pager", "Product and range sheet", "One presentation-ready leave-behind", "Commercial copy and information hierarchy", "One revision round and final PDF files"].map((item) => <li key={item} className="flex gap-3 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{item}</li>)}</ul><div className="mt-10 border-t border-white/10 pt-7"><BookingLink>Book a free fit call</BookingLink><p className="mt-4 text-xs leading-5 text-slate-400">Photography, printing and complex order systems are quoted separately if needed.</p></div></div></div></div></div></section>

      <section id="faq" className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="text-center"><p className="section-kicker">FAQ</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Useful answers before we talk.</h2></div><div className="mt-14 divide-y divide-white/10 border-y border-white/10">{faqs.map((faq) => <details key={faq.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-medium text-white">{faq.question}<span className="text-2xl font-light text-emerald-300 transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-12 text-sm leading-7 text-slate-400">{faq.answer}</p></details>)}</div></div></section>

      <section className="relative py-24 sm:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.09),transparent_55%)]" /><div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"><h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Let&apos;s make the next sales conversation easier.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">A short, no-pressure conversation about the material, decision or conversion point that needs attention first.</p><div className="mt-8"><BookingLink>Book a free fit call</BookingLink></div></div></section>

      <footer className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© {new Date().getFullYear()} Brandform Studio</p><p>Sales-ready design for small businesses.</p></div></footer>
    </main>
  );
}
