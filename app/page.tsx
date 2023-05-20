import Hero from "./_components/Hero";
import ProjectsOverview from "./_components/ProjectsOverview";
import SkillsOverview from "./_components/SkillsOverview";
import Technologies from "./_components/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <SkillsOverview />
      <Technologies />
      <ProjectsOverview />
    </div>
  );
}
