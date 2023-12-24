import ImageWrapper from "@/atoms/ImageWrapper";

interface PartnerItemProps {
  partnerData: { id: number; imgSrc: string; alt: string };
}

const PartnerItem = ({ partnerData }: PartnerItemProps) => (
  <li>
    <ImageWrapper
      src={partnerData.imgSrc}
      alt={partnerData.alt}
      imageSize="h-12 w-24"
    />
  </li>
);

export default PartnerItem;
