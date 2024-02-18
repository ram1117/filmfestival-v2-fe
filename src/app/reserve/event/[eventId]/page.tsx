import { db } from "@/db";
import ImageWrapper from "@/atoms/ImageWrapper";
import { notFound } from "next/navigation";
import EventBookingForm from "@/components/ticketspage/events/EventBookingForm";
import { auth } from "@/auth";
import { IconSelector } from "@/utils/iconscolors";

interface ReservePageProps {
  params: {
    eventId: string;
  };
}

const ReservePage = async ({ params }: ReservePageProps) => {
  const eventId = params.eventId;

  await db.$connect();
  const event = await db.event.findUnique({
    where: { id: eventId },
    include: {
      schedule: true,
    },
  });

  await db.$disconnect();
  const isSeatsAvailable = event?.availableSeats !== 0;

  if (!event) notFound();

  const session = await auth();

  return (
    <section className="min-h-[80vh] w:11/12 max-w-[1024px] mx-auto my-12  lg:my-16 p-4 lg:p-8 text-text-secondary font-roboto-condensed">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 justify-between border-b py-4">
          <div className="flex gap-4 items-center">
            <ImageWrapper
              src={IconSelector[event.eventType].icon}
              alt={IconSelector[event.eventType].alt}
              imageSize="h-8 w-8 md:h-16 md:h-16"
            />
            <div className="">
              <h1 className="text-lg lg:text-2xl font-bold">{event?.title}</h1>
              <h2 className="text-sm italic lg:text-base">
                {event?.description}
              </h2>
            </div>
          </div>
          <div className="text-base lg:text-lg font-semibold">
            <h4>
              {event?.schedule.date.toLocaleDateString("default", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </h4>
            <h4>
              {event?.eventTime.toLocaleTimeString("default", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h4>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row text-sm lg:text-base flex justify-between gap-2 my-4 lg:my-8">
          <h2>Available Seats - {event?.availableSeats}</h2>
          <h2>Ticket Price - ₹ {event?.price}</h2>
        </div>
      </div>
      {isSeatsAvailable && session?.user && (
        <EventBookingForm
          user={session?.user}
          eventId={eventId}
          ticketPrice={event.price}
        />
      )}
      {!isSeatsAvailable && (
        <h3 className="text-lg lg:text-xl font-semibold font-lato text-custom-red">
          Sorry. This event is fully booked
        </h3>
      )}
      {!session?.user && (
        <h2 className="text-base font-semibold">
          Should be logged in to access the form
        </h2>
      )}
    </section>
  );
};

export default ReservePage;
