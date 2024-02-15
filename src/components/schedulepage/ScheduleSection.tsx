"use client";

import { useState } from "react";
import ScheduleMenu from "./ScheduleMenu";
import ScheduleLegend from "./ScheduleLegend";
import ScheduleRow from "./ScheduleRow";
import { Event } from "@prisma/client";

interface ScheduleSectionProps {
  scheduleData: { id: string; date: Date; events: Event[] }[];
  dateOptions: string[];
}

const ScheduleSection = ({
  scheduleData,
  dateOptions,
}: ScheduleSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // @ts-expect-error groupBy may not work in all browsers
  const daySchedule = Object.groupBy(
    scheduleData[activeIndex].events,
    ({ eventTime }: { eventTime: string }) => eventTime
  );

  return (
    <section className="flex flex-col items-center w-full">
      <ScheduleMenu
        dateOptions={dateOptions}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ScheduleLegend />
      <ul className="w-11/12 lg:w-3/4 max-w-[1248px]">
        {Object.keys(daySchedule)
          .sort()
          .map((time) => (
            <ScheduleRow schedule={daySchedule[time]} key={time} time={time} />
          ))}
      </ul>
    </section>
  );
};

export default ScheduleSection;
