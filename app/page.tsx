import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import TrustedBy from "@/components/TrustedBy";
import PricingSection from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Hero />
      <ScrollStory />
      <PricingSection />
      <TrustedBy />
      <Testimonials />
    </main>
  );
}
