import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import FounderNote from "@/components/FounderNote";
import TrustedBy from "@/components/TrustedBy";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Hero />
      <ProofSection />
      <FounderNote />
      <TrustedBy />
      <HomeCTA />
    </main>
  );
}
