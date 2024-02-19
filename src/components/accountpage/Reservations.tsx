import { db } from "@/db";
import CancelButton from "./CancelButton";
import SectionHeader from "@/atoms/SectionHeader";
import ImageWrapper from "@/atoms/ImageWrapper";
import { IconSelector } from "@/utils/iconscolors";
import cancelBookingAction from "@/actions/cancelBookingAction";
import CancelBookingForm from "./CancelBookingForm";
import { Suspense } from "react";
import LoadingSkeleton from "@/atoms/LoadingSkeleton";
import Link from "next/link";

interface ReservationsProps {
  userId: string;
}

const Reservations = async ({ userId }: ReservationsProps) => {
  const reservations = await db.reservation.findMany({
    where: { userId: userId },
    include: { event: true },
  });

  const hasReservations = reservations.length !== 0;

  return (
    <div className="flex flex-col items-center my-6">
      <SectionHeader color="text-text-seconary">Reservations</SectionHeader>
      <div className="w-full my-8 px-2 py-4 lg:px-6 lg:py-8 gap-4 rounded-xl shadow-custom">
        <Suspense fallback={<LoadingSkeleton dimensions="!h-[20vh]" />}>
          <ul className="flex gap-4 flex-col">
            {!hasReservations && (
              <li className="p-4 text-center">
                No reservations found. Please check{" "}
                <Link
                  href="/schedule"
                  className="text-custom-red font-bold mx-1"
                >
                  Schedule
                </Link>
              </li>
            )}
            {hasReservations &&
              reservations.map((item) => {
                const PopupContent = (
                  <div className="my-12 flex flex-col gap-2 lg:flex-row justify-between border-b">
                    <h2>{item.event.title}</h2>
                    <h2>{item.seats} Tickets</h2>
                    <h2>₹ {item.price}</h2>
                  </div>
                );

                const Form = (
                  <CancelBookingForm
                    eventId={item.event.id}
                    bookingId={item.id}
                    quantity={item.seats}
                    formAction={cancelBookingAction}
                  />
                );

                return (
                  <li
                    key={item.id}
                    className="grid grid-cols-1 lg:grid-cols-10 gap-4 py-2 items-center border px-2 rounded-md"
                  >
                    <h2 className="lg:col-span-5 flex gap-2 items-center">
                      <ImageWrapper
                        src={IconSelector[item.event.eventType].icon}
                        alt={IconSelector[item.event.eventType].alt}
                        imageSize="h-4 w-4"
                      />
                      {item.event.title}
                    </h2>
                    <h2 className="lg:col-span-2">
                      {item.event.eventTime.toLocaleString("en", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                      })}
                    </h2>
                    <h2 className="lg:col-span-2">{item.event.venue}</h2>
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

export default Reservations;
