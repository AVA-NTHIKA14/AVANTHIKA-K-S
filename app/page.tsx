import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkflowSection from "./components/WorkflowSection";
import AISection from "./components/AISection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black relative transition-colors duration-305">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <WorkflowSection />
      <AISection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
