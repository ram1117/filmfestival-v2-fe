import CustomDivider from "@/atoms/CustomDivider";
import ProgramItem from "./ProgramItem";
import { programSectionData } from "@/data/HomePageData";

const ProgramSection = () => (
  <section className="min-h-[50vh] bg-gray-dark bg-cross-bg text-text-primary flex flex-col items-center py-8">
    <h2 className="text-lg lg:text-2xl font-roboto-condensed my-4">
      Main Programs
    </h2>
    <CustomDivider className="w-20 my-4" />
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-11/12 my-4">
      {programSectionData.map((item) => (
        <ProgramItem program={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default ProgramSection;
