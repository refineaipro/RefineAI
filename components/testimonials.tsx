"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const data = [
    {
      name: "Sarah Thompson",
      role: "Product Manager",
      text: `"RefineAI helped me tailor my resume in minutes. My interview call rate doubled instantly."`,
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      text: `"The ATS score insights are insanely accurate. This platform is now part of my workflow."`,
    },
    {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      text: `"I landed my first interview at a FAANG company thanks to RefineAI."`,
    },
    {
      name: "David Park",
      role: "AI Researcher",
      text: `"Finally a tool that understands resume context instead of keyword stuffing."`,
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-garamond text-white mb-10">
          What Professionals Say
        </h2>

        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[330px] md:min-w-[380px] bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl"
            >
              {/* Name + Role */}
              <div className="mb-4">
                <h3 className="text-xl font-garamond text-white">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed font-rainsans">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
