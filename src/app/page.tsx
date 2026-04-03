import { AudienceSection } from "@/components/sections/audience-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { WhySection } from "@/components/sections/why-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <WhySection />
        <PillarsSection />
        <HowItWorksSection />
        <AudienceSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </div>
  );
}
