"use client";

import { useState } from "react";
import CancelPopup from "./CancelPopup";
import { Event, Reservation } from "@prisma/client";

interface CancelButtonProps {
  event: Event;
  booking: Reservation;
}

const CancelButton = ({ event, booking }: CancelButtonProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <button
        type="button"
        className=" bg-custom-red text-text-primary py-2 px-4 rounded-md"
        onClick={() => setOpenPopup((prev) => !prev)}
      >
        Cancel
      </button>
      {openPopup && (
        <CancelPopup
          event={event}
          booking={booking}
          setOpenPopup={setOpenPopup}
        />
      )}
    </div>
  );
};

export default CancelButton;
