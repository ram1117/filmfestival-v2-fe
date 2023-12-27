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
    <Link href="/reserve">
      <li className="p-2 text-text-primary border-2 border-custom-red bg-custom-red ">
        Tickets
      </li>
    </Link>
  </ul>
);

export default NavList;
