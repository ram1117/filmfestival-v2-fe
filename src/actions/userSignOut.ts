"use server";
import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const userSignoutAction = async () => {
  try {
    await signOut();
  } catch (error) {}

  revalidatePath("/");
  redirect("/");
};

export default userSignoutAction;
