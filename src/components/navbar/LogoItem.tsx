import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import Logo from "@public/icons/icon-camera.svg";

const LogoItem = () => (
  <Link href="/">
    <div className="flex gap-1">
      <div className="flex justify-center items-center">
        <ImageWrapper
          src={Logo}
          alt="Main Logo"
          imageSize="h-[40px] w-[40px]"
        />
      </div>

      <div className="flex justify-center flex-col">
        <h2 className="text-sm font-bold leading-none text-text-secondary">
          Film Festival
        </h2>
        <h4 className="text-xs leading-none text-custom-red">Chennai 2023</h4>
      </div>
    </div>
  </Link>
);

export default LogoItem;
