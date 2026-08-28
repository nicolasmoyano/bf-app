import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CircleCheck,
  FileSearch,
  Fingerprint,
  Globe2,
  MapPin,
  MessageSquareQuote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const bookingUrl = "https://calendly.com/brandformstudio/30min";

const deliverables = [
  {
    icon: Fingerprint,
    title: "Business truth set",
    description:
      "A verified source of truth for your name, services, credentials, location, opening hours and booking details.",
  },
  {
    icon: MessageSquareQuote,
    title: "Search and AI benchmark",
    description:
      "A repeatable snapshot of how your business is represented across relevant search and AI discovery journeys.",
  },
  {
    icon: FileSearch,
    title: "Website and structured data audit",
    description:
      "A review of your content, crawlability, local signals, schema and the path from discovery to booking.",
  },
  {
    icon: MapPin,
    title: "Local presence review",
    description:
      "A consistency check across your website, business profiles, booking platforms and trusted directories.",
  },
  {
    icon: BarChart3,
    title: "Opportunity map",
    description:
      "Prioritized location, service and question-led opportunities based on relevance—not bulk content generation.",
  },
  {
    icon: SearchCheck,
    title: "90-day action plan",
    description:
      "Clear next steps ranked by impact, effort and confidence, ready for you or your existing team to implement.",
  },
];

const steps = [
  {
    number: "01",
    title: "Establish the facts",
    description:
      "We confirm what is true about the business, the audience you want to reach and the actions that matter.",
  },
  {
    number: "02",
    title: "Collect the evidence",
    description:
      "We inspect the live website, local profiles, competitors and a fixed set of discovery prompts.",
  },
  {
    number: "03",
    title: "Turn findings into action",
    description:
      "You receive a concise report, prioritized roadmap and a 45-minute walkthrough of the recommendations.",
  },
];

const audiences = [
  "Independent healthcare practitioners",
  "Professional service firms",
  "Specialist consultants",
  "Owner-led local businesses",
];

const faqs = [
  {
    question: "Is this traditional SEO?",
    answer:
      "It includes core local SEO, but the scope is broader. The audit also examines how consistently your business can be understood, verified and cited by AI-assisted discovery tools.",
  },
  {
    question: "Can you guarantee that ChatGPT or Google recommends me?",
    answer:
      "No one can guarantee a permanent ranking or recommendation. Results vary by platform, prompt, location and personalization. The work improves the quality, consistency and accessibility of the signals those systems rely on.",
  },
  {
    question: "Do you implement the recommendations?",
    answer:
      "The founding audit is strategy-first. Technical, content and profile implementation can be scoped separately after the audit, so you only pay for the work you actually need.",
  },
  {
    question: "What do you need from me?",
    answer:
      "A short kickoff call, your key business facts and access to relevant analytics or profiles where available. The rest of the work is asynchronous.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brandform Studio",
  url: "https://www.brandform.studio",
  description:
    "AI visibility and local discovery audits for independent professionals and owner-led service businesses.",
  areaServed: {
    "@type": "Country",
    name: "Sweden",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Visibility Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI Visibility Audit",
        price: "6900",
        priceCurrency: "SEK",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "AI Visibility Audit",
          description:
            "Evidence-based audit covering entity consistency, local discovery, website signals and a 90-day action plan.",
        },
      },
    ],
  },
};

function BookingLink({
  children,
  secondary = false,
}: {
  children: React.ReactNode;
  secondary?: boolean;
}) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative border-b border-white/10 pt-36 sm:pt-44">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-10 h-[540px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI visibility for local experts
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]">
              Be the local expert AI can find, understand and recommend.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Brandform helps independent professionals build a clear, credible
              digital presence across search, maps and AI-assisted discovery—so
              more of the right people can find their way to your business.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <BookingLink>Book a free fit call</BookingLink>
              <a
                href="#audit"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                See what&apos;s included
              </a>
            </div>
            <p className="mt-5 text-xs text-slate-400">
              Founding offer · Fixed scope · No long-term contract
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-slate-950/60 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-px overflow-hidden rounded-[1.15rem] bg-white/10 md:grid-cols-[1.15fr_.85fr]">
              <div className="bg-[#0a1513] p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                    Visibility brief
                  </span>
                  <span className="flex items-center gap-2 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Evidence-led
                  </span>
                </div>
                <div className="mt-10 space-y-5">
                  {[
                    [Globe2, "Can search engines access and interpret the site?"],
                    [Fingerprint, "Are the business facts consistent and verifiable?"],
                    [Bot, "How does the business appear in AI discovery journeys?"],
                    [ShieldCheck, "Does the path from recommendation to booking build trust?"],
                  ].map(([Icon, label]) => {
                    const ItemIcon = Icon as typeof Globe2;
                    return (
                      <div key={label as string} className="flex items-center gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                          <ItemIcon className="h-4 w-4 text-emerald-300" />
                        </div>
                        <span className="text-sm text-slate-300">{label as string}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-[#0d1917] p-7 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                  Outcome
                </span>
                <div className="mt-9 flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <p className="font-medium text-white">Know what to fix first</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      A practical roadmap connects every recommendation to real
                      evidence, likely impact and implementation effort.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    Designed for
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Local businesses where expertise, credibility and bookings matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="section-kicker">The problem</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Your business may be excellent. Online, it may still be ambiguous.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Conflicting facts", "Different names, services, addresses or credentials make a business harder to verify."],
                ["Generic positioning", "Broad copy gives search and recommendation systems little reason to connect you to a specific need."],
                ["Weak corroboration", "Important expertise appears only on your own website, without consistent supporting profiles."],
                ["Unclear conversion path", "Potential clients find you, but the route from trust to contact or booking creates friction."],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="section-kicker">The AI Visibility Audit</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A clear baseline. A prioritized way forward.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Not another vague score. The audit connects observable evidence to
              specific improvements across your website and wider local presence.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-emerald-300/25 hover:bg-emerald-300/[0.035]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.07]">
                  <Icon className="h-4.5 w-4.5 text-emerald-300" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker">How it works</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Senior thinking, without agency drag.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                A focused engagement built to work asynchronously and respect your time.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {steps.map((step) => (
                <article key={step.number} className="grid gap-4 py-8 sm:grid-cols-[64px_1fr]">
                  <span className="font-mono text-sm text-emerald-300">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-24">
            <div>
              <p className="section-kicker">Founding offer</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Start with clarity, not a retainer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                One fixed-scope engagement to understand your current visibility and decide what is worth improving.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {audiences.map((audience) => (
                  <span key={audience} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.055] p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />
              <div className="relative">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-medium text-emerald-200">AI Visibility Audit</p>
                    <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">6,900 SEK</p>
                    <p className="mt-1 text-sm text-slate-400">One-time founding price · Excluding VAT</p>
                  </div>
                  <span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-200">
                    Fixed scope
                  </span>
                </div>
                <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                  {[
                    "Kickoff and business truth set",
                    "Website and local presence audit",
                    "Search and AI benchmark",
                    "Competitor and opportunity review",
                    "Prioritized 90-day roadmap",
                    "Report and 45-minute walkthrough",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/10 pt-7">
                  <BookingLink>Book a free fit call</BookingLink>
                  <p className="mt-4 text-xs leading-5 text-slate-400">
                    Implementation is optional and quoted separately after the audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="section-kicker">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Useful answers before we talk.</h2>
          </div>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-medium text-white">
                  {faq.question}
                  <span className="text-2xl font-light text-emerald-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-12 text-sm leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.09),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Find out whether the audit is the right next step.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
            A short, no-pressure conversation about your business, current visibility and what you want discovery to lead to.
          </p>
          <div className="mt-8">
            <BookingLink>Book a free fit call</BookingLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Brandform Studio</p>
          <p>AI visibility and local discovery for independent experts.</p>
        </div>
      </footer>
    </main>
  );
}
