import Link from "next/link";

const MenuBar = () => (
  <nav className="flex items-center justify-end bg-menubar-bg px-1 lg:px-2 py-1">
    <ul className="flex gap-4 text-text-primary py-1 px-6 font-oswald font-semibold">
      <li>
        <Link href="/account">Account</Link>
      </li>
      <li>
        <Link href="/authentication/signin">Sign In</Link>
      </li>
    </ul>
  </nav>
);

export default MenuBar;
