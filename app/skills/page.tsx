import BulletedListItem from "@/components/BulletedListItem";
import BulletedListWrapper from "@/components/BulletedListWrapper";
import HeadingText from "@/components/HeadingText";
import PageContentWrapper from "@/components/PageContentWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <PageContentWrapper props={{ id: "#home" }}>
      {skills.map((skill) => (
        <SectionWrapper key={skill.title} props={{ id: skill.title }}>
          <HeadingText>{skill.title}</HeadingText>
          <BulletedListWrapper>
            {skill.items.map((item) => (
              <BulletedListItem key={item}>{item}</BulletedListItem>
            ))}
          </BulletedListWrapper>
        </SectionWrapper>
      ))}
    </PageContentWrapper>
  );
}
