"use client";

import { useState } from "react";
import ScheduleMenu from "./ScheduleMenu";
// import ScheduleWrapper from "./ScheduleWrapper";
import scheduleData from "@/data/ScheduleData";

const ScheduleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const scheduleList = [moviesData, workshopData, pressmeetData, awardsData];
  const dateSet = new Set<string>([]);
  scheduleData.forEach((item) => dateSet.add(Object.keys(item)[0]));
  const dateOptions = Array.from(dateSet);

  return (
    <section className="flex flex-col items-center w-full">
      <ScheduleMenu
        dateOptions={dateOptions}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {/* <ScheduleWrapper schedules={scheduleList[activeIndex]} /> */}
    </section>
  );
};

export default ScheduleSection;
