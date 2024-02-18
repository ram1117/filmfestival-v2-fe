"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const googleSignInAction = async () => {
  await signIn("google");
  redirect("/");
};

export default googleSignInAction;
