"use client";

import { useState } from "react";
import ScheduleMenu from "./ScheduleMenu";
import ScheduleRow from "./ScheduleRow";
import scheduleData from "@/data/ScheduleData";

const ScheduleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dateSet = new Set<string>([]);
  scheduleData.forEach((item) => dateSet.add(item.date));
  const dateOptions = Array.from(dateSet);

  return (
    <section className="flex flex-col items-center w-full">
      <ScheduleMenu
        dateOptions={dateOptions}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ul className="w-11/12 lg:w-3/4 max-w-[1248px]">
        {scheduleData[activeIndex].events.map((event) => (
          <ScheduleRow schedule={event} key={event.time} />
        ))}
      </ul>
    </section>
  );
};

export default ScheduleSection;
