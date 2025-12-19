"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="h-screen overflow-hidden bg-black bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_60%)] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Brand Reassurance */}
        <div className="hidden md:block">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            RefineAI
          </h1>

          <p className="mt-6 text-xl text-gray-200 leading-relaxed">
            Built for people who are tired of guessing.
          </p>

          <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
            Log in to refine your resume, messaging, and job search
            with clarity and intent.
          </p>
        </div>

        {/* RIGHT: Login Card */}
        <div className="w-full max-w-md mx-auto md:-translate-y-6">
          <div className="bg-neutral-900 border border-white/10 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-6">
            
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Log in to your RefineAI account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-black border border-white/10 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-lg bg-black border border-white/10 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-medium text-black hover:brightness-110 transition shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              >
                Log in
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-gray-500">or</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social Placeholder Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                disabled
                className="w-full rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
              >
                Continue with Google
              </button>

              <button
                type="button"
                disabled
                className="w-full rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
              >
                Continue with LinkedIn
              </button>
            </div>

            {/* Footer */}
            <p className="mt-6 text-sm text-gray-400 text-center">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-white hover:underline"
              >
                Get started
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
