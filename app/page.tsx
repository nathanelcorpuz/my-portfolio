import PageContentWrapper from "@/components/PageContentWrapper";
import AboutOverview from "./_components/AboutOverview";
import Hero from "./_components/Hero";
import ProjectsOverview from "./_components/ProjectsOverview";
import SkillsOverview from "./_components/SkillsOverview";
import Technologies from "./_components/Technologies";

export default function Home() {
  return (
    <PageContentWrapper>
      <Hero />
      <SkillsOverview />
      <Technologies />
      <ProjectsOverview />
      <AboutOverview />
    </PageContentWrapper>
  );
}
