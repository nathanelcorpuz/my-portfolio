import Hero from "./_components/Hero";
import SkillsOverview from "./_components/SkillsOverview";
import Technologies from "./_components/Technologies";

export default function Home() {
	return (
		<div className="flex flex-col gap-[100px]">
			<Hero />
			<SkillsOverview />
			<Technologies />
		</div>
	);
}
