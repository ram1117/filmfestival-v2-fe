"use client";

import { useState } from "react";
import CancelPopup from "./CancelPopup";

interface CancelButtonProps {
  cancelForm: React.ReactNode;
  popupContent: React.ReactNode;
}

const CancelButton = ({ cancelForm, popupContent }: CancelButtonProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <button
        type="button"
        className=" bg-custom-red text-text-primary py-2 px-4 rounded-md font-semibold"
        onClick={() => setOpenPopup((prev) => !prev)}
      >
        Cancel
      </button>
      {openPopup && (
        <CancelPopup
          popupContent={popupContent}
          setOpenPopup={setOpenPopup}
          cancelForm={cancelForm}
        />
      )}
    </div>
  );
};

export default CancelButton;
