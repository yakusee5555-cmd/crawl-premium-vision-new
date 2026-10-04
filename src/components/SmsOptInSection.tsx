import { useState } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "@phosphor-icons/react";

const schema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^\+?[0-9\s().-]{7,20}$/, "Please enter a valid mobile phone number.")
    .optional()
    .or(z.literal("")),
});

const NON_MARKETING_COPY =
  "I consent to receive non-marketing text messages from Crawio related to consultation scheduling, appointment confirmations and reminders, and project updates. Message frequency may vary up to 4 messages per month. Message & data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.";

const MARKETING_COPY =
  "I consent to receive promotional notifications about new service announcements, including special offers and discounts from Crawio at the phone number provided. Message frequency varies, up to 4 messages per month. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.";

export function SmsOptInForm({ idPrefix = "sms" }: { idPrefix?: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nonMarketing, setNonMarketing] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const canSubmit = nonMarketing || marketing;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      phone: fd.get("phone") ?? "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the fields and try again.");
      return;
    }

    const submission = {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone ? parsed.data.phone : null,
      nonMarketingConsent: nonMarketing,
      marketingConsent: marketing,
      consentTimestamp: new Date().toISOString(),
    };

    try {
      const key = "crawio_sms_optin_submissions";
      const existing = JSON.parse(localStorage.getItem(key) ?? "[]");
      localStorage.setItem(key, JSON.stringify([...existing, submission]));
    } catch {
      /* storage unavailable — submission still acknowledged */
    }

    setError(null);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-10 text-center">
        <CheckCircle size={48} weight="light" className="text-[#E63329] mx-auto" />
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          Thanks! Your information has been received. If you opted in to SMS, you'll receive messages
          from Crawio according to your consent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-5 sm:mt-8 sm:space-y-6" noValidate>
      <Field idPrefix={idPrefix} name="fullName" label="Full Name" placeholder="Your full name" autoComplete="name" required />
      <Field idPrefix={idPrefix} name="email" label="Email Address" type="email" placeholder="you@example.com" autoComplete="email" required />
      <Field
        idPrefix={idPrefix}
        name="phone"
        label="Mobile Phone Number"
        type="tel"
        placeholder="+1 (555) 000-0000"
        autoComplete="tel"
        inputMode="tel"
      />

      <div className="pt-2 space-y-5">
        <Consent
          id={`${idPrefix}-non-marketing`}
          checked={nonMarketing}
          onChange={setNonMarketing}
          text={NON_MARKETING_COPY}
        />
        <Consent
          id={`${idPrefix}-marketing`}
          checked={marketing}
          onChange={setMarketing}
          text={MARKETING_COPY}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link to="/privacy-policy" className="text-[#E63329] hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="text-[#E63329] hover:underline">Terms and Conditions</Link>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={!canSubmit}
          className="neu-btn neu-btn-primary min-h-[48px] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function Consent({
  id,
  checked,
  onChange,
  text,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  text: string;
}) {
  return (
    <label htmlFor={id} className="flex gap-3 items-start cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-[#E63329]"
      />
      <span className="text-sm text-white/70 leading-relaxed">{text}</span>
    </label>
  );
}

function Field({
  idPrefix,
  name,
  label,
  type = "text",
  placeholder,
  ...rest
}: {
  idPrefix: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={`${idPrefix}-${name}`} className="text-xs uppercase tracking-[0.2em] text-white/50">
        {label}
      </label>
      <input
        id={`${idPrefix}-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="mt-2 w-full bg-transparent border-b border-white/10 focus:border-[#E63329] outline-none py-3 text-white placeholder:text-white/30 transition"
        {...rest}
      />
    </div>
  );
}

export function SmsOptInSection() {
  return (
    <section id="sms-opt-in" className="relative scroll-mt-24 py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="relative">
          <div className="absolute inset-x-10 -top-6 h-40 bg-[#E63329] opacity-20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0C0A14]/90 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(124,58,237,0.55)] p-6 sm:p-8 lg:p-10">
            <div className="text-center">
              <h2 className="text-3xl lg:text-5xl tracking-tight text-balance">
                Stay Connected With <span className="text-[#E63329]">Crawio</span>
              </h2>
              <p className="mt-5 text-white/55 leading-relaxed">
                Sign up to receive updates and communications from Crawio
              </p>
            </div>
            <SmsOptInForm idPrefix="home-sms" />
          </div>
        </div>
      </div>
    </section>
  );
}
