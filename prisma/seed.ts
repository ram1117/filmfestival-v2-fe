import { PrismaClient } from "@prisma/client";
import { eventsData1 } from "./EventData1";
import { passesData } from "./PassesData";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.schedule.deleteMany({});
    await prisma.event.deleteMany({});
    await prisma.pass.deleteMany({});

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
            totalSeats: event.totalSeats,
            availableSeats: event.totalSeats,
            price: event.price,
            eventTime: new Date(event.eventDate),
            scheduleId: date.id,
            eventType: event.eventType,
          },
        });
      });
    });

    passesData.forEach(async (pass) => {
      await prisma?.pass.create({
        data: {
          title: pass.title,
          description: pass.description,
          total: pass.total,
          price: pass.price,
          available: pass.total,
        },
      });
    });
  } catch (error) {
    throw error;
  }
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
