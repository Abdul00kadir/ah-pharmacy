import Link from "next/link";
import Social from "./Social";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-slate-800 border border-slate-700">
                <img
                  alt="AH Pharmacy"
                  src="/logo/logo_desk.png"
                  className="h-9 w-auto"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">AH Pharmacy</span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Authentic Unani medicine and herbal wellness remedies crafted to enhance your vitality and long-term health.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-emerald-400" />
                <a href="mailto:ahpharmacy@gmail.com" className="hover:text-emerald-400 transition-colors">
                  ahpharmacy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-emerald-400" />
                <span>Certified Unani Healthcare Supplier</span>
              </div>
            </div>
          </div>

          {/* Navigation Links: Products & Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products & Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/products/Tablets" className="hover:text-emerald-400 transition-colors">
                  Tablets
                </Link>
              </li>
              <li>
                <Link href="/products/Majoon" className="hover:text-emerald-400 transition-colors">
                  Majoon
                </Link>
              </li>
              <li>
                <Link href="/products/Capsules" className="hover:text-emerald-400 transition-colors">
                  Capsules
                </Link>
              </li>
              <li>
                <Link href="/products/Combos" className="hover:text-emerald-400 transition-colors">
                  Combos
                </Link>
              </li>
              <li>
                <Link href="/products/ForPain" className="hover:text-emerald-400 transition-colors">
                  For Pain
                </Link>
              </li>
              <li>
                <Link href="/offer" className="hover:text-emerald-400 transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="hover:text-emerald-400 transition-colors">
                  Submit Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links: Legal & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Social
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2">Connect with us</span>
              <Social />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AH Pharmacy. All rights reserved.</p>
          <p className="text-slate-500">Unani Medicine & Healthcare Excellence</p>
        </div>

      </div>
    </footer>
  );
}
