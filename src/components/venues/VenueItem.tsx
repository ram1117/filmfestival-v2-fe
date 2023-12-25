import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";

interface VenueItemProps {
  venueData: {
    id: number;
    name: string;
    location: string;
    description: string;
    link: string;
    linkText: string;
    imgSrc: string;
    alt: string;
    address: string;
    city: string;
  };
}

const imageSize = "h-60 sm:h-80 w-full lg:h-full lg:w-full";

const VenueItem = ({ venueData }: VenueItemProps) => (
  <li className="flex flex-col lg:flex-row gap-4 border p-4 rounded-xl">
    <div className="w-full lg:w-1/3 lg:max-w-[250px]">
      <ImageWrapper
        src={venueData.imgSrc}
        alt={venueData.alt}
        imageSize={imageSize}
        sizes="(min-width: 768px) 90vw, 40vw"
        className="rounded-xl"
      />
    </div>

    <div className="w-full lg:w-2/3">
      <h3 className="text-xl lg:text-2xl font-bold">{venueData.location}</h3>
      <h4 className="italic text-base lg:text-lg font-semibold text-custom-red">
        {venueData.name}
      </h4>
      <h4 className="text-sm lg:text-base">{venueData.description}</h4>
      {venueData.link && (
        <div className="w-full flex justify-between items-center my-2 lg:my-4">
          <h6 className="font-light">
            {venueData.address}, {venueData.city}
          </h6>
          <Link href={venueData.link}>
            <h6 className="text-sm lg:text-base text-center p-1 lg:p-2 border rounded-md border-custom-red w-32 lg:w-44 bg-custom-red text-text-primary font-semibold text-xs lg:text-sm">
              {venueData.linkText}
            </h6>
          </Link>
        </div>
      )}
    </div>
  </li>
);

export default VenueItem;
