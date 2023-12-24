"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import MenuIcon from "@public/icons/icon-menu.svg";
import NavList from "./NavList";
import { useState } from "react";

const MobileMenu = () => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className=""
        onClick={() => setOpenPanel((prev) => !prev)}
      >
        <ImageWrapper
          src={MenuIcon}
          alt="hamburger menu button"
          imageSize="h-8 w-8 border-2 p-1 rounded-md"
        />
      </button>
      {openPanel && (
        <>
          <div className="h-0 w-0 border-x-[10px] border-x-transparent border-b-[12px] border-b-gray-dark absolute right-1 top-8" />
          <nav
            className=" bg-gray-dark px-4 py-12 rounded-md w-[250px] z-[888] right-0 top-10 absolute"
            onClick={() => setOpenPanel((prev) => !prev)}
          >
            <NavList className="flex flex-col gap-4 mx-4 text-base md:hidden text-text-primary text-center" />
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
