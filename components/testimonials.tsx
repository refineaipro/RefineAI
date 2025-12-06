"use client";

import { motion } from "framer-motion";

// Fix: Override motion types to allow className and children
const MotionDiv: any = motion.div;

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Product Manager",
      avatar: "/avatar1.png",
      text: "RefineAI helped me tailor my resume in minutes. My interview call rate doubled instantly."
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      avatar: "/avatar2.png",
      text: "The ATS score insights are insanely accurate. This platform is now part of my workflow."
    },
    {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      avatar: "/avatar3.png",
      text: "I landed my first interview at a FAANG company thanks to RefineAI."
    },
    {
      name: "David Park",
      role: "AI Researcher",
      avatar: "/avatar4.png",
      text: "Finally a tool that understands resume context instead of keyword stuffing."
    }
  ];

  return (
    <section className="w-full py-24 bg-black text-white">
      <h2 className="text-center text-4xl md:text-5xl font-heading mb-16">
        Trusted by Professionals Everywhere
      </h2>

      <div className="flex overflow-x-auto gap-6 px-10 no-scrollbar">
        {testimonials.map((item, idx) => (
          <MotionDiv
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="min-w-[330px] md:min-w-[380px] bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl"
          >
            {/* Top row */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                className="w-14 h-14 rounded-full border border-white/20"
                alt={item.name}
              />
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-white/60">{item.role}</p>
              </div>
            </div>

            {/* Testimonial text */}
            <p className="text-white/80 text-lg leading-relaxed">
              "{item.text}"
            </p>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
