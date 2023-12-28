"use client";

import { allAccessData, allAccessInfo } from "@/data/TicketsData";
import { useEffect, useState } from "react";
import AllAccessItem from "./AllAccessItem";
import ImageWrapper from "@/atoms/ImageWrapper";
import PlusIcon from "@public/icons/icon-plus.svg";
import MinusIcon from "@public/icons/icon-minus.svg";

const AllAccessSection = () => {
  const [activeSelection, setActvieSelection] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };
  const handlePlus = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    setQuantity(0);
  }, [activeSelection]);

  return (
    <section className="w-11/12 lg:w-3/4 max-w-[1248px] flex flex-col items-center striped-border p-4 lg:p-8">
      <ul className="grid grid-cols-3 gap-2 md:gap-4 w-full p-1 lg:p-4">
        {allAccessData.map((item) => (
          <AllAccessItem
            activeSelection={activeSelection}
            setActvieSelection={setActvieSelection}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="my-4 lg:my-8 flex justify-between w-full items-center lg:flex-row flex-col gap-4">
        <div className="flex gap-2 items-center lg:flex-row flex-col">
          <h3 className="text-base lg:text-xl">Number of passes </h3>
          <div className="flex gap-2">
            <button
              className="p-1 px-4 rounded-md border-2"
              type="button"
              onClick={handleMinus}
              disabled={quantity === 0}
            >
              <ImageWrapper
                src={MinusIcon}
                alt="Minus icon"
                imageSize="h-4 w-4"
              />
            </button>
            <input
              type="number"
              min={0}
              max={10}
              readOnly
              value={quantity}
              className="w-20 text-center p-1 rounded-md border-2 border-custom-red bg-transparent text-sm lg:text-base"
            />
            <button
              className="p-1 px-4 rounded-md border-2"
              type="button"
              onClick={handlePlus}
              disabled={quantity === 10 || activeSelection === 0}
            >
              <ImageWrapper
                src={PlusIcon}
                alt="Plus icon"
                imageSize="h-4 w-4"
              />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="bg-custom-red text-text-primary font-bild py-2 px-12 text-sm lg:text-base font-bold disabled:opacity-50"
          disabled={quantity === 0 || activeSelection === 0}
        >
          Buy
        </button>
      </div>
      <ul className="w-full text-xs md:text-sm list-disc list-inside my-4 lg:my-8 md:hidden">
        {allAccessInfo.map((item) => (
          <li key={item.id}>{item.detail}</li>
        ))}
      </ul>
    </section>
  );
};

export default AllAccessSection;
