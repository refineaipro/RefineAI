"use client";

import { useState } from "react";

export default function JoinWaitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwFKtKZ-hl5crltvQu2O_YGHndtpJ6rPF9oaItSQF1bqxmnyslYhWTAqEn52YTsrZxR/execERE", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ name, email }),
      });

      setStatus("Joined successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section
      className="
        min-h-screen w-full 
        flex flex-col items-center 
        justify-start 
        bg-black relative px-4
        pt-24 md:pt-32
      "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90" />

      {/* Glow circles */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/10 blur-3xl rounded-full" />

      {/* FORM CARD */}
      <div
        className="
          relative z-10 max-w-md w-full 
          p-8 md:p-10 
          rounded-3xl 
          bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-2xl
        "
      >
        <h1 className="text-center text-4xl font-heading text-white mb-8">
          Join the Waitlist
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-5 py-4 rounded-xl bg-white/90 text-black 
                       focus:ring-2 focus:ring-blue-400 outline-none 
                       shadow-md"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-5 py-4 rounded-xl bg-white/90 text-black 
                       focus:ring-2 focus:ring-blue-400 outline-none 
                       shadow-md"
          />

          {/* NEON GRADIENT ANIMATED BUTTON */}
          <button
            type="submit"
            className="neon-btn w-full py-4 text-white font-semibold text-lg rounded-xl"
          >
            Join
          </button>
        </form>

        {status && (
          <p className="text-center text-sm text-gray-300 mt-4">{status}</p>
        )}
      </div>
    </section>
  );
}
