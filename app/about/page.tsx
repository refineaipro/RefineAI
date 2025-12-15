export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Building the future of job search with AI
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Refine AI exists to remove friction, confusion, and unfairness from the hiring process by putting powerful AI tools directly in the hands of job seekers.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          The job search process today is broken. Candidates spend countless hours tailoring resumes, tracking applications, and guessing what recruiters want.
          <br /><br />
          Our mission is to make job search intelligent, transparent, and efficient using AI that works for people, not against them.
        </p>
      </section>

      {/* What We’re Building */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">What We’re Building</h2>
        <ul className="mt-6 space-y-4 text-gray-400">
          <li>• AI-powered resume optimization tailored to each job</li>
          <li>• ATS compatibility scoring and improvement insights</li>
          <li>• Smart job tracking and application management</li>
          <li>• Personalized recommendations to improve hiring outcomes</li>
        </ul>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Our Values</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium">User-first thinking</h3>
            <p className="mt-2 text-gray-400">
              Every feature is built to solve real problems faced by job seekers.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Clarity over complexity</h3>
            <p className="mt-2 text-gray-400">
              We believe powerful technology should feel simple and intuitive.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Responsible AI</h3>
            <p className="mt-2 text-gray-400">
              Our models are designed to assist decision-making, not replace human judgment.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Continuous improvement</h3>
            <p className="mt-2 text-gray-400">
              We iterate fast, learn from users, and improve relentlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">
          Want to learn more or work with us?
        </h2>
        <p className="mt-4 text-gray-400">
          We are always open to conversations, partnerships, and feedback.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
