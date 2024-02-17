import { db } from "@/db";
import CancelButton from "./CancelButton";
import SectionHeader from "@/atoms/SectionHeader";

interface ReservationsProps {
  userId: string;
}

const Reservations = async ({ userId }: ReservationsProps) => {
  const reservations = await db.reservation.findMany({
    where: { userId: userId },
    include: { event: true },
  });

  return (
    <div className="flex flex-col items-center my-6">
      <SectionHeader color="text-text-seconary">Reservations</SectionHeader>
      <div className="w-full my-8 px-2 py-4 lg:px-6 lg:py-8 gap-4 rounded-xl shadow-custom">
        <ul className="flex gap-4 flex-col">
          {reservations.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 py-2 border-b items-center"
            >
              <h2 className="w-full sm:w-7/12">{item.event.title}</h2>
              <h2 className="w-full sm:w-3/12">
                {item.event.eventTime.toLocaleString("en", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                })}
              </h2>
              <div className="w-full sm:w-max text-sm lg:text-base">
                <CancelButton booking={item} event={item.event} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reservations;
