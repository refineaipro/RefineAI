"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <main className="h-screen overflow-hidden bg-black bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_60%)] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div className="hidden md:block">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            RefineAI
          </h1>
          <p className="mt-6 text-xl text-gray-200 leading-relaxed">
            Stop guessing. Start refining.
          </p>
          <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
            Create your account to refine resumes, messaging,
            and job search with clarity and intent.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-md mx-auto md:-translate-y-6">
          <div className="bg-white border border-black/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6">
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-black">
                Create account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign up for your RefineAI account
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-gray-50 border border-gray-300 px-4 py-2 text-black placeholder:text-gray-500 placeholder:font-semibold focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-lg bg-gray-50 border border-gray-300 px-4 py-2 text-black placeholder:text-gray-500 placeholder:font-semibold focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {error && (
                <p className="text-sm font-semibold text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-sm font-semibold text-green-600">
                  Account created. Check your email to verify.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black hover:brightness-110 transition disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </form>

            <p className="mt-6 text-sm font-semibold text-gray-700 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-black font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
