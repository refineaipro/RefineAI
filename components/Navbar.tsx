"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md ${spaceGrotesk.className}`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex justify-center">
        
        <div className="flex items-center w-full max-w-5xl relative">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 ml-20">
            <Image
              src="/refineailogo.jpg"
              alt="Refine AI Logo"
              width={200}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Center Links */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-[17px] font-medium tracking-wide text-gray-200">
            <Link href="/features" className="hover:text-white transition">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Company
            </Link>
            <Link href="/free-tools" className="hover:text-white transition">
              Free Tools
            </Link>
          </div>

          {/* CTA */}
          <div className="ml-auto mr-20 hidden md:block">
            <Link
              href="/get-started"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-gray-300">
          <Link href="/solutions" onClick={() => setOpen(false)} className="block">
            Solutions
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block">
            Pricing
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            Company
          </Link>
          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
