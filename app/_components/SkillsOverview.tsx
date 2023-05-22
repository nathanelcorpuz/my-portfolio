import BulletedListWrapper from "@/components/BulletedListWrapper";
import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import BulletedListItem from "@/components/BulletedListItem";
import SectionWrapper from "@/components/SectionWrapper";
import { skillsOverview as skills } from "@/lib/constants";
import Link from "next/link";

function SkillWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-[25px]">{children}</div>;
}

export default function SkillsOverview() {
  return (
    <SectionWrapper gapSize="lg">
      {skills.map((skill) => (
        <SkillWrapper key={skill.title}>
          <HeadingText>{skill.title}</HeadingText>
          <BulletedListWrapper>
            {skill.items.map((item) => (
              <BulletedListItem key={item}>{item}</BulletedListItem>
            ))}
          </BulletedListWrapper>
          <div>
            <Link href={"skills#" + skill.title}>
              <Button variant={2}>Read more</Button>
            </Link>
          </div>
        </SkillWrapper>
      ))}
    </SectionWrapper>
  );
}
