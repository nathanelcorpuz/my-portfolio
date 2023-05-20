import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";

export default function Footer() {
  return (
    <footer>
      <SectionWrapper>
        <StandardText>Made with 💚 by Nathanel Corpuz</StandardText>
        <StandardText>
          This project is{" "}
          <a
            href="https://github.com/nathanelcorpuz/my-portfolio"
            target="_blank"
            referrerPolicy="no-referrer"
            className="p-2 inline-block bg-gray-950 rounded-lg text-xs underline-offset-4 italic font-bold underline"
          >
            open source!
          </a>
        </StandardText>
      </SectionWrapper>
    </footer>
  );
}
