// src/app/page.tsx (Perbaiki ini)
import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
export default function HomePage() {
  return (
    <>
    <Navbar />
    <div className="bg-[#EDF2F7] ">
    <HeroSection />
    </div>
    <div>
      <AboutUs />
    </div>
    <div>
      <AdvantagesSection />
    </div>
    <div className="bg-[#EDF2F7] ">
      <ProgramsSection />
    </div>
    <div className="bg-[#EDF2F7] ">
      <HowItWorksSection />
    </div>
    <div>
      <Footer />
    </div>
    </>
    
  );
} 