"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const cancelBookingAction = async (
  eventId: string,
  bookingId: string,
  quantity: number
) => {
  await db.$connect();
  const event = await db.event.findUnique({ where: { id: eventId } });

  if (!event) return null;
  const newTotal = event?.availableSeats + quantity;
  try {
    await db.event.update({
      where: { id: eventId },
      data: { availableSeats: newTotal },
    });

    await db.reservation.delete({ where: { id: bookingId } });
  } catch (error) {
    throw error;
  }
  await db.$disconnect();
  revalidatePath("/account");
  redirect("/account");
};

export default cancelBookingAction;
