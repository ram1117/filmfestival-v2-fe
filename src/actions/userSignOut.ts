"use server";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

const userSignoutAction = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }

  redirect("/");
};

export default userSignoutAction;
