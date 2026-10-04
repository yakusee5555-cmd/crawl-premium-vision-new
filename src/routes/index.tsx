import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, PaintBrush, Code, ChartLineUp, Wrench,
  CaretDown, CheckCircle, Quotes, Star, Lightbulb, Palette, Rocket,
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

const faqs = [
  { q: "Do you only work with US/UK/Canadian clients?", a: "No — we work with ambitious brands worldwide. The majority of our clients today are based in the US, UK, Canada and Australia." },
  { q: "What's included in your process?", a: "Strategy, art direction, copy guidance, design, development, launch, and 30 days of post-launch support — all in one fee." },
  { q: "Do you offer ongoing support?", a: "Yes — optional care plans start at $150/month and include updates, edits, hosting and quarterly performance reviews." },
];

function Home() {
  return (
    <Layout>
      <Hero />
      <SmsOptInSection />
      <Testimonials />
      <HowItWorks />
      <Services />
      <Mission />
      <FreeCall />
      <FAQ />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-8 lg:pb-12 overflow-hidden">
      {/* Ambient violet field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-5%] h-[720px] w-[720px] bg-[#7C3AED] opacity-[0.28] blur-[170px] rounded-full" />
        <div className="absolute right-[10%] top-[30%] h-[420px] w-[420px] bg-[#3B82F6] opacity-[0.22] blur-[150px] rounded-full" />
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[520px] bg-[#FF4500] opacity-[0.10] blur-[160px] rounded-full" />
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4500] animate-pulse" />
            Premium Web Design Studio
          </div>
          <h1 className="mt-5 text-[2.6rem] sm:text-6xl lg:text-[72px] leading-[1.02] tracking-[-0.04em] font-light text-balance">
            We build websites that earn<br className="hidden sm:block" />
            <span className="italic font-extralight">trust</span> &amp; drive <span className="text-[#FF4500]">results</span>.
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
          <img
            src={heroJellyfish}
            srcSet={`${heroJellyfishSm} 520w, ${heroJellyfish} 900w`}
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 55vw, 45vw"
            alt="Glowing bioluminescent jellyfish drifting through deep water"
            width={900}
            height={1125}
            decoding="async"
            className="relative w-[70%] sm:w-[58%] lg:w-[86%] h-auto drop-shadow-[0_30px_120px_rgba(124,58,237,0.5)]"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-[6%] w-[150px] sm:w-[190px] glass p-3.5 sm:p-4"
          >
            <div className="h-8 w-8 rounded-full bg-[#FF4500]/15 grid place-items-center">
              <CheckCircle size={16} weight="light" className="text-[#FF4500]" />
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
            <div className="h-8 w-8 rounded-full bg-[#7C3AED]/25 grid place-items-center">
              <Rocket size={16} weight="light" className="text-[#B79BFF]" />
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
              <Quotes size={28} weight="light" className="text-[#FF4500]" />
              <p className="mt-5 text-lg leading-relaxed text-white/85 font-light">
                "{t.quote}"
              </p>
              <div className="mt-6 inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-xs text-[#FF4500]">
                <ChartLineUp size={14} weight="light" /> {t.result}
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/[0.06] mt-8">
                <div>
                  <p className="text-sm">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} weight="fill" className="text-[#FF4500]" />
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
              className="glass overflow-hidden group hover:border-[#FF4500]/30 transition"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" width={1000} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-full glass text-[#FF4500]">
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
              className="glass p-7 hover:border-[#FF4500]/30 transition group"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl glass text-[#FF4500] group-hover:bg-[#FF4500]/10 transition">
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
            We started Crawio because small businesses deserve websites that look like the brands they aspire to be — <span className="text-[#FF4500] italic font-extralight">not the budget they started with.</span>
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
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-[#FF4500] opacity-30 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative px-6 sm:px-12 py-16 lg:py-24 text-center">
            <Reveal>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#FF4500]">Free 20-minute strategy call</p>
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
                    <CheckCircle size={16} weight="light" className="text-[#FF4500] shrink-0" />
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
                  <span className="text-lg lg:text-xl tracking-tight group-hover:text-[#FF4500] transition-colors">
                    {f.q}
                  </span>
                  <CaretDown
                    size={18}
                    weight="light"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#FF4500]" : "text-white/40"}`}
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
