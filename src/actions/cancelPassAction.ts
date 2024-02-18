"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const cancelPassAction = async (
  eventId: string,
  bookingId: string,
  quantity: number
) => {
  const pass = await db.pass.findUnique({ where: { id: eventId } });

  if (!pass) return null;
  const newTotal = pass.available + quantity;
  try {
    await db.pass.update({
      where: { id: eventId },
      data: { available: newTotal },
    });

    await db.passBooking.delete({ where: { id: bookingId } });
  } catch (error) {
    throw error;
  }

  revalidatePath("/account");
  redirect("/account");
};

export default cancelPassAction;
