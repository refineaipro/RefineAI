"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const finalizeAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        router.replace("/dashboard");
      } else {
        router.replace("/login");
      }
    };

    finalizeAuth();
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Signing you in...
    </div>
  );
}
