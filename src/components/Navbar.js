'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  BuildingStorefrontIcon,
  TagIcon,
  NewspaperIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const categoryProducts = [
  { 
    name: 'Tablets', 
    description: 'Herbal & Unani tablets for everyday wellness', 
    href: '/products/Tablets',
    badge: 'Popular'
  },
  { 
    name: 'Majoon', 
    description: 'Traditional authentic Unani formulations', 
    href: '/products/Majoon',
    badge: 'Authentic'
  },
  { 
    name: 'Capsules', 
    description: 'Concentrated natural care in easy capsules', 
    href: '/products/Capsules',
    badge: 'Fast Acting'
  },
  { 
    name: 'Combos', 
    description: 'Synergistic medicine kits & value packs', 
    href: '/products/Combos',
    badge: 'Best Value'
  },
  { 
    name: 'For Pain', 
    description: 'Targeted relief for joints, muscle & aches', 
    href: '/products/ForPain',
    badge: 'Relief'
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200/60 dark:border-slate-800/80 py-2.5' 
          : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/40 py-3.5'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex lg:flex-1 items-center gap-3">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group focus:outline-none">
            <div className="relative overflow-hidden rounded-xl bg-emerald-600/10 p-1.5 dark:bg-emerald-400/10 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
              <img
                alt="AH Pharmacy Logo"
                src="/logo/logo_desk.png"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                AH Pharmacy
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-emerald-700 dark:text-emerald-400 mt-0.5">
                Unani & Healthcare
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile controls: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-8">
          
          {/* Products Mega Dropdown */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton 
                  className={`flex items-center gap-x-1.5 text-sm font-semibold transition-colors py-2 focus:outline-none cursor-pointer ${
                    open ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <BuildingStorefrontIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Products</span>
                  <ChevronDownIcon aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-20 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-3 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 transition data-closed:translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150"
                >
                  <div className="space-y-1">
                    {categoryProducts.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-start gap-x-4 rounded-xl p-3 text-sm transition-all hover:bg-emerald-50/70 dark:hover:bg-slate-800/80"
                      >
                        <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <SparklesIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                            <span>{item.name}</span>
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                              {item.badge}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-2 border-t border-slate-100 dark:border-slate-800/80 pt-2 px-3 pb-1 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                    <span>Authentic Unani Healthcare</span>
                    <Link href="/products/Tablets" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                      Explore All &rarr;
                    </Link>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link 
            href="/offer" 
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
          >
            <TagIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Offers</span>
          </Link>

          <Link 
            href="/blog" 
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
          >
            <NewspaperIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Blog</span>
          </Link>

          <Link 
            href="/about" 
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
          >
            <InformationCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>About Us</span>
          </Link>

        </PopoverGroup>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <ThemeToggle />

          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white px-4 py-2.5 text-sm font-semibold shadow-md shadow-emerald-900/10 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 active:scale-95"
          >
            <EnvelopeIcon className="w-4 h-4" />
            <span>Enquiry Now</span>
          </Link>
        </div>

      </nav>

      {/* Mobile Drawer Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white dark:bg-slate-900 p-6 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <img
                  alt="AH Pharmacy"
                  src="/logo/logo_desk.png"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-slate-900 dark:text-white text-base">AH Pharmacy</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <Disclosure as="div" className="border-b border-slate-100 dark:border-slate-800/60 pb-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                      <span>Products</span>
                      <ChevronDownIcon aria-hidden="true" className={`h-5 w-5 transition-transform ${open ? 'rotate-180 text-emerald-600' : ''}`} />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 space-y-1 pl-4">
                      {categoryProducts.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 px-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800/40"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              <Link
                href="/offer"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl py-2.5 px-3 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                Offers
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl py-2.5 px-3 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                Blog
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl py-2.5 px-3 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <Link
              href="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3 text-center text-sm font-semibold shadow-md"
            >
              <EnvelopeIcon className="w-4 h-4" />
              <span>Send Enquiry</span>
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
