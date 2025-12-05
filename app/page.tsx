import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Hero />
      <ScrollStory />
    </main>
  );
}
