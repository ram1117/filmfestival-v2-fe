import { db } from "@/db";
import { notFound } from "next/navigation";
import PassBookingForm from "./PassBookingForm";
import { auth } from "@/auth";
import InputFieldWrapper from "@/atoms/InputField";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/atoms/Loading";

const AllAccessSection = async () => {
  const accessPasses = await db.pass.findMany({ orderBy: { price: "desc" } });

  if (!accessPasses) notFound();
  const session = await auth();
  if (!session || !session.user) notFound();

  return (
    <section className="w-11/12 lg:w-3/4 max-w-[1024px] flex flex-col items-center p-4 lg:p-8 rounded-xl shadow-custom">
      <Suspense fallback={<Loading />}>
        <div className="w-full">
          <InputFieldWrapper
            label="Full Name"
            id="fullname"
            labelClass="w-full lg:w-1/6"
            containerClass="items-center"
          >
            <input
              type="text"
              name="fullname"
              id="fullname"
              readOnly
              className="w-full lg:w-5/6 rounded-md p-2 border-2 bg-slate-200 focus:outline-none"
              defaultValue={session.user?.name || ""}
            />
          </InputFieldWrapper>
          <InputFieldWrapper
            label="Email"
            id="email"
            labelClass="w-full lg:w-1/6"
            containerClass="items-center"
          >
            <input
              type="email"
              name="email"
              id="email"
              readOnly
              className="w-full lg:w-5/6 rounded-md p-2 border-2 bg-slate-200 focus:outline-none"
              defaultValue={session.user?.email || ""}
            />
          </InputFieldWrapper>
        </div>

        <PassBookingForm passes={accessPasses} />
        <h2 className="my-6 text-left text-lg lg:text-xl w-full">
          For tickets for individual events, please check the
          <Link href={"/schedule"}>
            <span className="text-custom-red font-semibold mx-2">
              Schedule Page
            </span>
          </Link>
        </h2>

        <ul className="w-full text-xs md:text-sm list-disc list-inside my-4 lg:my-8">
          {accessPasses.map((item) => (
            <li key={item.id}>
              {item.title} - {item.description}
            </li>
          ))}
        </ul>
      </Suspense>
    </section>
  );
};

export default AllAccessSection;
