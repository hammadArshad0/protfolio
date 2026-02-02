import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection/>
      
      {/* Divider */}
      <div className="border-t border-[var(--color-border)]"></div>
      
      <AboutSection/>
      
      {/* Divider */}
      <div className="border-t border-[var(--color-border)]"></div>
      
      <SkillsSection/>
      
      {/* Divider */}
      <div className="border-t border-[var(--color-border)]"></div>
      
      <ProjectsSection/>
      
      {/* Divider */}
      <div className="border-t border-[var(--color-border)]"></div>
      
      <ContactSection/>
    </div>
  )
}
