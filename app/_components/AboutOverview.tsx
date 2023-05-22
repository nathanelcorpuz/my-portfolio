import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { aboutOverview } from "@/lib/constants";
import Link from "next/link";

export default function AboutOverview() {
  return (
    <SectionWrapper>
      <HeadingText>About</HeadingText>
      {aboutOverview.map((item) => (
        <StandardText key={item}>{item}</StandardText>
      ))}
      <div>
        <Link href="about">
          <Button variant={2}>Read more</Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
