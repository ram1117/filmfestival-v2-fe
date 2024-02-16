import FormSubmitButton from "@/atoms/FormSubmitButton";
import cancelBookingAction from "@/actions/cancelBookingAction";

interface CancelBookingFormProps {
  eventId: string;
  bookingId: string;
  quantity: number;
}

const CancelBookingForm = ({
  eventId,
  bookingId,
  quantity,
}: CancelBookingFormProps) => {
  const cancelActionWithData = cancelBookingAction.bind(
    null,
    eventId,
    bookingId,
    quantity
  );

  return (
    <form action={cancelActionWithData}>
      <FormSubmitButton
        buttonText="Cancel"
        pendingText="Cancelling.."
        className="w-1/2 lg:!w-full text-sm lg:text-base"
      />
    </form>
  );
};

export default CancelBookingForm;
