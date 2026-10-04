import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Crawio" },
      { name: "description", content: "Crawio Privacy Policy: how we collect, use, protect and share your information, including SMS opt-in data and consent practices." },
      { property: "og:title", content: "Privacy Policy — Crawio" },
      { property: "og:description", content: "How Crawio collects, uses, protects and shares your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Privacy Policy — Crawio" },
      { name: "twitter:description", content: "How Crawio collects, uses, protects and shares your information." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <Layout>
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Legal</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Crawio Privacy Policy
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 lg:mt-10 space-y-8 lg:space-y-10 text-white/80 leading-relaxed">
              <Notice variant="amber">
                <h2 className="text-base font-semibold tracking-tight text-amber-950 mb-2">
                  IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
                </h2>
                <p className="text-amber-900/90">
                  Crawio ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
                </p>
              </Notice>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">1. Information We Collect</h2>
                <p className="mb-3">We collect the following types of information:</p>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Name, email address, phone number, physical address</li>
                  <li>Payment information when you make a purchase or request a quote</li>
                  <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Customer Communication:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Records of inquiries and service requests</li>
                  <li>Appointment details and preferences</li>
                  <li>Service history and feedback</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-3">We use collected data for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Processing transactions and payments</li>
                  <li>Communicating with you about your inquiries, appointments, and promotions</li>
                  <li>Enhancing website functionality and user experience</li>
                  <li>Ensuring security and fraud prevention</li>
                  <li>Maintaining records of your communication preferences and consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">3. SMS Messaging &amp; Compliance</h2>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Text Message Program Terms &amp; Conditions</h3>
                <p className="mb-4">
                  By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
                </p>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Opt-In &amp; Consent:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You will only receive messages if you have explicitly opted in</li>
                  <li>We maintain timestamped records of all opt-in actions</li>
                  <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Opt-Out Instructions:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                  <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                  <li>All opt-out requests are processed immediately</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Message Frequency &amp; Content:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Message frequency varies based on your interactions with our business</li>
                  <li>Messages will be directly related to the services you have requested</li>
                  <li>We do not send promotional content without specific consent</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Help &amp; Support:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Reply "HELP" for assistance or contact us at crawioagency@gmail.com</li>
                  <li>Customer support is available during regular business hours</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Carrier Information:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Standard message and data rates may apply</li>
                  <li>Carriers are not liable for delayed or undelivered messages</li>
                  <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
                </ul>

                <Notice variant="gray">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">
                    SMS Data Protection Statement
                  </h3>
                  <p className="text-slate-800/90 mb-3">
                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                  <p className="text-slate-800/90">
                    We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
                  </p>
                </Notice>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">4. Information Sharing &amp; Disclosure</h2>
                <p className="mb-3">We do not sell, rent, or trade personal information. We may share information with:</p>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Service Providers:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
                  <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
                  <li>All service providers are contractually obligated to maintain confidentiality and security</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Legal Compliance:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>If required by law, legal process, or to protect our rights</li>
                  <li>In response to valid law enforcement requests or court orders</li>
                </ul>

                <h3 className="text-lg tracking-tight text-white/95 mb-2">Business Transfers:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>In case of mergers, acquisitions, or sale of assets</li>
                  <li>In such cases, your data remains protected under the terms of this policy</li>
                </ul>

                <p>
                  All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">5. Data Security</h2>
                <p className="mb-3">We implement and maintain reasonable security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure access controls and authentication mechanisms</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Breach notification protocols in accordance with applicable laws</li>
                  <li>Secure backup systems and disaster recovery procedures</li>
                </ul>
                <p>
                  Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">6. Cookies &amp; Tracking Technologies</h2>
                <p className="mb-3">We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Analyze site traffic and user behavior</li>
                  <li>Remember your preferences</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Measure the effectiveness of our services</li>
                </ul>
                <p>
                  You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">7. Your Rights &amp; Choices</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                  <li>Opt-out of SMS messages by replying "STOP"</li>
                  <li>Request information on how we process your data</li>
                  <li>Withdraw consent at any time for future communications</li>
                  <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information in Section 10.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by Crawio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">10. Contact Us</h2>
                <p className="mb-3">If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
                <p className="text-white/95">Crawio</p>
                <p>Email: <a href="mailto:crawioagency@gmail.com" className="text-[#FF4500] hover:underline">crawioagency@gmail.com</a></p>
                <p>Location:  Tunwala, Nehrugram, Chaktonwala Grant, Uttarakhand</p>
              </section>

              <p className="pt-4 text-white/60 text-sm">
                By using our website and services, you consent to this Privacy Policy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Notice({
  variant,
  children,
}: {
  variant: "amber" | "gray";
  children: ReactNode;
}) {
  const styles =
    variant === "amber"
      ? "bg-amber-50 border-amber-200 text-amber-950"
      : "bg-slate-100 border-slate-200 text-slate-900";

  return (
    <div className={`rounded-xl border p-5 lg:p-6 ${styles}`}>
      {children}
    </div>
  );
}
