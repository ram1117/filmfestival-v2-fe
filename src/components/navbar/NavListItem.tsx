import Link from "next/link";
interface NavListItemProps {
  linkData: {
    id: number;
    title: string;
    link: string;
  };
}

const NavListItem = ({ linkData }: NavListItemProps) => (
  <li className="p-2">
    <Link href={linkData.link}>{linkData.title}</Link>
  </li>
);

export default NavListItem;
