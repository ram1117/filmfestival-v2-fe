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
        buttonText="Proceed"
        pendingText="Cancelling.."
        className="text-sm lg:text-base !w-32"
      />
    </form>
  );
};

export default CancelBookingForm;
