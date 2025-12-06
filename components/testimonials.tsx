"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Reddy",
    role: "Software Engineer",
    text: "RefineAI transformed my resume into a story. I secured interviews at Amazon and Meta within 2 weeks.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Data Analyst",
    text: "The AI rewriting felt human and powerful. My job responses doubled instantly.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    text: "Finally a resume that reflects my actual impact. Recruiters started replying again.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Alicia Gomez",
    role: "UX Designer",
    text: "RefineAI didn’t just edit my resume — it elevated my story. Game-changing.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function HorizontalTestimonials() {
  return (
    <section className="w-full bg-black py-24 px-6 text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-garamond tracking-tight">
          What People Are Saying
        </h2>
      </div>

      {/* Horizontal Scroll - No Scrollbar */}
      <div className="overflow-x-auto flex gap-6 pb-2 no-scrollbar">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="min-w-[330px] md:min-w-[380px] bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl"
          >
            {/* Top row with image + name */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                className="w-14 h-14 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-garamond text-xl">{t.name}</p>
                <p className="text-white/50 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Text */}
            <p className="font-garamond text-lg leading-relaxed text-white/90">
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
