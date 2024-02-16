import Link from "next/link";
import { auth } from "@/auth";
import userSignoutAction from "@/actions/userSignOut";

const MenuBar = async () => {
  const session = await auth();
  console.log(session?.user);

  const showLink = session ? (
    <form action={userSignoutAction}>
      <button type="submit">Sign Out</button>
    </form>
  ) : (
    <Link href="/authentication/signin">Sign In</Link>
  );

  return (
    <nav className="flex items-center justify-end bg-menubar-bg px-1 lg:px-2 py-1">
      <ul className="flex gap-4 text-text-primary py-1 px-6 font-oswald font-semibold">
        <li>
          <Link href="/account">Account</Link>
        </li>

        <li>{showLink}</li>
      </ul>
    </nav>
  );
};

export default MenuBar;
