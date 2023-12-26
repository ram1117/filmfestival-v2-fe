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
      ? "text-custom-red font-semibold lg:font-bold bg-custom-red text-text-primary"
      : "border-custom-red";

  return (
    <button
      type="button"
      onClick={() => handleChange(index)}
      className={`${activeStyle} border rounded-md px-2 lg:px-6 py-1`}
    >
      {title}
    </button>
  );
};

export default DateSelectionButton;
