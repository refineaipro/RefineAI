"use client";
import { useState } from "react";

export default function JoinWaitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbwFKtKZ-hl5crltvQu2O_YGHndtpJ6rPF9oaItSQF1bqxmnyslYhWTAqEn52YTsrZxR/exec",
      {
        method: "POST",
        body: JSON.stringify({ name, email }),
      }
    );

    setLoading(false);
    setSuccess(true);
    setName("");
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-10 rounded-2xl w-full max-w-md backdrop-blur-xl"
      >
        <h1 className="text-3xl font-heading mb-6 text-center">
          Join the Waitlist
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-md text-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-md text-black"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md font-semibold hover:scale-105 transition"
        >
          {loading ? "Submitting..." : "Join"}
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            You’re added to the waitlist!
          </p>
        )}
      </form>
    </div>
  );
}
