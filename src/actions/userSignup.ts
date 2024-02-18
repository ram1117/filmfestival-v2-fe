"use server";

import { z } from "zod";
import { SignUpFormState } from "./types";
import { db } from "@/db";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

const signUpSchema = z
  .object({
    fullname: z
      .string()
      .min(6)
      .regex(/^[a-zA-Z\s]*$/, { message: "Only alphabets and spaces" }),
    email: z.string().email({ message: "Invalid email format" }),
    password1: z
      .string()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password should contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character:",
        }
      ),
    password2: z.string().min(8),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match.",
    path: ["password2"],
  });

const userSignUp = async (
  prevState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  const validation = signUpSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success)
    return { errors: validation.error.flatten().fieldErrors };

  const { fullname, email, password1 } = validation.data;

  await db.$connect();
  const existingUser = await db.user.findFirst({ where: { email: email } });
  if (existingUser) {
    return {
      errors: {
        email: ["Email already exists"],
      },
    };
  }

  try {
    await db.user.create({
      data: {
        name: fullname,
        email: email,
        role: "user",
        password: await bcrypt.hash(password1, 10),
      },
    });
  } catch (error) {
    if (error instanceof Error)
      return {
        errors: {
          _form: [error.message],
        },
      };

    return {
      errors: {
        _form: ["Something went Wrong."],
      },
    };
  }
  await db.$disconnect();
  redirect("/authentication/signin");
};

export default userSignUp;
