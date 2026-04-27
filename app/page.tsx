import ShaderShowcase from "@/components/ui/hero";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import AgentArchitectureSection from "@/components/ui/agent-architecture-section";
import FeaturesScrollSection from "@/components/ui/features-scroll";
import { BentoPricingSection } from "@/components/ui/bento-pricing";
import { StickyFooter } from "@/components/ui/sticky-footer";

export default function Home() {
  return (
    <div className="w-full">
      <ShaderShowcase />
      <div id="features"><FeaturesScrollSection /></div>
      <div id="architecture"><AgentArchitectureSection /></div>
      <div id="integrations"><MultiOrbitSemiCircle /></div>
      <div id="pricing"><BentoPricingSection /></div>
      <StickyFooter />
    </div>
  );
}
