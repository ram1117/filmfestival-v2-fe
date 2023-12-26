import DateSelectionButton from "./DateSelectionButton";

interface RadioSelectionProps {
  dateOptions: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScheduleMenu = ({
  dateOptions,
  activeIndex,
  setActiveIndex,
}: RadioSelectionProps) => (
  <div className="grid grid-cols-3 md:grid-cols-5 text-sm lg:text-lg gap-1 lg:gap-4 w-11/12 lg:w-3/4 max-w-[1248px] p-1 lg:p-2 my-4">
    {dateOptions.map((item, index) => (
      <DateSelectionButton
        key={item}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        index={index}
        title={item}
      />
    ))}
  </div>
);

export default ScheduleMenu;
