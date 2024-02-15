import ScheduleItem from "./ScheduleItem";
import { Event } from "@prisma/client";

interface ScheduleRowProps {
  schedule: Event[];
  time: string;
}

const ScheduleRow = ({ schedule, time }: ScheduleRowProps) => {
  const renderItem = schedule.length !== 0;

  return (
    <li className="flex border-y border-y-gray-light border-dotted p-2 justify-start">
      <h4 className="w-3/12 md:w-1/12 text-xs md:text-sm">
        {new Date(time).toLocaleTimeString().toLocaleUpperCase()}
      </h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 w-9/12 md:w-11/12">
        {!renderItem && <li className="p-2 lg:p-4 h-24" />}
        {renderItem &&
          schedule.map((item) => <ScheduleItem item={item} key={item.id} />)}
      </ul>
    </li>
  );
};

export default ScheduleRow;
