"use client";

import InputFieldWrapper from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import Link from "next/link";
import useSignin from "@/actions/userSignin";
import { useFormState } from "react-dom";
import googleSignInAction from "@/actions/googleSignInAction";
import ImageWrapper from "@/atoms/ImageWrapper";
import GoogleIcon from "@public/icons/icon-google.svg";

const SignInPage = () => {
  const [formState, formAction] = useFormState(useSignin, { errors: [] });

  return (
    <div>
      <form className="mb-8" action={formAction}>
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
            name="password"
            id="password"
            required
            className="w-full lg:w-5/6 rounded-md p-2 border-2"
            minLength={8}
          />
        </InputFieldWrapper>
        <p className="my-4 text-red-500 text-sm">
          {formState.errors && formState.errors.join(",")}
        </p>
        <FormSubmitButton buttonText="Sign In" pendingText="Signing In ..." />
      </form>
      <form
        action={googleSignInAction}
        className="w-full flex items-center justify-center"
      >
        <button
          type="submit"
          className="my-6 border-2 px-6 py-2 w-full md:w-1/2 rounded-md shadow-md custom-shadow flex items-center justify-center"
        >
          <ImageWrapper
            src={GoogleIcon}
            alt="google icon"
            imageSize="h-4 w-4 mx-2"
          />
          Sign in with Google
        </button>
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
