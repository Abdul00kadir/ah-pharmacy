'use client'

import { useState } from 'react'
import Link from 'next/link'
import Bannar from './Bannar.js'
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
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Tablets', description: 'Get a better understanding of your traffic', href: '/products/Tablets', icon: ChartPieIcon },
  { name: 'Majoon', description: 'Speak directly to your customers', href: '/products/Majoon', icon: CursorArrowRaysIcon },
  { name: 'Capsules', description: 'Your customers’ data will be safe and secure', href: '/products/Capsules', icon: FingerPrintIcon },
  { name: 'Combos', description: 'Connect with third-party tools', href: '/products/Combos', icon: SquaresPlusIcon },
  { name: 'For Pain', description: 'Build strategic funnels that will convert', href: '/products/ForPain', icon: ArrowPathIcon },
]
const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-2xl ">
      {/* <Bannar /> */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-1  lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/logo/logo_desk.png"
              className="h-15 w-auto px-3 md:hidden"
            />
            <img
              alt=""
              src="/logo/logo_desk.png"
              className="h-15 w-auto hidden md:block dark:hidden"
            />
            <img
              alt=""
              src="/logo/logo_desk.png"
              className="h-15 w-auto hidden md:dark:block"
            />
            
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 cursor-pointer font-semibold text-main dark:text-white">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-main dark:text-gray-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-main/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-900 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-main group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-main dark:text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-main dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-main/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-main hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-main dark:text-gray-500" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/offer" className="text-sm/6 font-semibold text-main dark:text-white">
            Offers
          </Link>
          <Link href="/blog" className="text-sm/6 font-semibold text-main dark:text-white">
            Blog
          </Link>
          <Link href="/about" className="text-sm/6 font-semibold text-main dark:text-white">
            About Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/enquiry" className="text-sm/6 font-semibold text-main dark:text-white border border-main px-3 py-2 rounded-lg hover:bg-[#3b6342] hover:text-white dark:border-white/10 dark:hover:bg-white/5 transform transition duration-300 ease-in-out">
            Enquiry Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-main/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/logo/logo.png"
                className="h-8 w-auto dark:hidden "
              />
              <img
                alt=""
                src="/logo/logo.png"
                className="h-8 w-auto not-dark:hidden"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/offer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Offers
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  About Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/enquiry"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-main hover:bg-gray-50 dark:text-white dark:hover:bg-white/5  border border-main px-3 py-2 rounded-lg hover:bg-main transform transition duration-300 ease-in-out"
                >
                  Enquiry Now
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
