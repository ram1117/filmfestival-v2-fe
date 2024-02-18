import FormSubmitButton from "@/atoms/FormSubmitButton";

interface CancelBookingFormProps {
  eventId: string;
  bookingId: string;
  quantity: number;
  formAction: (
    eventId: string,
    bookingId: string,
    quantity: number
  ) => Promise<null>;
}

const CancelBookingForm = ({
  eventId,
  bookingId,
  quantity,
  formAction,
}: CancelBookingFormProps) => {
  const cancelActionWithData = formAction.bind(
    null,
    eventId,
    bookingId,
    quantity
  );

  return (
    <form action={cancelActionWithData}>
      <FormSubmitButton
        buttonText="Proceed"
        pendingText="Cancelling.."
        className="text-sm lg:text-base !w-32"
      />
    </form>
  );
};

export default CancelBookingForm;
