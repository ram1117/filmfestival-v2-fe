"use client";

import { useFormStatus } from "react-dom";

interface FormSubmitButtonProps {
  buttonText?: string;
  className?: string;
  pendingText?: string;
}

const FormSubmitButton = ({
  buttonText = "Submit",
  className = "",
  pendingText = "Submitting...",
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <div className="w-full flex justify-end my-4 lg:my-8">
      <button
        type="submit"
        className={`${className} bg-custom-red px-8 py-2 rounded-md text-text-primary font-semibold`}
      >
        {pending ? pendingText : buttonText}
      </button>
    </div>
  );
};

export default FormSubmitButton;
