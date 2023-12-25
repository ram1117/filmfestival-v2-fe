import SectionHeader from "@/atoms/SectionHeader";
import { logoSectionData } from "@/data/AboutPageData";
import ImageWrapper from "@/atoms/ImageWrapper";
import Logo from "@public/icons/main-logo.svg";

const LogoSection = () => (
  <section className="min-h-max lg:min-h-[50vh] flex flex-col items-center my-8">
    <SectionHeader color="text-text-secondary">Chennai 2023 Logo</SectionHeader>
    <div className="w-11/12 md:w-3/4 max-w-[1024px] text-center text-text-secondary text-base flex flex-col gap-4">
      <h4>{logoSectionData.para1}</h4>
      <h4>{logoSectionData.para2}</h4>
    </div>
    <div className="w-11/12 md:w-3/4 max-w-[1024px] border-2 my-8 flex items-center justify-center py-12 lg:py-20">
      <ImageWrapper
        src={Logo}
        alt="Film Festival logo"
        imageSize="h-32 w-48 lg:h-60 lg:w-80"
      />
    </div>
  </section>
);

export default LogoSection;
