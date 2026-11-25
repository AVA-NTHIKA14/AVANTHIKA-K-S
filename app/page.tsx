import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JourneyGame from "./components/JourneyGame";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import DesignWorkSection from "./components/DesignWorkSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black relative transition-colors duration-305">
      <Header />
      <HeroSection />
      <JourneyGame />
      <AboutSection />
      <WorkSection />
      <DesignWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
