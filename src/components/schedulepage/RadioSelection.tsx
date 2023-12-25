interface RadioSelectionProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const RadioSelection = ({
  activeIndex,
  setActiveIndex,
}: RadioSelectionProps) => {
  const handleChange = (index: number) => {
    setActiveIndex(index);
  };

  const findActiveStyle = (index: number) => {
    return activeIndex === index
      ? "text-custom-red font-semibold lg:font-bold"
      : "";
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 text-sm lg:text-lg gap-1 lg:gap-4 w-11/12 lg:w-3/4 max-w-[1248px] p-1 lg:p-2 my-4">
      <div className="flex gap-2 items-center">
        <input
          className="accent-custom-red h-4 w-4 lg:h-5 lg:w-5"
          type="radio"
          onChange={() => handleChange(0)}
          name="active-index"
          id="radio-screen"
          checked={activeIndex === 0}
        />
        <label htmlFor="radio-screen" className={findActiveStyle(0)}>
          Screenings
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="accent-custom-red h-4 w-4 lg:h-5 lg:w-5"
          type="radio"
          onChange={() => handleChange(1)}
          name="active-index"
          id="radio-workshop"
          checked={activeIndex === 1}
        />
        <label htmlFor="radio-workshop" className={findActiveStyle(1)}>
          Workshops
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="accent-custom-red h-4 w-4 lg:h-5 lg:w-5"
          type="radio"
          onChange={() => handleChange(2)}
          name="active-index"
          id="radio-press"
          checked={activeIndex === 2}
        />
        <label htmlFor="radio-press" className={findActiveStyle(2)}>
          Press Meets
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="accent-custom-red h-4 w-4 lg:h-5 lg:w-5"
          type="radio"
          onChange={() => handleChange(3)}
          name="active-index"
          id="radio-awards"
          checked={activeIndex === 3}
        />
        <label htmlFor="radio-awards" className={findActiveStyle(3)}>
          Awards Ceremony
        </label>
      </div>
    </div>
  );
};

export default RadioSelection;
