import BulletedListWrapper from "@/components/BulletedListWrapper";
import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import BulletedListItem from "@/components/BulletedListItem";
import SectionWrapper from "@/components/SectionWrapper";
import { skillsOverview as skills } from "@/lib/constants";

function SkillWrapper({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col gap-[30px]">{children}</div>;
}

export default function SkillsOverview() {
	return (
		<SectionWrapper gap="70px">
			{skills.map((skill) => (
				<SkillWrapper key={skill.title}>
					<HeadingText>{skill.title}</HeadingText>
					<BulletedListWrapper>
						{skill.items.map((item) => (
							<BulletedListItem key={item}>{item}</BulletedListItem>
						))}
					</BulletedListWrapper>
					<div>
						<Button variant={2}>Read more</Button>
					</div>
				</SkillWrapper>
			))}
		</SectionWrapper>
	);
}
