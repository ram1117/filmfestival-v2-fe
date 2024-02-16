"use client";
import InputFieldWrapper from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";
import { User } from "next-auth";
import reserveEventAction from "@/actions/reserveEventAction";
import { useState } from "react";

interface EventBookingFormProps {
  user: User | undefined;
  eventId: string;
  ticketPrice: number;
}

const EventBookingForm = ({
  user,
  eventId,
  ticketPrice,
}: EventBookingFormProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!user)
    return (
      <h2 className="text-base font-semibold">
        Should be logged in to access the form
      </h2>
    );

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(event.currentTarget.value));
  };

  const actionWithEventId = reserveEventAction.bind(
    null,
    eventId,
    quantity * ticketPrice
  );

  return (
    <form className="flex flex-col" action={actionWithEventId}>
      <InputFieldWrapper
        label="Full Name"
        id="fullname"
        labelClass="w-full lg:w-1/6"
        containerClass="items-center"
      >
        <input
          type="text"
          name="fullname"
          id="fullname"
          readOnly
          className="w-full lg:w-5/6 rounded-md p-2 border-2 bg-slate-200 focus:outline-none"
          defaultValue={user?.name || ""}
        />
      </InputFieldWrapper>
      <InputFieldWrapper
        label="Email"
        id="email"
        labelClass="w-full lg:w-1/6"
        containerClass="items-center"
      >
        <input
          type="email"
          name="email"
          id="email"
          readOnly
          className="w-full lg:w-5/6 rounded-md p-2 border-2 bg-slate-200 focus:outline-none"
          defaultValue={user?.email || ""}
        />
      </InputFieldWrapper>

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
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </InputFieldWrapper>
      <h3 className="text-green-600 font-semibold text-xl my-4 text-center">
        Total Price - {quantity * ticketPrice}
      </h3>
      <FormSubmitButton
        buttonText="Book Now"
        pendingText="Booking ..."
        className="w-max"
      />
    </form>
  );
};

export default EventBookingForm;
