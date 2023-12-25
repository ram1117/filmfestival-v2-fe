import Link from "next/link";
import NavListItem from "./NavListItem";

interface NavListProps {
  className: string;
}

const navItemsData = [
  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Schedule", link: "/schedule" },
  { id: 3, title: "Venues", link: "/venues" },
];

const NavList = ({ className }: NavListProps) => (
  <ul className={`${className}  font-bold font-roboto-condensed`}>
    {navItemsData.map((item) => (
      <NavListItem linkData={item} key={item.id} />
    ))}
    <li className="p-2 bg-custom-red rounded-md text-text-primary hover:bg-text-primary hover:text-custom-red border-2 border-custom-red">
      <Link href="/reserve">Reserve</Link>
    </li>
  </ul>
);

export default NavList;
