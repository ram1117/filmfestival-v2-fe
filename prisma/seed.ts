import { PrismaClient } from "@prisma/client";
import { eventsData1 } from "./EventData1";

const prisma = new PrismaClient();

async function main() {
  eventsData1.forEach(async (item) => {
    const date = await prisma.schedule.create({
      data: { date: new Date(item.date) },
    });

    item.events.forEach(async (event) => {
      await prisma.event.create({
        data: {
          title: event.title,
          venue: event.venue,
          description: event.description,
          eventColorCode: event.eventColorCode,
          icon: event.icon,
          iconAlt: event.iconAlt,
          totalSeats: event.totalSeats,
          availableSeats: event.totalSeats,
          price: event.price,
          eventTime: new Date(event.eventDate),
          scheduleId: date.id,
        },
      });
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
