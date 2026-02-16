import Link from "next/link";
import Social from "./Social";

export default function Footer() {
  return (
<footer className="bg-base-200 pt-10 text-base-content border-t border-base-300 w-full">
      <div className="footer max-w-7xl mx-auto px-10 py-10 pt-3 sm:footer-horizontal  ">
        
        {/* Logo + About */}
        <aside className="md:hidden mb-2">
          <div className="flex items-center ">
            <Link href="/">
              <img
              alt=""
              src="/logo/Desk-logo (2).png"
              className="h-15 w-auto dark:hidden"
            />
            <img
              alt=""
              src="/logo/Desk-logo (1).png"
              className="h-15 w-auto hidden dark:block"
            />
            </Link>

          </div>

          <p className="text-sm text-base-content/70 max-w-xs">
            Trusted healthcare and wellness products.
            Quality medicines with reliable service.
          </p>
        </aside>

        <div className="flex justify-center items-top gap-5 md:gap-30">

           <aside className="hidden md:block mb-2">
          <div className="flex items-center ">
            <Link href="/">
              <img
              alt=""
              src="/logo/Desk-logo (2).png"
              className="h-15 w-auto dark:hidden"
            />
            <img
              alt=""
              src="/logo/Desk-logo (1).png"
              className="h-15 w-auto hidden dark:block"
            />
            </Link>

          </div>

          <p className="text-sm text-base-content/70 max-w-xs">
            Trusted healthcare and wellness products.
            Quality medicines with reliable service.
          </p>
        </aside>

        {/* Services */}
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title font-bold">Services</h6>
          <Link href="/products" className="link link-hover hover:text-[#000EE]">
            Products
          </Link>
          <Link href="/offer" className="link link-hover">
            Offers
          </Link>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
        </nav>

        {/* Company */}
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title font-bold">Company</h6>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/enquiry" className="link link-hover">
            Enquiry
          </Link>
        </nav>

        {/* Legal */}
        <nav className="flex flex-col">
          <h6 className="footer-title font-bold mb-2.5">Legal</h6>
          <Link href="/terms-and-conditions" className="link link-hover">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
        <div className="hidden md:block">
          <Social />
          <p className="text-sm text-base-content text-center cursor-pointer">ahpharmacy@gmail.com</p>
        </div>
        </div>
        <div className="block md:hidden t-0">
          <Social />
          <p className="text-sm text-base-content text-center cursor-pointer">
            ahpharmacy@gmail.com
          </p>
      </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-10 py-4 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} AH Pharmacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
