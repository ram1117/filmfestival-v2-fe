import { db } from "@/db";
import CancelButton from "./CancelButton";
import SectionHeader from "@/atoms/SectionHeader";
import ImageWrapper from "@/atoms/ImageWrapper";
import { IconSelector } from "@/utils/iconscolors";

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
              className="grid grid-cols-1 lg:grid-cols-10 gap-4 py-2 items-center border-b"
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
