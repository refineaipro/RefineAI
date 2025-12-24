"use client";

import { useState } from "react";

type JDResult = {
  summary?: string;
  intent?: string;
  experience?: string;
  skills?: string[];
  reality?: string;
  error?: string;
};

export default function JDSimplifierPage() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<JDResult | null>(null);
  const [loading, setLoading] = useState(false);

  const simplifyJD = async () => {
    if (!jd.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/jd_simplifier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jd }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-3xl font-medium mb-4">JD Simplifier</h1>
        <p className="text-white/60 mb-10">
          Paste a job description and get a simple, honest breakdown of what the role really means.
        </p>

        {/* Input */}
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste job description here…"
          className="w-full h-56 rounded-3xl bg-white/5 border border-white/10 p-6 text-sm focus:outline-none"
        />

        {/* Action */}
        <button
          onClick={simplifyJD}
          disabled={!jd.trim() || loading}
          className="mt-6 rounded-full px-8 py-3 bg-white text-black text-sm disabled:opacity-50"
        >
          {loading ? "Analyzing…" : "Simplify JD"}
        </button>

        {/* Error */}
        {result?.error && (
          <div className="mt-10 text-sm text-red-400">
            {result.error}
          </div>
        )}

        {/* Output */}
        {result && !result.error && (
          <div className="mt-12 space-y-6">

            <Block title="Summary">
              {result.summary || "This role is difficult to clearly summarize from the JD."}
            </Block>

            <Block title="What they actually want">
              {result.intent || "They want someone reliable who can handle responsibilities independently."}
            </Block>

            <Block title="Experience">
              {result.experience || "Experience level is not clearly specified."}
            </Block>

            <Block title="Skills">
              {Array.isArray(result.skills) && result.skills.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {result.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-white/50">
                  No specific skills are clearly emphasized.
                </span>
              )}
            </Block>

            <Block title="Reality check">
              {result.reality || "Some expectations may only become clear during interviews or after joining."}
            </Block>

          </div>
        )}
      </div>
    </main>
  );
}

function Block({ title, children }: { title: string; children: any }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="text-white/70 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
