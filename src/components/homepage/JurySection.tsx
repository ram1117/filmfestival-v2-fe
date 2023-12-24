import JuryItem from "./JuryItem";
import SectionHeader from "@/atoms/SectionHeader";
import { juryData } from "@/data/HomePageData";

const JurySection = () => (
  <section className="min-h-max lg:min-h-[80vh] flex flex-col items-center p-4 text-text-secondary">
    <SectionHeader color="text-text-secondary">The Jury Members</SectionHeader>
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 max-w-[1280px]">
      {juryData.map((item, index) => (
        <JuryItem juryItemData={item} key={item.id} oddItem={index % 2 === 1} />
      ))}
    </ul>
  </section>
);

export default JurySection;
