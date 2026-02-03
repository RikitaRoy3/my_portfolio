import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-black/10">
      <ScrollyCanvas numFrames={120}>
        <Overlay />
      </ScrollyCanvas>
      <ContactSection />
      <Projects />
    </main>
  );
}
