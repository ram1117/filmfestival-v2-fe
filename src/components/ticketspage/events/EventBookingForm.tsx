"use client";
// import { useFormState } from "react-dom";
// import { useFormStatus } from "react-dom";

const EventBookingForm = () => (
  <form className="flex flex-col gap-8">
    <div className="flex gap-2 lg:gap-6 items-center">
      <label htmlFor="fullname" className="w-2/5">
        Full Name
      </label>
      <input
        id="fullname"
        name="fullname"
        readOnly
        className="border rounded-md p-2 w-3/5"
      />
    </div>

    <div className="flex gap-2 lg:gap-6 items-center">
      <label htmlFor="fullname" className="w-2/5">
        Email
      </label>
      <input
        id="email"
        name="email"
        readOnly
        className="border rounded-md p-2 w-3/5"
      />
    </div>

    <div className="flex gap-2 lg:gap-6 items-center">
      <label htmlFor="tickets" className="w-2/5">
        No. of Tickets
      </label>
      <select id="tickets" name="tickets" className="w-24 p-2 rounded-md w-3/5">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>

    <button
      type="submit"
      className="bg-custom-red w-max px-6 py-2 rounded-md text-text-primary font-semibold"
    >
      Book Now
    </button>
  </form>
);

export default EventBookingForm;
