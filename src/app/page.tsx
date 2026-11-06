import { Hero } from "@/components/marketing/Hero";
import { JourneyFlow } from "@/components/marketing/JourneyFlow";
import { CurriculumPreview } from "@/components/marketing/CurriculumPreview";
import { PopularTutorials } from "@/components/marketing/PopularTutorials";
import { FeaturedProjects } from "@/components/marketing/FeaturedProjects";
import { AITeacherSection } from "@/components/marketing/AITeacherSection";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FaqSection } from "@/components/marketing/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <JourneyFlow />
      <CurriculumPreview />
      <PopularTutorials />
      <FeaturedProjects />
      <AITeacherSection />
      <Testimonials />
      <FaqSection />
    </div>
  );
}

