import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

import { Search } from "./Search";

const navigation = {
  pages: [
    { name: 'All Products', href: '#' },
  ],
}

export default function Navbar({ projects }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="relative bg-white border-b border-gray-200">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">FiftyStore</span>
                  {/* <img
                    className="h-8 w-auto"
                    src="/logo_fifty.png"
                    alt=""
                  /> */}
                  Logo
                </Link>
              </div>

              <div className="ml-auto flex">
                {/* Search */}
                <Search data={projects} />

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="/cart" className="group -m-2 flex items-center p-2 relative">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="bg-red-600 text-white text-sm font-medium px-2 py-0.5 rounded-full group-hover:bg-red-800 dark:bg-red-900 dark:text-red-300 absolute bottom-5 left-5">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
        </nav>
      </header>
    </div>
  )
}
