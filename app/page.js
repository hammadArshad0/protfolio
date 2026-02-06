import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";



export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="section-fade-in">
        <HeroSection/>
      </div>

      {/* Animated Divider */}
      <div className="border-t border-[var(--color-border)] section-slide-left animate-delay-100"></div>

      <div className="section-slide-right animate-delay-200">
        <AboutSection/>
      </div>

      {/* Animated Divider */}
      <div className="border-t border-[var(--color-border)] section-slide-left animate-delay-300"></div>

      <div className="section-scale-in animate-delay-400">
        <SkillsSection/>
      </div>

      {/* Animated Divider */}
      <div className="border-t border-[var(--color-border)] section-slide-right animate-delay-500"></div>

      <div className="section-fade-in animate-delay-100">
        <ProjectsSection/>
      </div>

      {/* Animated Divider */}
      <div className="border-t border-[var(--color-border)] section-slide-left animate-delay-200"></div>

      <div className="section-scale-in animate-delay-300">
        <ContactSection/>
      </div>
    </div>
  )
}
