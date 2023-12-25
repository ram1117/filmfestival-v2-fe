"use client";

import { useState } from "react";
import RadioSelection from "./RadioSelection";
import ScheduleWrapper from "./ScheduleWrapper";
import {
  moviesData,
  workshopData,
  pressmeetData,
  awardsData,
} from "@/data/ScheduleData";

const ScheduleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scheduleList = [moviesData, workshopData, pressmeetData, awardsData];
  return (
    <section className="flex flex-col items-center w-full">
      <RadioSelection
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ScheduleWrapper schedules={scheduleList[activeIndex]} />
    </section>
  );
};

export default ScheduleSection;
