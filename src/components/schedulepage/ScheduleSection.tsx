"use client";

import { useState } from "react";
import RadioSelection from "./RadioSelection";

const ScheduleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col items-center w-full">
      <RadioSelection
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
};

export default ScheduleSection;
