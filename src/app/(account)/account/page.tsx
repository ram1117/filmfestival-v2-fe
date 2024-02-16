import { auth } from "@/auth";
import Reservations from "@/components/accountpage/Reservations";

const AccountPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return (
      <section className="min-h-[70vh] max-w-[996px] mx-auto my-16">
        <h1 className="text-lg text-center">
          Must be logged in to access this page...
        </h1>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] max-w-[996px] mx-auto my-16 text-text-secondary font-roboto-condensed">
      <div className="flex flex-col lg:flex-row justify-between px-2 py-4 lg:px-6 lg:py-8 gap-4 shadow-lg shadow-slate-300">
        <h2 className="text-lg lg:text-xl">{session.user.name}</h2>
        <h2 className="text-lg lg:text-xl">{session.user.email}</h2>
      </div>
      <Reservations userId={session.user.id || ""} />
    </section>
  );
};

export default AccountPage;
