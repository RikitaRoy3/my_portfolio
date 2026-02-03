import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-black/10">
      <ScrollyCanvas numFrames={120}>
        <Overlay />
      </ScrollyCanvas>
      <ContactSection />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
    </main>
  );
}
