import ImageWrapper from "@/atoms/ImageWrapper";

interface ProgramItemProps {
  program: {
    id: number;
    title: string;
    logoSrc: string;
    alt: string;
    description: string;
  };
}

const ProgramItem = ({ program }: ProgramItemProps) => (
  <li className="bg-program-tile-bg sm:aspect-square flex sm:flex-col justify-around sm:justify-center items-center gap-4 p-4 rounded-lg hover:scale-105">
    <ImageWrapper
      src={program.logoSrc}
      alt={program.alt}
      imageSize="h-10 w-10 sm:h-16 sm:w-16"
    />
    <div className="text-center">
      <h3 className="text-custom-red font-semibold text-lg lg:text-2xl">
        {program.title}
      </h3>
      <h5>{program.description}</h5>
    </div>
  </li>
);

export default ProgramItem;
