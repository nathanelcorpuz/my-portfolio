import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import LinkText from "@/components/LinkText";
import StandardText from "@/components/StandardText";

export default function Home() {
	return (
		<div>
			<section className="flex flex-col gap-[30px]">
				<section className="flex flex-col gap-[5px]">
					<StandardText>Nathanel Corpuz</StandardText>
					<HeadingText>Full stack developer</HeadingText>
					<StandardText variant={1}>
						Making the web a better place, one line of code at a time
					</StandardText>
				</section>
				<section>
					<p className="italic text-green-500">
						Currently looking for a full-time role
					</p>
				</section>
				<section>
					<Button>Projects</Button>
				</section>
				<section className="flex gap-[30px]">
					<LinkText href="skills">Skills</LinkText>
					<LinkText href="contact">Contact</LinkText>
				</section>
			</section>
		</div>
	);
}
