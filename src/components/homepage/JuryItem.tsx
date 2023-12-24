import ImageWrapper from "@/atoms/ImageWrapper";

interface JuryItemProps {
  oddItem: boolean;
  juryItemData: {
    id: number;
    name: string;
    title: string;
    description: string;
    imgSrc: string;
    alt: string;
  };
}

const JuryItem = ({ juryItemData, oddItem }: JuryItemProps) => {
  const flexStyle = oddItem ? "flex-row-reverse lg:flex-row" : "flex-row";
  const textAlignment = oddItem
    ? "items-end text-right lg:text-left lg:items-start"
    : "items-start text-left";
  return (
    <li className={`flex gap-2 lg:gap-4 ${flexStyle}`}>
      <div className="relative max-h-24 max-w-24 lg:max-h-36 lg:max-w-36 bg-left-top bg-jury-tile-bg bg-[length:50px_50px] bg-no-repeat w-1/3 aspect-square">
        <div className="w-max h-max absolute right-0 bottom-0">
          <ImageWrapper
            src={juryItemData.imgSrc}
            alt={juryItemData.alt}
            imageSize="h-20 w-20 lg:h-32 lg:w-32"
            sizes="30vw"
          />
        </div>
      </div>
      <div className={`w-2/3 font-lato flex flex-col ${textAlignment}`}>
        <h3 className="text-xl lg:text-2xl font-bold mb-2">
          {juryItemData.name}
        </h3>
        <h4 className="italic text-base lg:text-lg font-semibold text-custom-red mb-2">
          {juryItemData.title}
        </h4>
        <div className="w-16 border-b-2 border-b-gray-dark mb-2" />
        <h4 className="text-sm lg:text-base">{juryItemData.description}</h4>
      </div>
    </li>
  );
};

export default JuryItem;
