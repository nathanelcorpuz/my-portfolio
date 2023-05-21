import PageContentWrapper from "@/components/PageContentWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { about } from "@/lib/constants";

export default function About() {
  return (
    <PageContentWrapper>
      <SectionWrapper>
        <StandardText>{about.description}</StandardText>
        {about.items.map((item) => (
          <div key={item.heading} className=" flex flex-col gap-[10px]">
            <div className="font-bold">
              <StandardText variant={1}>{item.heading}</StandardText>
            </div>
            <StandardText>{item.description}</StandardText>
          </div>
        ))}
        <StandardText>{about.endDescription}</StandardText>
      </SectionWrapper>
    </PageContentWrapper>
  );
}
