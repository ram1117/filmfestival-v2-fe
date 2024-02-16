"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

const useSignin = async (
  formState: { errors: string[] },
  formData: FormData
) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { errors: ["Email or Password is invalid"] };
        default:
          return { errors: ["Error Signing in..."] };
      }
    }
  }

  redirect("/");
};

export default useSignin;
