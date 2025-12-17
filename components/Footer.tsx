"use client";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Footer content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-10 py-20 relative z-10">
        <div>
          <h2 className="text-3xl font-bold">Refine AI</h2>
          <p className="text-gray-400 mt-4">
            Richmond<br />
            Virginia, United States
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 mb-3">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Platform</li>
            <li>AI Matching</li>
            <li>Applications</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-500 mb-3">For Candidates</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Job Search</li>
            <li>Interview Tools</li>
            <li>Resume Builder</li>
            <li>Referrals</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-500 mb-3">Support</h3>
          <p className="text-gray-300">support@refineai.pro</p>
        </div>
      </div>

      {/* Brand Outline */}
      <div className="flex justify-center leading-none pb-12">
        <h1 className="brand-outline select-none">
          RefineAI
        </h1>
      </div>

    </footer>
  );
}
