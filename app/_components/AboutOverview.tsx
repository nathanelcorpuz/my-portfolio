import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { aboutOverview } from "@/lib/constants";

export default function AboutOverview() {
  return (
    <SectionWrapper>
      <HeadingText>About</HeadingText>
      {aboutOverview.map((item) => (
        <StandardText key={item}>{item}</StandardText>
      ))}
      <div>
        <Button variant={2}>Read more</Button>
      </div>
    </SectionWrapper>
  );
}
