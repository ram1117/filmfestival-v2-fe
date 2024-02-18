"use client";

import { Pass } from "@prisma/client";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import InputFieldWrapper from "@/atoms/InputField";
import passBookingAction from "@/actions/passBookingAction";
import { useFormState } from "react-dom";

interface PassBookingFormProps {
  passes: Pass[];
}

const PassBookingForm = ({ passes }: PassBookingFormProps) => {
  const [formState, formAction] = useFormState(passBookingAction, {
    errors: [],
  });

  return (
    <form className=" w-full font-roboto-condensed" action={formAction}>
      <div className="my-6 lg:my-16 border p-4 lg:p-12">
        <h3 className="text-lg lg:text-xl my-6 font-semibold font-lato text-custom-red">
          Select a pass
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {passes.map((item) => (
            <li key={item.id} className="flex gap-2 border p-4">
              <input
                type="radio"
                name="accesspass"
                id={item.id}
                value={item.id}
                className="h-4 w-4 lg:h-5 lg:w-5 checked:accent-custom-red"
                required
              />
              <label htmlFor={item.id}>
                {item.title} - ₹ {item.price}
              </label>
            </li>
          ))}
        </ul>
        <InputFieldWrapper
          label="No. Of Tickets"
          id="tickets"
          labelClass="w-full lg:w-1/6"
          containerClass="items-center"
        >
          <select
            id="tickets"
            name="tickets"
            className="w-24 p-2 rounded-md w-full md:w-5/6 bg-white border-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </InputFieldWrapper>
      </div>
      <p className="my-4 text-red-500 text-sm">
        {formState.errors && formState.errors.join(",")}
      </p>
      <FormSubmitButton pendingText="Booking.." buttonText="Book" />
    </form>
  );
};

export default PassBookingForm;
