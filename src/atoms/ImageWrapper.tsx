import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
  imageSize: string;
  className?: string;
  sizes?: string;
}

const ImageWrapper = ({
  src,
  alt,
  imageSize,
  className = "",
  sizes = "",
}: ImageWrapperProps) => (
  <div className={`${imageSize} relative`}>
    <Image src={src} alt={alt} fill className={className} sizes={sizes} />
  </div>
);

export default ImageWrapper;
