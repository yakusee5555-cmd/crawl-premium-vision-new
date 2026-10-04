import { Link } from "@tanstack/react-router";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import crawioLogo from "@/assets/crawio-logo-white.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center">
              <img src={crawioLogo} alt="Crawio Digital Studio" className="h-11 w-auto" />
            </div>
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              A premium web design studio building high-converting websites for ambitious brands and founders.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
              <MapPin size={16} weight="light" className="text-[#FF4500]" /> Tunwala, Dehradun, Chaktonwala Grant, Uttarakhand 248001
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Studio</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/" hash="sms-opt-in" className="hover:text-white transition">SMS Opt-In</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms and Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href="mailto:crawioagency@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition">
                  <EnvelopeSimple size={16} weight="light" /> crawioagency@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+16465171947" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Phone size={16} weight="light" /> +91 9897812905
                </a>
              </li>
              <li>Mon–Fri · 9am–7pm ET</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:mt-14 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Crawio Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
