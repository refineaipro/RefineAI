export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Built for every kind of job seeker
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Whether you are starting out, switching careers, or scaling your job search,
          Refine AI adapts to your goals.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Students */}
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur">
            <h3 className="text-xl font-medium">Students & New Graduates</h3>
            <p className="mt-4 text-gray-400">
              Break into internships and entry-level roles with resumes that stand out
              even without years of experience.
            </p>
            <ul className="mt-6 space-y-2 text-gray-400">
              <li>• Resume guidance for early careers</li>
              <li>• Internship and fresher job matching</li>
              <li>• ATS-friendly formatting</li>
            </ul>
          </div>

          {/* Professionals */}
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur">
            <h3 className="text-xl font-medium">Working Professionals</h3>
            <p className="mt-4 text-gray-400">
              Optimize resumes, track applications, and manage job searches at scale
              without manual effort.
            </p>
            <ul className="mt-6 space-y-2 text-gray-400">
              <li>• Role-specific resume tailoring</li>
              <li>• Smart application tracking</li>
              <li>• ATS score insights</li>
            </ul>
          </div>

          {/* Career Switchers */}
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur">
            <h3 className="text-xl font-medium">Career Switchers</h3>
            <p className="mt-4 text-gray-400">
              Reposition your experience to match new industries and roles with clarity
              and confidence.
            </p>
            <ul className="mt-6 space-y-2 text-gray-400">
              <li>• Skill translation across domains</li>
              <li>• Resume restructuring suggestions</li>
              <li>• Targeted role recommendations</li>
            </ul>
          </div>

          {/* International */}
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur">
            <h3 className="text-xl font-medium">International Job Seekers</h3>
            <p className="mt-4 text-gray-400">
              Navigate regional hiring systems, ATS filters, and global job markets
              more effectively.
            </p>
            <ul className="mt-6 space-y-2 text-gray-400">
              <li>• Region-aware resume optimization</li>
              <li>• ATS compatibility guidance</li>
              <li>• Structured application tracking</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Shared Value */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">
          One platform. Multiple outcomes.
        </h2>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
          Refine AI combines resume intelligence, job tracking, and personalized insights
          into one seamless experience designed to improve hiring outcomes.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to refine your job search?
        </h2>
        <p className="mt-4 text-gray-400">
          Start using AI that works for you.
        </p>

        <div className="mt-8">
          <a
            href="/get-started"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </section>

    </div>
  );
}
