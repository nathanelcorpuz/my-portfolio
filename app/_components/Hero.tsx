import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import LinkText from "@/components/LinkText";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";

export default function Hero() {
	return (
		<SectionWrapper>
			<div className="flex flex-col gap-[5px]">
				<StandardText>Nathanel Corpuz</StandardText>
				<HeadingText>Full stack developer</HeadingText>
				<StandardText variant={1}>
					Making the web a better place, one line of code at a time
				</StandardText>
			</div>
			<div>
				<p className="text-green-500">Currently looking for a full-time role</p>
			</div>
			<div>
				<Button>Projects</Button>
			</div>
			<div className="flex gap-[30px]">
				<LinkText href="skills">Skills</LinkText>
				<LinkText href="contact">Contact</LinkText>
			</div>
		</SectionWrapper>
	);
}
