"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const rotatingWords = [
    "Job Search",
    "Resume Tailoring",
    "ATS Matching",
    "Tracking"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden font-body">

      {/* Background Waves (STATIC) */}
      <img
        src="/gradient-waves.jpg"
        alt="Gradient Waves"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* FIXED FIRST LINE */}
        <h2 className="text-5xl md:text-6xl text-white mb-3 font-heading tracking-tight">
          The Best AI Platform For
        </h2>

        {/* SECOND LINE (CHANGING WORD ONLY) */}
        <div className="h-[90px] flex items-center justify-center">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400"
          >
            {rotatingWords[index]}
          </motion.span>
        </div>

        {/* CTA */}
        <button className="mt-10 px-10 py-4 bg-white text-black rounded-full text-xl font-semibold hover:scale-105 transition font-body">
          Get Started
        </button>
      </div>
    </section>
  );
}
