"use client";
import InputField from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="">
      <form className="mb-8">
        <InputField
          label="Full Name"
          type="text"
          id="fullname"
          name="fullname"
          labelClass="w-full lg:w-1/6"
          inputClass="w-full lg:w-5/6"
          containerClass="lg:gap-6 items-center"
          required
        />
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
        <InputField
          label="Re-enter Password"
          type="password"
          id="password1"
          name="password1"
          labelClass="w-full lg:w-1/6"
          inputClass="w-full lg:w-5/6"
          containerClass="lg:gap-6 items-center"
          required
        />
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
