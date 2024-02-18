"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { EventBookFormState } from "./types";

const passBookingAction = async (
  formState: EventBookFormState,
  formData: FormData
): Promise<EventBookFormState> => {
  const session = await auth();

  if (!session || !session.user)
    return { errors: ["Shoulb be logged in for this action.."] };

  const passId = formData.get("accesspass") as string;
  const pass = await db.pass.findUnique({ where: { id: passId } });
  if (!pass) return { errors: ["Pass with given Id not found"] };

  const qty = formData.get("tickets");
  let quantity = 0;
  if (typeof qty === "string") quantity = parseInt(qty);

  if (pass.available < quantity)
    return {
      errors: [`Maximum available Passes are ${pass.available}`],
    };

  try {
    if (session.user.id) {
      await db.passBooking.create({
        data: {
          userId: session.user.id,
          passId: passId,
          count: quantity,
          price: pass.price * quantity,
        },
      });

      await db.pass.update({
        where: { id: passId },
        data: { available: pass.available - quantity },
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return {
        errors: [error.message],
      };
    return {
      errors: ["Something went wrong"],
    };
  }

  revalidatePath("/account");
  redirect("/account");
};

export default passBookingAction;
