"use client";
// import { useFormState } from "react-dom";
import InputField from "@/atoms/InputField";
import FormSubmitButton from "@/atoms/FormSubmitButton";

const EventBookingForm = () => (
  <form className="flex flex-col gap-8">
    <InputField
      label="Full Name"
      type="text"
      id="fullname"
      name="fullname"
      labelClass="w-full lg:w-1/6"
      inputClass="w-full lg:w-5/6 bg-slate-100"
      containerClass="lg:gap-6 items-center"
      required
    />
    <InputField
      label="Email"
      type="text"
      readonly
      id="email"
      name="email"
      labelClass="w-full lg:w-1/6"
      inputClass="w-full lg:w-5/6 bg-slate-100"
      containerClass="lg:gap-6 items-center"
    />

    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-center">
      <label htmlFor="tickets" className="w-full lg:w-1/6">
        No. of Tickets
      </label>
      <select
        id="tickets"
        name="tickets"
        className="w-24 p-2 rounded-md w-full md:w-5/6 bg-white border"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <FormSubmitButton
      buttonText="Book Now"
      pendingText="Booking ..."
      className="w-max"
    />
  </form>
);

export default EventBookingForm;
