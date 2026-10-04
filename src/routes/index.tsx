import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, PaintBrush, Code, ChartLineUp, Wrench,
  CaretDown, CheckCircle, Quotes, Star, Lightbulb, Palette, Rocket,
  ShieldCheck, MapPin, Phone,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SmsOptInSection } from "@/components/SmsOptInSection";
import heroJellyfish from "@/assets/hero-jellyfish.webp";
import heroJellyfishSm from "@/assets/hero-jellyfish-sm.webp";
import how1 from "@/assets/how-1.jpg";
import how2 from "@/assets/how-2.jpg";
import how3 from "@/assets/how-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crawio — Premium Web Design for Ambitious Brands" },
      { name: "description", content: "We design and build luxury websites that convert. Trusted by founders in the US, UK and Canada." },
      { property: "og:title", content: "Crawio — Premium Web Design Agency" },
      { property: "og:description", content: "Websites that drive real results." },
    ],
  }),
  component: Home,
});



const testimonials = [
  { name: "Aarav Mehta", role: "Founder, Lumen Bistro", quote: "Crawio rebuilt our site in 3 weeks. Reservations went up 40% in the first month. Worth every dollar.", result: "+40% bookings" },
  { name: "Sarah Whitfield", role: "CEO, North Atelier", quote: "The design is breathtaking, but what stunned us was the conversion lift. Revenue literally doubled.", result: "Revenue doubled" },
  { name: "Daniel Park", role: "Director, Loxine Estates", quote: "We finally look like the premium agency we are. Client inquiries tripled within two months.", result: "3x more inquiries" },
  { name: "Priya Shankar", role: "Co-founder, Nova Care", quote: "Patients tell us the booking flow is effortless. Bookings climbed 60% almost overnight.", result: "+60% bookings" },
  { name: "James O'Brien", role: "Founder, Forquary", quote: "Crawio understood our brand without a 40-page brief. The site sold itself to our buyers.", result: "210% sales lift" },
  { name: "Mira Hassan", role: "Owner, Cocal Café", quote: "Beautiful, fast, and easy to update. Five-star agency — no notes.", result: "5× foot traffic" },
];

const services = [
  { icon: PaintBrush, title: "Premium Web Design", body: "Editorial typography, considered motion, and brand-first art direction that earns trust on first scroll." },
  { icon: Code, title: "Custom Development", body: "Hand-built on modern frameworks. Fast, secure, accessible — never templated, never compromised." },

  { icon: Wrench, title: "Ongoing Maintenance", body: "A small monthly retainer keeps your site evolving — updates, edits, analytics and care." },
];

const steps = [
  { icon: Lightbulb, image: how1, title: "Share Your Vision", body: "A focused 20-minute call. We learn your business, audience and goals, and define what success looks like." },
  { icon: Palette, image: how2, title: "We Design & Build", body: "Our team crafts a bespoke design, builds it on modern tech, and delivers a launch-ready site in weeks." },
  { icon: Rocket, image: how3, title: "You Get Results", body: "We ship, measure, and refine. Your website becomes your hardest-working salesperson, 24/7." },
];

const stats = [
  { icon: Rocket, title: "14-day average launch", body: "From assets received to live site." },
  { icon: Code, title: "100% custom — no templates", body: "Designed and built for your business." },
  { icon: MapPin, title: "US home services focus", body: "Roofing, HVAC, plumbing, and more." },
  { icon: Phone, title: "1-on-1 direct line", body: "You talk to the person building your site." },
];

const portfolio = [
  { niche: "Cleaning", url: "https://sumicleaningtemplate.vercel.app", body: "Instant-price calculator that turns visitors into booked cleans." },
  { niche: "Landscaping", url: "https://landscaping-template-v2.vercel.app", body: "AI yard planner plus from-pricing on every service." },
  { niche: "Pest control", url: "https://pest-control-template-v2.vercel.app", body: "8-service wildlife removal site with upfront pricing." },
  { niche: "Roofing", url: "https://sumiroofingtemplate.vercel.app", body: "Full 3-tier pricing tables — rare transparency for roofers." },
  { niche: "Plumbing", url: "https://sumiplumbingtemplate2.vercel.app", body: "Exact upfront prices and a cost estimator on every page." },
  { niche: "Tree service", url: "https://sumitreeservicetemplate.vercel.app", body: "Cinematic design with a sticky mobile call bar." },
];

const tiers = [
  {
    name: "Launch",
    price: "Free",
    per: "with any care plan",
    blurb: "A custom website, built for you — free when you start a care plan.",
    features: ["Custom design & build", "Mobile-first, loads fast", "Quote + contact forms", "Live in ~14 days"],
    cta: "Start with a care plan",
    featured: false,
  },
  {
    name: "Growth",
    price: "$297",
    per: "/month",
    blurb: "Everything that turns your website into booked jobs.",
    features: ["Hosting + maintenance", "Missed-call text-back", "Instant lead reply", "Google review automation"],
    cta: "Start Growing",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    per: "tailored",
    blurb: "For owners ready to automate the front office.",
    features: ["Everything in Growth", "AI receptionist", "Priority support", "Quarterly tune-ups"],
    cta: "Talk to us",
    featured: false,
  },
];

const faqs = [
  { q: "How does the free website work?", a: "You don't pay for the build — it's included when you start any care plan. We design and launch your custom site, and your plan covers hosting, maintenance, and everything that keeps it working hard for you." },
  { q: "How fast is launch?", a: "Our average launch is 14 days from the day we receive your assets — logo, photos, and business details. No assets, no start date: that's the one thing that can slow us down." },
  { q: "What do you need from me?", a: "Just five things: your logo, about 10 job photos, your Google review link, your service list, and the areas you serve. Send those on day one and we handle literally everything else." },
  { q: "Do I own the site?", a: "Yes — the design, copy, and content are yours. While you're on a care plan we host and maintain it; if you ever leave, you keep your site and we hand over everything." },
  { q: "What happens after launch?", a: "Your care plan kicks in: hosting, maintenance, missed-call text-back, instant lead replies, and Google review automation — the systems that turn your website into booked jobs." },
  { q: "Can you handle my niche?", a: "If you're a US home-service business — roofing, HVAC, plumbing, electrical, landscaping, pest control, tree service, cleaning, gutters — yes. That's all we build for, so every template already speaks your customer's language." },
];

function Home() {
  return (
    <Layout>
      <Hero />
      <StatsBand />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <Mission />
      <SmsOptInSection />
      <FreeCall />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-8 lg:pb-12 overflow-hidden">
      {/* Ambient crimson field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-5%] h-[720px] w-[720px] bg-[#E63329] opacity-[0.22] blur-[170px] rounded-full" />
        <div className="absolute right-[10%] top-[30%] h-[420px] w-[420px] bg-[#8f1f16] opacity-[0.28] blur-[150px] rounded-full" />
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[520px] bg-[#E63329] opacity-[0.08] blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-10 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] tracking-[0.15em] uppercase text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E63329] animate-pulse" />
            Premium Web Design Studio
          </div>
          <h1 className="mt-5 text-[2.6rem] sm:text-6xl lg:text-[76px] leading-[1.0] text-balance">
            We build websites that earn<br className="hidden sm:block" />
            trust &amp; drive <span className="text-[#E63329]">results</span>.
          </h1>
          <div className="mt-7">
            <Link to="/contact" className="neu-btn neu-btn-primary min-h-12 px-6">
              Start a project <ArrowRight size={16} weight="light" />
            </Link>
          </div>
        </motion.div>

        {/* Right — jellyfish */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative min-h-[300px] sm:min-h-[390px] lg:min-h-[520px] flex items-center justify-center"
        >
          <div className="relative">
            <img
              src={heroJellyfish}
              srcSet={`${heroJellyfishSm} 520w, ${heroJellyfish} 900w`}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 55vw, 45vw"
              alt="Glowing bioluminescent jellyfish drifting through deep water"
              width={900}
              height={1125}
              decoding="async"
              className="relative w-[70%] sm:w-[58%] lg:w-[86%] h-auto drop-shadow-[0_30px_120px_rgba(230,51,41,0.45)]"
            />
            {/* Subtle crimson duotone to tie the artwork into the theme */}
            <div aria-hidden="true" className="absolute inset-0 bg-[#E63329]/10 mix-blend-overlay rounded-full blur-2xl pointer-events-none" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-[6%] w-[150px] sm:w-[190px] glass p-3.5 sm:p-4"
          >
            <div className="h-8 w-8 rounded-full bg-[#E63329]/15 grid place-items-center">
              <CheckCircle size={16} weight="light" className="text-[#E63329]" />
            </div>
            <p className="mt-3 text-[13px] sm:text-sm tracking-tight">Product-First Approach</p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/45">
              Every page designed around the outcome you sell.
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute right-0 bottom-[6%] w-[160px] sm:w-[200px] glass p-3.5 sm:p-4"
          >
            <div className="h-8 w-8 rounded-full bg-[#E63329]/25 grid place-items-center">
              <Rocket size={16} weight="light" className="text-[#ff8a80]" />
            </div>
            <p className="mt-3 text-[13px] sm:text-sm tracking-tight">From idea to launch in 2 weeks</p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/45">
              Design, build and ship — without the agency drag.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Client voices</p>
          <h2 className="mt-4 text-4xl lg:text-6xl tracking-tight">
            Loved by founders who<br />measure what matters.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 lg:mt-14 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 px-6 lg:px-10 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              className="snap-start shrink-0 w-[88vw] sm:w-[480px] glass p-8 lg:p-10 flex flex-col"
            >
              <Quotes size={28} weight="light" className="text-[#E63329]" />
              <p className="mt-5 text-lg leading-relaxed text-white/85 font-light">
                "{t.quote}"
              </p>
              <div className="mt-6 inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-[#E63329]/10 border border-[#E63329]/30 text-xs text-[#E63329]">
                <ChartLineUp size={14} weight="light" /> {t.result}
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/[0.06] mt-8">
                <div>
                  <p className="text-sm">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} weight="fill" className="text-[#E63329]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">How it works</p>
          <h2 className="mt-4 text-4xl lg:text-6xl tracking-tight">
            Three steps from idea<br />to a site that sells.
          </h2>
        </Reveal>

        <div className="mt-10 lg:mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass overflow-hidden group hover:border-[#E63329]/30 transition"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" width={1000} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-full glass text-[#E63329]">
                    <s.icon size={18} weight="light" />
                  </span>
                  <span className="text-xs text-white/40 tracking-[0.2em]">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Services</p>
          <h2 className="mt-4 text-4xl lg:text-6xl tracking-tight">
            Everything your brand<br />needs to win online.
          </h2>
        </Reveal>

        <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="glass p-7 hover:border-[#E63329]/30 transition group"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl glass text-[#E63329] group-hover:bg-[#E63329]/10 transition">
                <s.icon size={22} weight="light" />
              </span>
              <h3 className="mt-6 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Our Mission</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            We started Crawio because small businesses deserve websites that look like the brands they aspire to be — <span className="text-[#E63329]">not the budget they started with.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-base lg:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Our mission is to help ambitious founders — from our studio on  Tunwala, Nehrugram, Chaktonwala Grant, Uttarakhand — grow online with websites engineered for trust, speed and conversion. Premium, accessible, and built to perform.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FreeCall() {
  const trust = [
    "No commitment required",
    "100% free, no hidden charges",
    "Custom website roadmap",
    "Limited spots each week",
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative glass-strong rounded-3xl overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-[#E63329] opacity-30 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative px-6 sm:px-12 py-16 lg:py-24 text-center">
            <Reveal>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#E63329]">Free 20-minute strategy call</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.02] text-balance">
                Book Your Free<br />20-Min Strategy Call
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl mx-auto text-white/60 leading-relaxed">
                We'll analyse your business and tell you exactly what your website needs to convert more visitors — no sales.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="https://calendly.com/crawio/20" target="_blank" rel="noreferrer" className="neu-btn neu-btn-primary mt-8 px-8 py-4 text-base">
                Book Free Call Now <ArrowRight size={18} weight="light" />
              </a>
            </Reveal>
            <Reveal delay={0.2}>
               <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-white/65">
                    <CheckCircle size={16} weight="light" className="text-[#E63329] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="flex items-start gap-4">
            <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl glass text-[#E63329]">
              <s.icon size={20} weight="light" />
            </span>
            <span>
              <span className="block text-base lg:text-lg tracking-tight text-white/90">{s.title}</span>
              <span className="block mt-1 text-xs text-white/45 leading-relaxed">{s.body}</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Recent work</p>
          <h2 className="mt-4 text-4xl lg:text-6xl">
            Live sites, built<br />for real trades.
          </h2>
          <p className="mt-5 text-white/55 leading-relaxed">
            Every site below is a live demo of what we'd build for your business — same quality, your branding.
          </p>
        </Reveal>

        <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p, i) => (
            <motion.a
              key={p.niche}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="glass p-7 hover:border-[#E63329]/40 transition group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#E63329]">0{i + 1}</span>
                <ArrowUpRight size={18} weight="light" className="text-white/30 group-hover:text-[#E63329] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
              <h3 className="mt-5 text-2xl">{p.niche}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{p.body}</p>
              <span className="mt-6 text-xs tracking-[0.15em] uppercase text-white/40 group-hover:text-white/70 transition">
                View live site
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative glass-strong rounded-3xl overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-[#E63329] opacity-25 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative px-6 sm:px-12 py-16 lg:py-20 text-center">
            <Reveal>
              <span className="inline-grid h-14 w-14 place-items-center rounded-2xl glass text-[#E63329]">
                <ShieldCheck size={26} weight="light" />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-balance">
                The 14-day<br />launch guarantee
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl mx-auto text-white/60 leading-relaxed text-base lg:text-lg">
                If your site isn't live within 14 days of us receiving your assets, your first month is free. Simple as that.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40 text-center">FAQ</p>
          <h2 className="mt-4 text-4xl lg:text-6xl tracking-tight text-center">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-10 lg:mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-lg lg:text-xl tracking-tight group-hover:text-[#E63329] transition-colors">
                    {f.q}
                  </span>
                  <CaretDown
                    size={18}
                    weight="light"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#E63329]" : "text-white/40"}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-white/55 leading-relaxed max-w-2xl">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
