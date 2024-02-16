"use server";
import { db } from "@/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { EventBookFormState } from "./types";
const reserveEventAction = async (
  eventId: string,
  totalPrice: number,
  formState: EventBookFormState,
  formData: FormData
): Promise<EventBookFormState> => {
  const event = await db.event.findUnique({ where: { id: eventId } });

  if (!event)
    return {
      errors: ["Error retrieving event details.."],
    };

  const qty = formData.get("tickets");
  let quantity = 0;
  if (typeof qty === "string") quantity = parseInt(qty);

  const session = await auth();
  if (!session?.user)
    return {
      errors: ["Must be signed in to perform this action"],
    };

  if (event.availableSeats < quantity)
    return {
      errors: [`Maximum available seats is ${event.availableSeats}`],
    };

  try {
    await db.reservation.create({
      data: {
        seats: quantity,
        eventId: eventId,
        userId: session.user?.id || "",
        price: totalPrice,
      },
    });
    if (event?.availableSeats && event.availableSeats > 0) {
      const newTotal = event?.availableSeats - quantity;
      await db.event.update({
        where: { id: eventId },
        data: { availableSeats: newTotal },
      });
    }
  } catch (error) {
    if (error instanceof Error) return { errors: [error.message] };
    return { errors: ["Something went wrong..."] };
  }

  revalidatePath("/account");
  redirect("/account");
};

export default reserveEventAction;
