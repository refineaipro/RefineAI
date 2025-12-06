"use client";

export default function PricingSection() {
  return (
    <section className="w-full bg-black py-24 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-garamond text-white">
          Choose a Plan That Fits Your Career Goals
        </h2>

        <p className="text-gray-300 mt-3 font-rainsans text-lg">
          Transparent pricing designed to help you succeed.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* BASIC */}
        <div className="bg-black border border-white/15 rounded-2xl py-12 px-8 text-center hover:bg-white/5 transition">
          <h3 className="text-2xl font-garamond text-white">Basic</h3>

          <p className="text-4xl font-garamond mt-5 text-white">$100</p>
          <p className="text-gray-400 text-sm font-rainsans mt-1">
            One-Time Payment
          </p>

          <ul className="mt-8 space-y-3 text-left font-rainsans text-white">
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              199 Resume Submissions
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              AI Resume Optimization
            </li>

            <li className="flex items-center gap-2 opacity-40">
              <span className="text-red-400 text-xl">✕</span>
              Custom Cover Letters
            </li>

            <li className="flex items-center gap-2 opacity-40">
              <span className="text-red-400 text-xl">✕</span>
              1-on-1 Career Support
            </li>
          </ul>

          <button className="mt-10 bg-white text-black rounded-full py-3 px-10 font-rainsans hover:bg-gray-200 transition">
            Start Now
          </button>
        </div>

        {/* STANDARD */}
        <div className="bg-black border border-white/15 rounded-2xl py-12 px-8 text-center hover:bg-white/5 transition">
          <h3 className="text-2xl font-garamond text-white">Standard</h3>

          <p className="text-4xl font-garamond mt-5 text-white">$250</p>
          <p className="text-gray-400 text-sm font-rainsans mt-1">
            One-Time Payment
          </p>

          <ul className="mt-8 space-y-3 text-left font-rainsans text-white">
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              399 Resume Submissions
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              Custom Cover Letters
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              AI Resume Optimization
            </li>

            <li className="flex items-center gap-2 opacity-40">
              <span className="text-red-400 text-xl">✕</span>
              Dedicated Recruiter
            </li>
          </ul>

          <button className="mt-10 bg-white text-black rounded-full py-3 px-10 font-rainsans hover:bg-gray-200 transition">
            Start Now
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-black border border-white/15 rounded-2xl py-12 px-8 text-center hover:bg-white/5 transition">
          <h3 className="text-2xl font-garamond text-white">
            Universities & Businesses
          </h3>

          <p className="text-4xl font-garamond mt-5 text-white">Custom</p>
          <p className="text-gray-400 text-sm font-rainsans mt-1">
            Open for Discussion
          </p>

          <ul className="mt-8 space-y-3 text-left font-rainsans text-white">
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              Bulk Resume Submissions
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              Custom ATS Pipelines
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              Dedicated Career Support Team
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              Employer Dashboards
            </li>
          </ul>

          <button className="mt-10 bg-white text-black rounded-full py-3 px-10 font-rainsans hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
