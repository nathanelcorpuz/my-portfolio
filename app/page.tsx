import Hero from "./_components/Hero";
import SkillsOverview from "./_components/SkillsOverview";

export default function Home() {
	return (
		<div className="flex flex-col gap-[100px]">
			<Hero />
			<SkillsOverview />
		</div>
	);
}
