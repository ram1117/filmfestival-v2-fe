"use client";
import InputFieldWrapper from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import Link from "next/link";
import userSignUp from "@/actions/userSignup";
import { useFormState } from "react-dom";
import { SignUpFormState } from "@/actions/types";

const initialState: SignUpFormState = { errors: {} };

const SignUpPage = () => {
  const [formState, formAction] = useFormState(userSignUp, initialState);

  return (
    <div className="">
      <form className="mb-8" action={formAction}>
        <InputFieldWrapper
          label="Full Name"
          id="fullname"
          labelClass="w-full lg:w-1/6"
          containerClass="lg:gap-6 items-center"
        >
          <input
            type="text"
            name="fullname"
            id="fullname"
            required
            className="w-full lg:w-5/6 rounded-md p-2 border-2"
            minLength={6}
          />
        </InputFieldWrapper>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors.fullname && formState.errors.fullname.join(",")}
        </p>
        <InputFieldWrapper
          label="Email"
          id="email"
          labelClass="w-full lg:w-1/6"
          containerClass="lg:gap-6 items-center"
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full lg:w-5/6 rounded-md p-2 border-2"
          />
        </InputFieldWrapper>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors.email && formState.errors.email.join(",")}
        </p>
        <InputFieldWrapper
          label="Password"
          id="password"
          labelClass="w-full lg:w-1/6"
          containerClass="lg:gap-6 items-center"
        >
          <input
            type="password"
            name="password1"
            id="password1"
            required
            className="w-full lg:w-5/6 rounded-md p-2 border-2"
            minLength={8}
          />
        </InputFieldWrapper>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors.password1 && formState.errors.password1.join(",")}
        </p>
        <InputFieldWrapper
          label="Confirm Password"
          id="password2"
          labelClass="w-full lg:w-1/6"
          containerClass="lg:gap-6 items-center"
        >
          <input
            type="password"
            name="password2"
            id="password2"
            required
            className="w-full lg:w-5/6 rounded-md p-2 border-2"
            minLength={8}
          />
        </InputFieldWrapper>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors.password2 && formState.errors.password2.join(",")}
        </p>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors._form && formState.errors._form.join(",")}
        </p>

        <FormSubmitButton buttonText="Sign Up" pendingText="Signing Up ..." />
      </form>
      <h2>
        Have an Account?{" "}
        <Link
          href="/authentication/signin"
          className="text-custom-red font-bold text-lg"
        >
          Sign In
        </Link>
      </h2>
    </div>
  );
};

export default SignUpPage;
