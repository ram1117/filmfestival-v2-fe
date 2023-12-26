import { heroSectionData } from "@/data/HomePageData";

const HeroSection = () => (
  <section className="min-h-max lg:min-h-[80vh] w-full bg-main-bg bg-bg-color-primary bg-contain md:bg-cover bg-no-repeat p-4 flex flex-col items-start lg:justify-center text-text-secondary">
    <div className="font-lato font-black text-2xl md:text-3xl lg:text-8xl flex flex-col gap-2 lg:gap-4 ">
      <h2 className="font-bold text-custom-red text-xl lg:text-4xl">
        {`"${heroSectionData.title4}"`}
      </h2>
      <h1 className="text-clip">{heroSectionData.title1}</h1>
      <h2 className="text-clip">{heroSectionData.title2}</h2>
      <h2 className="text-clip">{heroSectionData.title3}</h2>
    </div>

    <h4 className="border-2 w-3/4 p-2 lg:w-1/2 my-2 lg:my-6 text-sm lg:text-lg font-md rounded-md bg-bg-color-primary">
      {heroSectionData.description}
    </h4>

    <div className="mt-2 lg:mt-6">
      <h3 className="text-xl lg:text-3xl font-black">{heroSectionData.date}</h3>
      <h4 className="text-lg lg:text-2xl">{heroSectionData.venue}</h4>
    </div>
  </section>
);

export default HeroSection;
