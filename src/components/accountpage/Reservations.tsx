import { db } from "@/db";
import CancelBookingForm from "./CancelBookingForm";

interface ReservationsProps {
  userId: string;
}

const Reservations = async ({ userId }: ReservationsProps) => {
  const reservations = await db.reservation.findMany({
    where: { userId: userId },
    include: { event: true },
  });

  return (
    <div>
      <h2 className="my-8 text-center text-lg lg:text-2xl font-semibold">
        Reservations
      </h2>
      <div className=" my-8 px-2 py-4 lg:px-6 lg:py-8 gap-4 shadow-lg shadow-slate-300">
        <ul>
          {reservations.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row gap-2 py-2 border-b items-center"
            >
              <h2 className="w-full sm:w-5/12">{item.event.title}</h2>
              <h2 className="w-full sm:w-3/12">
                {item.event.eventTime.toLocaleString("en", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                })}
              </h2>
              <div className="w-full sm:w-4/12 lg:w-2/12">
                <CancelBookingForm
                  bookingId={item.id}
                  eventId={item.eventId}
                  quantity={item.seats}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reservations;
