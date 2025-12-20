"use client";
import { useState } from "react";

type Result = {
  summary: string;
  intent: string;
  experience: string;
  skills: string[];
  reality: string;
  error?: string;
  loading?: boolean;
};

export default function JDSimplifier() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const simplifyJD = async () => {
    setResult({ loading: true } as Result);

    try {
      const res = await fetch("/api/jd_simplifier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jd }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Failed to analyze JD." } as Result);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-medium mb-4">JD Simplifier</h1>
        <p className="text-white/60 mb-10">
          Paste a job description. We’ll translate it into plain English.
        </p>

        <textarea
          className="w-full h-56 rounded-3xl bg-white/5 border border-white/10 p-6 text-sm focus:outline-none"
          placeholder="Paste job description here…"
          value={jd}
          onChange={(e) => setJd(e.target.value)}
        />

        <button
          onClick={simplifyJD}
          disabled={!jd.trim() || result?.loading}
          className="mt-6 rounded-full px-8 py-3 bg-white text-black text-sm disabled:opacity-50"
        >
          {result?.loading ? "Analyzing…" : "Simplify JD"}
        </button>

        {result?.error && (
          <div className="mt-12 text-sm text-red-400">{result.error}</div>
        )}

        {result && !result.loading && !result.error && (
          <div className="mt-12 space-y-6">
            <Block title="Summary">{result.summary}</Block>
            <Block title="What they actually want">{result.intent}</Block>
            <Block title="Experience">{result.experience}</Block>
            <Block title="Skills">
              <ul className="list-disc list-inside space-y-1">
                {result.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Block>
            <Block title="Reality check">{result.reality}</Block>
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
