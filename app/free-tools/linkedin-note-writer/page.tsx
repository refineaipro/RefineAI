"use client";

import { useState } from "react";

export default function LinkedInNoteGenerator() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [tone, setTone] = useState<"formal" | "casual">("formal");
  const [note, setNote] = useState("");

  const generateNote = () => {
    if (!name || !position) {
      setNote("Please enter both name and position.");
      return;
    }

    let message = "";

    if (tone === "formal") {
      const templates = [
        `Hi ${name}, I came across your work as a ${position} and appreciated your perspective. I’m exploring similar paths and would value learning from your experience.`,
        `Hello ${name}, I’ve been following your journey as a ${position} and found it insightful. I’d love to connect and learn from your experience.`,
        `Hi ${name}, I noticed your background as a ${position} and wanted to reach out. I’m exploring similar roles and would appreciate connecting.`,
      ];

      message = templates[Math.floor(Math.random() * templates.length)];
    } else {
      const templates = [
        `Hey ${name}! I saw your work as a ${position} and found it really interesting. Would love to connect and learn more about your journey.`,
        `Hi ${name}! I came across your profile and your role as a ${position} caught my eye. Thought I’d say hello and connect.`,
        `Hey ${name}, noticed your experience as a ${position}. Would be great to connect and hear about your journey.`,
      ];

      message = templates[Math.floor(Math.random() * templates.length)];
    }

    setNote(message);
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold text-center">
        LinkedIn Cold Message Generator
      </h2>

      <p className="mt-4 text-gray-400 text-center">
        Write thoughtful LinkedIn cold messages that feel human, relevant,
        and respectful of the other person’s time.
      </p>

      <div className="mt-10 space-y-6">
        <input
          placeholder="Recipient name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-3xl bg-white/5 border border-white/10 
          px-5 py-3 text-sm focus:outline-none"
        />

        <input
          placeholder="Recipient position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full rounded-3xl bg-white/5 border border-white/10 
          px-5 py-3 text-sm focus:outline-none"
        />

        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={tone === "formal"}
              onChange={() => setTone("formal")}
            />
            Formal
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={tone === "casual"}
              onChange={() => setTone("casual")}
            />
            Casual
          </label>
        </div>

        <button
          onClick={generateNote}
          className="w-full rounded-full py-3 text-sm font-medium 
          bg-gradient-to-r from-cyan-400 to-blue-500 
          text-black hover:opacity-90 transition"
        >
          Generate message
        </button>

        {note && (
          <div className="mt-6 rounded-3xl bg-white/5 border border-white/10 p-5">
            <p className="text-sm text-gray-200">{note}</p>
            <div className="mt-3 text-xs text-gray-500 text-right">
              {note.length} / 200
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
