import { HeroSection } from "./components/HeroSection";
import { ValuePropositionSection } from "./components/ValuePropositionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ActivationMissionSection } from "./components/ActivationMissionSection";
import { FutureVisionSection } from "./components/FutureVisionSection";
import { FAQSection } from "./components/FAQSection";
import { FooterSection } from "./components/FooterSection";

import './styles/globals.css';
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ValuePropositionSection />
      <HowItWorksSection />
      <ActivationMissionSection />
      <FutureVisionSection />
      <FAQSection />
      <FooterSection />
    
    </div>
  );
}