"use client";

interface CancelPopupProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popupContent: React.ReactNode;
  cancelForm: React.ReactNode;
}

const CancelPopup = ({
  setOpenPopup,
  popupContent,
  cancelForm,
}: CancelPopupProps) => {
  return (
    <div className="fixed inset-0 min-h-screen w-full flex items-center justify-center backdrop-blur-sm">
      <div className="w-11/12 max-w-[1024px] min-h-[20vh] bg-text-primary shadow-md shadow-slate-200 p-4 lg:p-6 rounded-md">
        <h2 className="textlg lg:text-xl font-semibold my-4">
          Do you want to proceed?
        </h2>
        {popupContent}
        <div className="flex gap-1 md:gap-4 flex-col md:flex-row md:justify-end items-center">
          <button
            type="button"
            onClick={() => setOpenPopup((prev) => !prev)}
            className="w-32 border bg-gray-300 p-2 rounded-md"
          >
            Cancel
          </button>
          {cancelForm}
        </div>
      </div>
    </div>
  );
};

export default CancelPopup;
