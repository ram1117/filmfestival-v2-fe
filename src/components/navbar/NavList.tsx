import Link from "next/link";

interface NavListProps {
  className: string;
}

const NavList = ({ className }: NavListProps) => (
  <ul
    className={`${className}  text-text-secondary font-bold font-roboto-condensed`}
  >
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
);

export default NavList;
