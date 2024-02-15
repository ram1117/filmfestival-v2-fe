"use client";
import InputFieldWrapper from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="">
      <form className="mb-8">
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
        <FormSubmitButton buttonText="Sign In" pendingText="Signing In ..." />
      </form>
      <h2>
        Don&apos;t have an Account?{" "}
        <Link
          href="/authentication/signup"
          className="text-custom-red font-bold text-lg"
        >
          Sign Up
        </Link>
      </h2>
    </div>
  );
};

export default SignInPage;
