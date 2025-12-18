"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FounderNote() {
  const [active, setActive] = useState(0);
  const [autoPlayed, setAutoPlayed] = useState(false);

  // Auto-advance once
  useEffect(() => {
    if (autoPlayed) return;

    const timer = setTimeout(() => {
      setActive(1);
      setAutoPlayed(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, [autoPlayed]);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

{/* SLIDE 1 — PRANAV (FIRST) */}
{active === 0 && (
  <div className="grid md:grid-cols-2 gap-16 items-center transition-opacity duration-300">
    
    {/* Image */}
    <div className="relative flex justify-center md:justify-start">
      <div className="relative w-72 h-96 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition duration-500 ease-out">
        <Image
          src="/founder-placeholder2.JPG"
          alt="Pranav Sai Ganta"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>

    {/* Text */}
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-500">
        A note from our cofounder
      </p>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed">
        We learned early that mass applying feels productive,
        but rarely creates real signal.
        Hundreds of applications disappear into systems
        designed to filter, not to notice.
        <br /><br />
        What changed outcomes for us was intentional outreach.
        Thoughtful cold emails. Clear context.
        Respect for the person on the other side.
      </p>

      {/* Name + LinkedIn */}
      <div className="mt-8 text-gray-500">
        <div className="flex items-center gap-3">
          <p className="text-white">Pranav Sai Ganta</p>

                  <a
          href="https://www.linkedin.com/in/pranavganta/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-500 
                    hover:text-[#0A66C2] transition-colors duration-300"
          aria-label="View LinkedIn profile"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433c-1.1 0-1.994-.895-1.994-1.994 0-1.1.894-1.994 1.994-1.994 1.099 0 1.994.894 1.994 1.994 0 1.099-.895 1.994-1.994 1.994zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
          </svg>
        </a>
        </div>

        <p className="mt-1">Co-founder, Refine AI</p>
      </div>
    </div>
  </div>
)}


{/* SLIDE 2 — GAYATRI (SECOND) */}
{active === 1 && (
  <div className="grid md:grid-cols-2 gap-16 items-center transition-opacity duration-300">
    
    {/* Text */}
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-500">
        A note from our cofounder
      </p>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed">
        We have been through the job search ourselves.
        The uncertainty, the rejections, and the constant guessing
        about what actually makes a difference.
        <br /><br />
        Refine AI is built from those experiences.
        From learning what works, what does not,
        and how to focus effort on the things that truly matter.
      </p>

      {/* Name + LinkedIn */}
      <div className="mt-8 text-gray-500">
        <div className="flex items-center gap-3">
          <p className="text-white">Gayatri Bhavana Addala</p>

          <a
            href="https://www.linkedin.com/in/a-gayatri-bhavana/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gayatri Bhavana Addala LinkedIn"
            className="text-white/40 hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433c-1.1 0-1.994-.895-1.994-1.994 0-1.1.894-1.994 1.994-1.994 1.099 0 1.994.894 1.994 1.994 0 1.099-.895 1.994-1.994 1.994zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
            </svg>
          </a>
        </div>

        <p className="mt-1">Co-founder, Refine AI</p>
      </div>
    </div>

    {/* Image */}
    <div className="relative flex justify-center md:justify-end">
      <div className="relative w-72 h-96 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition duration-500 ease-out">
        <Image
          src="/founder-placeholder.jpg"
          alt="Gayatri Bhavana Addala"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>

  </div>
)}


        {/* NAME SELECTORS */}
        <div className="mt-16 flex justify-center gap-6 text-sm">
          <button
            onClick={() => setActive(0)}
            className={`transition ${
              active === 0 ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            Pranav Sai Ganta
          </button>

          <span className="text-white/20">·</span>

          <button
            onClick={() => setActive(1)}
            className={`transition ${
              active === 1 ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            Gayatri Bhavana Addala
          </button>
        </div>

      </div>
    </section>
  );
}
