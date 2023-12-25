"use client";

import { usePathname } from "next/navigation";
import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
import ChevronIcon from "@public/icons/icon-chevron-left.svg";
import HomeIcon from "@public/icons/icon-home.svg";

const BreadCrumb = () => {
  const pathName = usePathname().slice(1);
  const displayText = pathName.length === 0;

  const imageSize = "h-5 w-5";
  if (displayText) return <></>;
  return (
    <nav className="flex gap-1 items-center text-sm font-roboto-condensed">
      <Link href="/">
        <div className="flex gap-1 items-center">
          <ImageWrapper
            src={HomeIcon}
            alt="Homepage Icon"
            imageSize={imageSize}
          />
          <h6 className="font-semibold">Home</h6>
        </div>
      </Link>

      <ImageWrapper
        src={ChevronIcon}
        alt="Chevron Icon"
        imageSize={imageSize}
      />
      <h6 className="capitalize text-text-secondary">{pathName}</h6>
    </nav>
  );
};

export default BreadCrumb;
