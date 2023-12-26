interface RadioButtonProps {
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  title: string;
}

const DateSelectionButton = ({
  index,
  activeIndex,
  setActiveIndex,
  title,
}: RadioButtonProps) => {
  const handleChange = (index: number) => {
    setActiveIndex(index);
  };

  const activeStyle =
    activeIndex === index
      ? "text-custom-red font-black bg-custom-red text-text-primary"
      : "bg-button-light";

  return (
    <button
      type="button"
      onClick={() => handleChange(index)}
      className={`${activeStyle} border rounded-md p-2 lg:p-4`}
    >
      {title}
    </button>
  );
};

export default DateSelectionButton;
