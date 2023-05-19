import BulletedListWrapper from "@/components/BulletedListWrapper";
import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import BulletedListItem from "@/components/BulletedListItem";
import SectionWrapper from "@/components/SectionWrapper";

const list = [
	"Loves to read existing code, figure out how to fix bugs on it, and build additional features on top while following best practices and company code directives",
	"Does everything with heart, even the most repetitive tasks and menial tasks",
	"Sees challenges as means for self-improvement",
	"Unafraid to..",
];

export default function HowIWork() {
	return (
		<SectionWrapper>
			<HeadingText>How I Work</HeadingText>
			<BulletedListWrapper>
				{list.map((item) => (
					<BulletedListItem key={item}>{item}</BulletedListItem>
				))}
			</BulletedListWrapper>
			<div>
				<Button variant={2}>Read more</Button>
			</div>
		</SectionWrapper>
	);
}
