import { venuesData } from "@/data/VenueData";
import VenueItem from "./VenueItem";

const VenueSection = () => (
  <section className="flex flex-col items-center">
    <ul className="w-11/12 sm:w-3/4 max-w-[1248px] flex flex-col gap-4 lg:gap-8 my-8">
      {venuesData.map((item) => (
        <VenueItem venueData={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default VenueSection;
