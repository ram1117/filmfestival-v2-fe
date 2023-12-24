import LogoItem from "./LogoItem";
import MobileMenu from "./MobileMenu";
import NavList from "./NavList";

const NavBar = () => (
  <nav className="flex justify-between items-center p-1 lg:p-2 border shadow shadow-sleet-500">
    <LogoItem />
    <div className="block md:hidden mx-4">
      <MobileMenu />
    </div>
    <NavList className="hidden lg:gap-4 mx-4 text-base md:flex text-text-secondary" />
  </nav>
);

export default NavBar;
