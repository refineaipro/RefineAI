import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProofSection from "@/components/ProofSection";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Hero />
      <ProofSection />
      <TrustedBy />
    </main>
  );
}
