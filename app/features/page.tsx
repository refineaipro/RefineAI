export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Features built for focused job search
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Every feature in Refine AI exists to remove noise,
          reduce wasted effort, and help you apply with clarity.
        </p>
      </section>

      {/* Placeholder Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Feature Placeholder */}
          {[
            "Resume optimization",
            "ATS alignment insights",
            "Intent-driven applications",
            "Cold outreach guidance",
            "Application tracking",
            "Decision clarity"
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-lg font-medium">
                {feature}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Designed to help you focus on what actually moves
                your job search forward.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Note */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <p className="text-gray-500">
          We are building this deliberately.
          Each feature earns its place.
        </p>
      </section>

    </div>
  );
}
