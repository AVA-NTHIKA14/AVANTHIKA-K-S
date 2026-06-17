import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import AISection from "./components/AISection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <WorkSection />
      <AISection />
      <ContactSection />
    </main>
  );
}
