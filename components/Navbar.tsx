"use client";

export default function Navbar() {
  return (
    <header className="absolute top-8 w-full flex justify-center z-20">
      <div className="flex items-center gap-10 px-10 py-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">

        {/* Logo */}
        <span className="text-xl font-semibold">Refine AI</span>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-white/70">
          <a>Platform</a>
          <a>Jobs</a>
          <a>Resources</a>
          <a>For Employers</a>
        </nav>

        {/* CTA Button */}
        <button className="ml-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition">
          Login
        </button>
      </div>
    </header>
  );
}