import SectionHeader from "@/atoms/SectionHeader";
import Link from "next/link";

const PastEventsSection = () => (
  <section className="min-h-max lg:min-h-[50vh] py-12 flex flex-col bg-bg-color-primary items-center text-text-secondary">
    <SectionHeader color="text-text-secondary">Past Events</SectionHeader>
    <h3 className="text-lg lg:text-xl">
      Our previous two editions of the Film Festival took place in 2018 and 2019
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-3/4 max-w-[1024px] gap-4 lg:gap-8 text-text-primary text-lato my-12">
      <Link href="https://ram1117.github.io/filmfestival/" target="_blank">
        <div className="bg-past-event-1 bg-cover bg-no-repeat h-[300px] lg:h-80 flex items-center justify-center">
          <h3 className="text-2xl lg:text-4xl font-black">2018</h3>
        </div>
      </Link>
      <Link href="https://ram1117.github.io/filmfestival/" target="_blank">
        <div className="bg-past-event-2 bg-cover bg-no-repeat h-[300px] lg:h-80 flex items-center justify-center">
          <h3 className="text-2xl lg:text-4xl font-black ">2019</h3>
        </div>
      </Link>
    </div>
  </section>
);

export default PastEventsSection;
