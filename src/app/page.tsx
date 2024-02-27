import CoreCompetencies from "@/components/CoreCompetencies";
import HeroSection from "@/components/HeroSection";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HeroSection />
    <Projects />
    <CoreCompetencies />
  </main>
  );
}
