import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import LinkText from "@/components/LinkText";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { projects } from "@/lib/constants";
import Link from "next/link";

export default function ProjectsOverview() {
  return (
    <SectionWrapper gapSize="md">
      <HeadingText>Projects</HeadingText>
      {projects.map((project) => (
        <div key={project.slug} className="flex flex-col gap-[15px]">
          <LinkText href={project.slug}>{project.title}</LinkText>
          <StandardText>
            A recreation of League of Legends' home page
          </StandardText>
          <div className="flex gap-[15px] items-center">
            <Link href={`/projects#${project.slug}`}>
              <Button variant={2}>Read more</Button>
            </Link>
            <a
              href={project.links[0].href}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Button variant={2}>🔗 View site</Button>
            </a>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
