import CustomDivider from "@/atoms/CustomDivider";
import JuryItem from "./JuryItem";
import { juryData } from "@/data/HomePageData";

const JurySection = () => (
  <section className="min-h-max lg:min-h-[80vh] flex flex-col items-center p-4">
    <h2 className="text-lg lg:text-2xl font-roboto-condensed my-4">
      The Jury Members
    </h2>
    <CustomDivider className="w-20 my-4" />
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 max-w-[1280px]">
      {juryData.map((item) => (
        <JuryItem juryItemData={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default JurySection;
