"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          GrowthLab
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full min-w-[150px] rounded-lg bg-white py-2 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <Link href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                SEM
              </Link>
              <Link href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                SEO
              </Link>
              <Link href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Programmatic
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Our Works
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full min-w-[150px] rounded-lg bg-white py-2 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <Link href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                E-commerce
              </Link>
              <Link href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Banner Ads
              </Link>
            </div>
          </div>

          <Link href="#why-us" className="text-gray-700 hover:text-blue-600">
            About
          </Link>

          <Link
            href="#cta"
            className="rounded-full bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <Link href="/" className="block py-2 text-gray-700">
            Home
          </Link>
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between py-2 text-gray-700"
            >
              Services
              <svg className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link href="#services" className="block py-2 text-gray-600">SEM</Link>
                <Link href="#services" className="block py-2 text-gray-600">SEO</Link>
                <Link href="#services" className="block py-2 text-gray-600">Programmatic</Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setWorksOpen(!worksOpen)}
              className="flex w-full items-center justify-between py-2 text-gray-700"
            >
              Our Works
              <svg className={`h-4 w-4 transition-transform ${worksOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {worksOpen && (
              <div className="pl-4">
                <Link href="#projects" className="block py-2 text-gray-600">E-commerce</Link>
                <Link href="#projects" className="block py-2 text-gray-600">Banner Ads</Link>
              </div>
            )}
          </div>
          <Link href="#why-us" className="block py-2 text-gray-700">
            About
          </Link>
          <Link
            href="#cta"
            className="mt-4 block rounded-full bg-blue-600 px-6 py-2 text-center text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
