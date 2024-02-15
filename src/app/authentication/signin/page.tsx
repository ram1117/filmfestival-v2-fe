"use client";
import InputField from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="">
      <form className="mb-8">
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          labelClass="w-full lg:w-1/6"
          inputClass="w-full lg:w-5/6"
          containerClass="lg:gap-6 items-center"
          required
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          labelClass="w-full lg:w-1/6"
          inputClass="w-full lg:w-5/6"
          containerClass="lg:gap-6 items-center"
          required
        />
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
