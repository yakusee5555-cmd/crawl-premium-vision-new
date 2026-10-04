import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Crawio" },
      { name: "description", content: "Crawio Terms and Conditions, including SMS messaging terms, compliance, intellectual property, disclaimers and governing law." },
      { property: "og:title", content: "Terms and Conditions — Crawio" },
      { property: "og:description", content: "Crawio Terms and Conditions, including SMS messaging terms and compliance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms and Conditions — Crawio" },
      { name: "twitter:description", content: "Crawio Terms and Conditions, including SMS messaging terms and compliance." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Legal</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Terms and Conditions
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 lg:mt-10 space-y-8 lg:space-y-10 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-2xl tracking-tight text-white mb-5">SMS Messaging &amp; Compliance</h2>

                <div className="space-y-4">
                  <p>
                    <strong className="text-white font-semibold">1. Program Description:</strong>{" "}
                    This messaging program sends two types of messages to customers who have opted in via our website SMS opt-in form:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white font-semibold">Non-Marketing Messages:</strong> Consultation scheduling, appointment confirmations and reminders, rescheduling updates, and project updates for customers who have booked with or engaged Crawio.
                    </li>
                    <li>
                      <strong className="text-white font-semibold">Marketing Messages:</strong> Promotional notifications about new service announcements, special offers, and discounts, for customers who have separately opted in to receive these.
                    </li>
                  </ul>
                  <p>
                    Opt-in for each message type is collected via web forms with two separate, independent checkboxes — one for non-marketing messages and one for marketing messages. Consent to one does not imply consent to the other.
                  </p>

                  <p>
                    <strong className="text-white font-semibold">2. Cancellation Instructions:</strong>{" "}
                    You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">3. Support Information:</strong>{" "}
                    If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to crawioagency@gmail.com during business hours.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">4. Carrier Liability:</strong>{" "}
                    Carriers are not liable for delayed or undelivered messages.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">5. Message &amp; Data Rates:</strong>{" "}
                    Message and data rates may apply for messages sent to you from us and to us from you. Message frequency for each program (non-marketing and marketing) may vary up to 4 messages per month. For questions about your text plan or data plan, contact your wireless provider.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">6. Supported Carriers:</strong>{" "}
                    Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">7. Age Restriction:</strong>{" "}
                    You must be 18 years or older to participate in our SMS program.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">8. Privacy Policy:</strong>{" "}
                    For privacy-related inquiries, please refer to our{" "}
                    <Link to="/privacy-policy" className="text-[#E63329] hover:underline">Privacy Policy</Link>.
                  </p>
                  <p>
                    We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">General Terms</h2>
                <div className="space-y-4">
                  <p>
                    This website (the "Site") is owned and operated by Crawio ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms and Conditions and to use the Site in accordance with these Terms and Conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Crawio.
                  </p>
                  <p>
                    Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms and Conditions.
                  </p>
                  <p>
                    We reserve the right to change these Terms and Conditions or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms and Conditions on this website. By continuing to use the Site after we post any such changes, you accept the Terms and Conditions, as modified.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Intellectual Property Rights</h2>
                <h3 className="text-lg tracking-tight text-white/95 mb-2">Our Limited License to You</h3>
                <div className="space-y-4">
                  <p>
                    This Site and all the materials available on the Site are the property of Crawio and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.
                  </p>
                  <p>
                    You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.
                  </p>
                  <p>
                    Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
                  </p>
                </div>
                <h3 className="mt-6 text-lg tracking-tight text-white/95 mb-2">Your License to Us</h3>
                <p>
                  By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Disclaimers</h2>
                <div className="space-y-4">
                  <p>
                    Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.
                  </p>
                  <p>
                    The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Indemnification</h2>
                <p>
                  You agree at all times to indemnify and hold harmless Crawio, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Online Commerce</h2>
                <div className="space-y-4">
                  <p>
                    Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.
                  </p>
                  <p>
                    Your participation in any dealings with third-party vendors is solely between you and the third party. Crawio shall not be responsible for any loss or damage incurred as a result of such dealings.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Registration &amp; Passwords</h2>
                <div className="space-y-4">
                  <p>
                    To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
                  </p>
                  <p>
                    If you suspect unauthorized use of your account, notify us immediately at crawioagency@gmail.com. We are not liable for any loss or damage arising from your failure to comply with this obligation.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms and Conditions or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of South Carolina. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Changes to Terms and Conditions</h2>
                <p>
                  We may update these Terms and Conditions from time to time. The latest version will always be available on our website with the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl tracking-tight text-white mb-4">Contact Us</h2>
                <p className="mb-3">For any questions regarding these Terms and Conditions, please contact us at:</p>
                <ul className="space-y-1">
                  <li className="text-white">Crawio</li>
                  <li>
                    Email:{" "}
                    <a href="mailto:crawioagency@gmail.com" className="text-[#E63329] hover:underline">crawioagency@gmail.com</a>
                  </li>
                  <li>Location: Tunwala, Nehrugram, Chaktonwala Grant, Uttarakhand</li>
                </ul>
              </section>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
