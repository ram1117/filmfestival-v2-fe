"use client";
// import { useFormState } from "react-dom";
import InputFieldWrapper from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";

const EventBookingForm = () => (
  <form className="flex flex-col">
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
        className="w-full lg:w-5/6 rounded-md p-2 border-2"
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
        className="w-full lg:w-5/6 rounded-md p-2 border-2"
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
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </InputFieldWrapper>

    <FormSubmitButton
      buttonText="Book Now"
      pendingText="Booking ..."
      className="w-max"
    />
  </form>
);

export default EventBookingForm;
