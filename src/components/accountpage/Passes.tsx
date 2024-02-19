import SectionHeader from "@/atoms/SectionHeader";
import { db } from "@/db";
import CancelButton from "./CancelButton";
import cancelPassAction from "@/actions/cancelPassAction";
import CancelBookingForm from "./CancelBookingForm";
import { Suspense } from "react";
import LoadingSkeleton from "@/atoms/LoadingSkeleton";
import Link from "next/link";

interface PassesProps {
  userId: string;
}

const Passes = async ({ userId }: PassesProps) => {
  const bookedPasses = await db.passBooking.findMany({
    where: { userId: userId },
    include: { pass: true },
  });

  const hasReservations = bookedPasses.length !== 0;

  return (
    <div className="flex flex-col items-center my-6">
      <SectionHeader color="text-text-seconary">Access Passes</SectionHeader>
      <div className="w-full my-8 px-2 py-4 lg:px-6 lg:py-8 gap-4 rounded-xl shadow-custom">
        <Suspense fallback={<LoadingSkeleton dimensions="!h-[20vh]" />}>
          <ul className="flex gap-4 flex-col">
            {!hasReservations && (
              <li className="p-4 text-center">
                No Access passes found. Please check{" "}
                <Link
                  href="/reserve"
                  className="text-custom-red font-bold mx-1"
                >
                  Access Passes
                </Link>
              </li>
            )}
            {hasReservations &&
              bookedPasses.map((item) => {
                const PopupContent = (
                  <div className="my-12 flex flex-col gap-2 lg:flex-row justify-between border-b">
                    <h2>{item.pass.title}</h2>
                    <h2>{item.count} Tickets</h2>
                    <h2>₹ {item.price}</h2>
                  </div>
                );

                const Form = (
                  <CancelBookingForm
                    eventId={item.pass.id}
                    bookingId={item.id}
                    quantity={item.count}
                    formAction={cancelPassAction}
                  />
                );

                return (
                  <li
                    key={item.id}
                    className="grid grid-cols-1 lg:grid-cols-10 gap-4 py-2 items-center px-2 rounded-md border"
                  >
                    <h2 className="lg:col-span-5 flex gap-2 items-center">
                      {item.pass.title} Pass
                    </h2>
                    <h2 className="lg:col-span-2">{item.count} passes</h2>
                    <h2 className="lg:col-span-2">₹ {item.price}</h2>
                    <div className="lg:col-span-1 text-sm lg:text-base flex items-center justify-center">
                      <CancelButton
                        popupContent={PopupContent}
                        cancelForm={Form}
                      />
                    </div>
                  </li>
                );
              })}
          </ul>
        </Suspense>
      </div>
    </div>
  );
};

export default Passes;
