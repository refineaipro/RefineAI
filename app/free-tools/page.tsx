import Link from "next/link";

export default function FreeToolsPage() {
  return (
    <section className="min-h-screen bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tools Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {/* LinkedIn Note Generator Card */}
          <Link
            href="/free-tools/linkedin-note-writer"
            className="group rounded-3xl border border-white/10 
            bg-white/5 p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-medium">
              LinkedIn Cold Message Generator
            </h3>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Write thoughtful, human LinkedIn messages that
              don’t feel spammy or automated.
            </p>

            <p className="mt-6 text-sm text-cyan-400 group-hover:underline">
              Try tool →
            </p>
          </Link>

          {/* Placeholder for future tools */}
          <div className="rounded-3xl border border-white/10 
          bg-white/5 p-8 opacity-40">
            <h3 className="text-xl font-medium">
              More tools coming soon
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Resume tools, follow-up generators, and outreach helpers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
