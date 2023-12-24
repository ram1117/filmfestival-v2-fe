import LogoItem from "./LogoItem";
import NavList from "./NavList";

const NavBar = () => (
  <nav className="flex justify-between items-center p-1 lg:p-2 border shadow shadow-sleet-500">
    <LogoItem />
    <NavList className="flex lg:gap-4 mx-4 text-base" />
  </nav>
);

export default NavBar;
