import { partnersData } from "@/data/HomePageData";
import SectionHeader from "@/atoms/SectionHeader";
import PartnerItem from "./PartnerItem";

const PartnersSection = () => (
  <section className="lg:min-h-[30vh] min-h-max py-8 bg-gray-dark text-text-primary flex flex-col items-center lg:justify-start">
    <SectionHeader>Our Partners</SectionHeader>
    <ul className="my-4 flex flex flex-wrap items-center justify-around w-11/12 w-4/5 max-w-[1248px] gap-2">
      {partnersData.map((item) => (
        <PartnerItem partnerData={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default PartnersSection;
