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

              <div className="mt-8 text-gray-500">
                <p>Pranav Sai Ganta</p>
                <p>Co-founder, Refine AI</p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2 — GAYATRI (SECOND) */}
        {active === 1 && (
          <div className="grid md:grid-cols-2 gap-16 items-center transition-opacity duration-300">
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

              <div className="mt-8 text-gray-500">
                <p>Gayatri Bhavana Addala</p>
                <p>Co-founder, Refine AI</p>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden grayscale">
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
