export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Letter Card */}
      <div className="w-full max-w-3xl bg-white text-black rounded-2xl shadow-xl px-10 py-12">

        {/* Letter Content */}
        <h1 className="text-3xl font-semibold">
          Dear Fellow Job Seeker,
        </h1>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Refine AI began the same way many job searches do, with uncertainty,
          countless applications, and more questions than answers.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          We have been through the process ourselves. The resume edits, the
          tracking spreadsheets, the guessing game of what actually works.
          Over time, we learned what moves the needle and what simply wastes
          energy.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Refine AI exists to help you focus on the right things while we handle
          the rest. We use AI where it truly helps, and human judgment where it
          matters most.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          No shortcuts. No false promises. Just a clearer, more intentional way
          to move forward.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://calendly.com/hi-refineai/30min"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
          >
            Let’s talk
          </a>

          <p className="mt-3 text-sm text-gray-500">
            No pressure. Just a conversation.
          </p>
        </div>

      </div>
    </div>
  );
}
