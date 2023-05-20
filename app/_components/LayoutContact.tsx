import HeadingText from "@/components/HeadingText";
import LinkText from "@/components/LinkText";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { contact, socials } from "@/lib/constants";

export default function LayoutContact() {
  return (
    <SectionWrapper>
      <HeadingText>Contact</HeadingText>
      {contact.map((item) => (
        <StandardText key={item}>{item}</StandardText>
      ))}
      <div className="flex gap-[20px]">
        {socials.map((item) => (
          <LinkText
            key={item.href}
            isNativeAnchor
            href={item.href}
            anchorProps={{ target: "_blank" }}
          >
            {item.text}
          </LinkText>
        ))}
      </div>
    </SectionWrapper>
  );
}
