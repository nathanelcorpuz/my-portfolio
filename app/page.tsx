import HeadingText from "@/components/HeadingText";
import StandardText from "@/components/StandardText";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-[20px]">
        <section className="flex flex-col gap-[5px]">
          <StandardText>Nathanel Corpuz</StandardText>
          <HeadingText>Full stack developer</HeadingText>
          <StandardText variant={1}>
            Passionate in solving business problems through high quality
            JavaScript code.
          </StandardText>
        </section>
        <section>
          <p className="italic text-green-500">
            Currently looking for a full-time role
          </p>
        </section>
        <section>
          <button>Projects</button>
        </section>
      </section>
    </div>
  );
}
