import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import Logo from "@public/icons/main-logo.svg";

const LogoItem = () => (
  <Link href="/">
    <ImageWrapper src={Logo} alt="Main Logo" imageSize="h-[30px] w-[80px]" />
  </Link>
);

export default LogoItem;
