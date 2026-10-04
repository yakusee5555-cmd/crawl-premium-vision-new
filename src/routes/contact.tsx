import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { EnvelopeSimple, Phone, MapPin, ArrowRight, CheckCircle, CalendarBlank, Clock } from "@phosphor-icons/react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Crawio" },
      { name: "description", content: "Let's build something amazing. Book a free 20-minute strategy call or send us a note — we respond within 2 hours." },
      { property: "og:title", content: "Contact — Crawio" },
      { property: "og:description", content: "Let's build something amazing." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(200),
  business: z.string().trim().min(1).max(120),
  message: z.string().trim().min(5).max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      business: fd.get("business"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setError("Please check the fields and try again.");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <Layout>
      <section className="pt-28 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Contact</p>
            <h1 className="mt-4 text-5xl lg:text-7xl tracking-tight leading-[1] text-balance max-w-3xl">
              Let's build something <span className="text-[#E63329]">amazing</span>.
            </h1>
            <p className="mt-6 max-w-xl text-white/55">
              Tell us about your project. We typically respond within 2 hours during business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass p-8 lg:p-10">
            {sent ? (
              <div className="text-center py-16">
                <CheckCircle size={48} weight="light" className="text-[#E63329] mx-auto" />
                <h3 className="mt-6 text-2xl tracking-tight">Message received.</h3>
                <p className="mt-3 text-white/60">We'll be back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field name="name" label="Name" />
                  <Field name="email" label="Email" type="email" />
                </div>
                <Field name="business" label="Business name" />
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/50">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    maxLength={1500}
                    className="mt-2 w-full bg-transparent border-b border-white/10 focus:border-[#E63329] outline-none py-3 text-white placeholder:text-white/30 transition resize-none"
                    placeholder="Tell us a bit about your project…"
                  />
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-white/45 flex items-center gap-2">
                    <Clock size={14} weight="light" /> We respond within 2 hours
                  </p>
                  <button type="submit" className="neu-btn neu-btn-primary">
                    Send Message <ArrowRight size={16} weight="light" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:crawioagency@gmail.com" className="glass p-6 flex items-center gap-4 hover:border-[#E63329]/40 transition group">
              <span className="h-12 w-12 grid place-items-center rounded-xl glass text-[#E63329]">
                <EnvelopeSimple size={22} weight="light" />
              </span>
              <div className="min-w-0">
                <p className="text-sm">crawioagency@gmail.com</p>
                <p className="text-xs text-white/50 truncate">We reply within 2 hours</p>
              </div>
            </a>
            <a href="tel:+16465171947" className="glass p-6 flex items-center gap-4 hover:border-[#E63329]/40 transition group">
              <span className="h-12 w-12 grid place-items-center rounded-xl glass text-[#E63329]">
                <Phone size={22} weight="light" />
              </span>
              <div className="min-w-0">
                <p className="text-sm">+91 9897812905</p>
                <p className="text-xs text-white/50 truncate">Mon–Fri · 9am–7pm ET</p>
              </div>
            </a>
            <div className="glass p-6 flex items-center gap-4">
              <span className="h-12 w-12 grid place-items-center rounded-xl glass text-[#E63329]">
                <MapPin size={22} weight="light" />
              </span>
              <div className="min-w-0">
                <p className="text-sm">Tunwala, Nehrugram, Chaktonwala Grant, Uttarakhand</p>
                <p className="text-xs text-white/50 truncate">Working with clients worldwide</p>
              </div>
            </div>
            <div className="glass p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Trust line</p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Crawio is a Tunwala, Nehrugram, Chaktonwala Grant, Uttarakhand based studio working with founders worldwide. No commitment required to start a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#E63329]">Book directly</p>
                  <h2 className="mt-3 text-3xl lg:text-5xl tracking-tight">Pick a time that works.</h2>
                  <p className="mt-3 text-white/55 max-w-md">A free 20-minute strategy call — no pitch, no pressure.</p>
                </div>
                <a href="https://calendly.com/crawio/20" target="_blank" rel="noreferrer" className="neu-btn neu-btn-primary">
                  <CalendarBlank size={18} weight="light" /> Open Calendar
                </a>
              </div>

              {/* Calendly inline embed */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <iframe
                  src="https://calendly.com/crawio/20?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=e63329"
                  title="Book a strategy call with Crawio"
                  loading="lazy"
                  className="w-full"
                  style={{ height: "720px", border: 0 }}
                />
              </div>
              <p className="mt-5 text-xs text-white/40">Times shown in your local timezone. All calls hosted on Google Meet.</p>
            </div>
          </Reveal>
        </div>
      </section>

    </Layout>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={200}
        className="mt-2 w-full bg-transparent border-b border-white/10 focus:border-[#E63329] outline-none py-3 text-white placeholder:text-white/30 transition"
      />
    </div>
  );
}
