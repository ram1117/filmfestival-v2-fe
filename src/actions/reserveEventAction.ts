"use server";
import { db } from "@/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const reserveEventAction = async (
  eventId: string,
  totalPrice: number,
  formData: FormData
) => {
  const event = await db.event.findUnique({ where: { id: eventId } });
  const qty = formData.get("tickets");

  let quantity = 0;
  if (typeof qty === "string") quantity = parseInt(qty);

  const session = await auth();
  if (!session?.user)
    return {
      errors: {
        _form: ["Must be signed in to perform this action"],
      },
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
  } catch (error) {}

  revalidatePath("/account");
  redirect("/account");
};

export default reserveEventAction;
