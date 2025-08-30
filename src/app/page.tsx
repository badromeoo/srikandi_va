// src/app/page.tsx (Perbaiki ini)
import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ProgramsSection } from "@/components/ProgramsSection";



export default function HomePage() {
  return (
    <>
    <div className="bg-[#EDF2F7]  min-h-screen">
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
    </>
    
  );
} 