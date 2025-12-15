export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Choose a Plan That Fits Your Career Goals
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Transparent pricing designed to help you succeed.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Basic */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-10 pb-12 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10">
            <h3 className="text-xl font-medium text-center">Basic</h3>

            <p className="text-center mt-6 text-4xl font-semibold">$100</p>
            <p className="text-center text-gray-400 mt-1">One-Time Payment</p>

            <ul className="mt-10 space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                199 Resume Submissions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                AI Resume Optimization
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <span className="text-red-400">✕</span>
                Custom Cover Letters
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <span className="text-red-400">✕</span>
                1-on-1 Career Support
              </li>
            </ul>

            <button className="mt-auto mt-12 bg-white text-black rounded-full py-3 font-medium hover:opacity-90 transition">
              Start Now
            </button>
          </div>

          {/* Standard (Most Popular) */}
          <div className="relative rounded-3xl border border-cyan-400/40 bg-white/10 backdrop-blur p-10 pb-12 flex flex-col scale-[1.03] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/15">

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold">
                Most Popular
              </span>
            </div>

            <h3 className="text-xl font-medium text-center mt-4">Standard</h3>

            <p className="text-center mt-6 text-4xl font-semibold">$250</p>
            <p className="text-center text-gray-400 mt-1">One-Time Payment</p>

            <ul className="mt-10 space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                399 Resume Submissions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                Custom Cover Letters
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                AI Resume Optimization
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <span className="text-red-400">✕</span>
                Dedicated Recruiter
              </li>
            </ul>

            <button className="mt-auto mt-12 bg-white text-black rounded-full py-3 font-medium hover:opacity-90 transition">
              Start Now
            </button>
          </div>

          {/* Universities & Businesses */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-10 pb-12 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10">
            <h3 className="text-xl font-medium text-center">
              Universities & Businesses
            </h3>

            <p className="text-center mt-6 text-4xl font-semibold">Custom</p>
            <p className="text-center text-gray-400 mt-1">Open for Discussion</p>

            <ul className="mt-10 space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                Bulk Resume Submissions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                Custom ATS Pipelines
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                Dedicated Career Support Team
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                Employer Dashboards
              </li>
            </ul>

            <button className="mt-auto mt-12 bg-white text-black rounded-full py-3 font-medium hover:opacity-90 transition">
              Contact Us
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
