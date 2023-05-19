import Hero from "./_components/Hero";
import HowIWork from "./_components/HowIWork";

export default function Home() {
	return (
		<div className="flex flex-col gap-[100px]">
			<Hero />
			<HowIWork />
		</div>
	);
}
