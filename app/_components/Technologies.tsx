import BulletedListItem from "@/components/BulletedListItem";
import BulletedListWrapper from "@/components/BulletedListWrapper";
import HeadingText from "@/components/HeadingText";
import SectionWrapper from "@/components/SectionWrapper";
import { technologies } from "@/lib/constants";

export default function Technologies() {
	return (
		<SectionWrapper>
			<HeadingText>Technologies</HeadingText>
			<BulletedListWrapper>
				{technologies.map((tech) => (
					<BulletedListItem key={tech} emoji="⚙️">
						{tech}
					</BulletedListItem>
				))}
			</BulletedListWrapper>
		</SectionWrapper>
	);
}
