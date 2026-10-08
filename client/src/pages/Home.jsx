import usePageTitle from "../utils/usePageTitle";
import Hero from "../components/sections/Hero";
import ValueProposition from "../components/sections/ValueProposition";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ServicesPreview from "../components/sections/ServicesPreview";
import ProcessPreview from "../components/sections/ProcessPreview";
import QualitySection from "../components/sections/QualitySection";
import ConsultationCTA from "../components/sections/ConsultationCTA";

function Home() {
  usePageTitle("DESIGN DEN — Spaces designed around how you live.", {
    description:
      "Thoughtful interiors with factory-direct execution, premium materials, and quality control at every stage.",
  });

  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessPreview />
        <QualitySection />
        <ConsultationCTA />
    </>
  );
}

export default Home;
