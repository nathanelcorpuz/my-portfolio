import HeadingText from "@/components/HeadingText";
import PageContentWrapper from "@/components/PageContentWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { about } from "@/lib/constants";

export default function About() {
  return (
    <PageContentWrapper>
      <SectionWrapper>
        <StandardText variant={1}>{about.description}</StandardText>
      </SectionWrapper>
      {about.items.map((item) => (
        <SectionWrapper key={item.heading}>
          <HeadingText>{item.heading}</HeadingText>
          <StandardText>{item.description}</StandardText>
        </SectionWrapper>
      ))}
      <SectionWrapper>
        <StandardText variant={1}>{about.endDescription}</StandardText>
      </SectionWrapper>
    </PageContentWrapper>
  );
}
