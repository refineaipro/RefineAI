"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AutoStory() {
  const sentences = [
    "A career is only as strong as the story it tells.",
    "And behind every successful application, there is a precise alignment of skills, intent, and opportunity.",
    "In today's hiring world, talent isn't rejected for lack of ability — it is rejected by systems that fail to see it.",
    "RefineAI exists to change that.",
    "Every résumé hides layers of intelligence — experience, growth, impact, and ambition.",
    "RefineAI interprets careers — not documents.",
    "Because the future of hiring shouldn't be about beating algorithms — it should be about aligning human brilliance with them.",
    "Refine your story. Rank your future."
  ];

  const [current, setCurrent] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sentences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative w-full py-20 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* CURSOR LIGHT GLOW */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          top: pos.y - 175,
          left: pos.x - 175,
        }}
        animate={{ x: pos.x - 175, y: pos.y - 175 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="w-full h-full bg-blue-400/20 blur-3xl rounded-full" />
      </motion.div>

      {/* TEXT BLOCK */}
      <div className="relative z-10 h-[140px] flex items-center justify-center max-w-4xl mx-auto px-6 text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            className="text-white text-2xl md:text-3xl leading-snug font-body font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            {sentences[current]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
