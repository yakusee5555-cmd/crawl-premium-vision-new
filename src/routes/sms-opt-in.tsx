import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SmsOptInForm } from "@/components/SmsOptInSection";

export const Route = createFileRoute("/sms-opt-in")({
  head: () => ({
    meta: [
      { title: "SMS Opt-In — Stay Connected With Crawio" },
      { name: "description", content: "Sign up to receive updates and communications from Crawio by SMS. Separate consent for non-marketing and marketing messages; opt out any time." },
      { property: "og:title", content: "SMS Opt-In — Stay Connected With Crawio" },
      { property: "og:description", content: "Sign up to receive updates and communications from Crawio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "SMS Opt-In — Stay Connected With Crawio" },
      { name: "twitter:description", content: "Sign up to receive updates and communications from Crawio." },
    ],
  }),
  component: SmsOptInPage,
});

function SmsOptInPage() {
  return (
    <Layout>
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h1 className="text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Stay Connected With <span className="text-[#E63329]">Crawio</span>
            </h1>
            <p className="mt-6 text-white/55 max-w-xl leading-relaxed">
              Sign up to receive updates and communications from Crawio
            </p>
          </Reveal>

          <div className="mt-8 lg:mt-10 glass p-6 sm:p-8 lg:p-10">
            <SmsOptInForm idPrefix="page-sms" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
