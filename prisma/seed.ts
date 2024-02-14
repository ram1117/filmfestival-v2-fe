import { PrismaClient } from "@prisma/client";
import { eventsData } from "./EventData";

const prisma = new PrismaClient();

async function main() {
  eventsData.forEach(async (item) => {
    await prisma.event.create({
      data: {
        title: item.title,
        venue: item.venue,
        description: item.description,
        eventColorCode: item.eventColorCode,
        icon: item.icon,
        iconAlt: item.iconAlt,
        totalSeats: item.totalSeats,
        price: item.price,
        eventDate: new Date(item.eventDate).toISOString(),
        eventTime: new Date(item.eventDate).toISOString(),
      },
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
