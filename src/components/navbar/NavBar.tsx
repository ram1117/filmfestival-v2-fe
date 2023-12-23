import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import Logo from "@/public/icons/icon-camera.svg";

const NavBar = () => (
  <nav className="flex justify-between items-center p-1 lg:p-2 border shadow shadow-sleet-500">
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
    <ul className="flex gap-1 lg:gap-4 mx-4 text-text-secondary font-bold font-roboto-condensed text-sm md:text-base">
      <li className="p-2">
        <Link href="/about">About</Link>
      </li>
      <li className="p-2">
        <Link href="/schedule">Schedule</Link>
      </li>
      <li className="p-2">
        <Link href="/venues">Venues</Link>
      </li>
      <li className="p-2">
        <Link href="/partners">Partners</Link>
      </li>
      <li className="p-2 bg-custom-red rounded-md text-text-primary">
        <Link href="/reserve">Reserve</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
