import CoreCompetencies from "@/components/CoreCompetencies";
import HeroSection from "@/components/HeroSection";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HeroSection />
    <Projects />
    <CoreCompetencies />
    <TracingBeam className="px-6">
    <Skills />
    </TracingBeam>
  </main>
  );
}
