import ProgramItem from "./ProgramItem";
import SectionHeader from "@/atoms/SectionHeader";
import { programSectionData } from "@/data/HomePageData";

const ProgramSection = () => (
  <section className="min-h-[50vh] bg-gray-dark bg-cross-bg text-text-primary flex flex-col items-center py-8">
    <SectionHeader>Main Programs</SectionHeader>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-11/12 my-4 md:w-4/5 max-w-[1280px]">
      {programSectionData.map((item) => (
        <ProgramItem program={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default ProgramSection;
