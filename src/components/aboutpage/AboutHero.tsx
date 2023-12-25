import Link from "next/link";
import { heroSectionData } from "@/data/HomePageData";
import { aboutHeroData } from "@/data/AboutPageData";

const AboutHero = () => (
  <section className="min-h-max lg:min-h-screen border bg-about-bg bg-no-repeat bg-cover bg-bg-color-primary flex flex-col items-center lg:justify-center bg-text-primary">
    <div className="font-lato font-black text-2xl md:text-3xl lg:text-5xl flex flex-col gap-1 text-custom-red text-center my-8">
      <h1>{heroSectionData.title1}</h1>
      <h2>
        {heroSectionData.title2} {heroSectionData.title3}
      </h2>
    </div>
    <div className="border-2 text-base lg:text-xl w-11/12 lg:w-3/4 max-w-[1024px] bg-white text-text-secondary p-4 lg:p-8 text-center flex flex-col gap-4 lg:gap-8 my-4">
      <h6>{aboutHeroData.para1}</h6>
      <h6>{aboutHeroData.para2}</h6>
      <h6>{aboutHeroData.para3}</h6>
    </div>
    <div className="border-2 text-base lg:text-xl w-11/12 lg:w-3/4 max-w-[1024px] bg-white text-text-secondary p-4 lg:p-8 text-center flex flex-col gap-2 my-4">
      <h6>{aboutHeroData.para4}</h6>
      <div className="flex gap-4 justify-center">
        <Link
          href={`tel:${aboutHeroData.contact1}`}
          className="underline underline-offset-4 font-bold text-lg lg:text-xl"
        >
          {aboutHeroData.contact1}
        </Link>
        <Link
          href={`tel:${aboutHeroData.contact2}`}
          className="underline underline-offset-4 font-bold text-lg lg:text-xl"
        >
          {aboutHeroData.contact2}
        </Link>
      </div>
    </div>
  </section>
);

export default AboutHero;
