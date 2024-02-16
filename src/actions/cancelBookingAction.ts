"use server";
import { db } from "@/db";

const cancelBookingAction = async (
  eventId: string,
  bookingId: string,
  quantity: number
) => {
  const event = await db.event.findUnique({ where: { id: eventId } });
  if (!event) return null;

  const newTotal = event?.availableSeats + quantity;
  try {
    await db.event.update({
      where: { id: eventId },
      data: { availableSeats: newTotal },
    });
    await db.schedule.delete({ where: { id: bookingId } });
  } catch (error) {}
};

export default cancelBookingAction;
