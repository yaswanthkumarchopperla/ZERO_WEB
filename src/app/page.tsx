import React from "react";
import { Hero } from "@/components/home/Hero";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { ExampleProject } from "@/components/home/ExampleProject";
import { FaqSection } from "@/components/home/FaqSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <JourneyPreview />
      <FeatureGrid />
      <ExampleProject />
      <FaqSection />
      <CTASection />
    </div>
  );
}

