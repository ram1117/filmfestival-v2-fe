interface AllAccessItemProps {
  activeSelection: number;
  setActvieSelection: React.Dispatch<React.SetStateAction<number>>;
  item: { [key: string]: number | string };
}

const AllAccessItem = ({
  activeSelection,
  setActvieSelection,
  item,
}: AllAccessItemProps) => {
  const activeRadioStyle =
    activeSelection === item.id ? "accent-custom-red" : "accent-gray-dark";

  const activeBg =
    activeSelection === item.id ? "bg-custom-red-light" : "bg-none";

  return (
    <li
      className={`flex gap-1 lg:gap-4 flex-col items-center border rounded-lg ${activeBg}`}
    >
      <label
        htmlFor={`access-item-${item.id}`}
        className="font-lato flex flex-col items-center gap-2 lg:gap-4 w-full h-full py-4 lg:py-8"
      >
        <h4 className="text-sm lg:text-lg font-bold">{item.name}</h4>
        <h4 className="text-sm lg:text-lg font-semibold text-custom-red">
          ₹ {item.price}
        </h4>
        <input
          type="radio"
          checked={activeSelection === item.id}
          id={`access-item-${item.id}`}
          onChange={() => setActvieSelection(item.id as number)}
          className={`h-3 w-3 lg:h-5 lg:w-5 ${activeRadioStyle}`}
        />
      </label>
    </li>
  );
};

export default AllAccessItem;
