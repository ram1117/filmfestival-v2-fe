import { ScheduleItemType } from "./types";

interface ScheduleItemProps {
  scheduleItem: ScheduleItemType;
}

const ScheduleItem = ({ scheduleItem }: ScheduleItemProps) => (
  <li className="border p-2 lg:p-4 rounded-md flex flex-col items-center shadow-md shadow-slate-200">
    <h2 className="text-lg lg:text-xl font-bold font-lato my-2 text-center">
      {scheduleItem.title}
    </h2>
    <h3 className="font-md text-sm lg:text-base my-2 italic">
      {scheduleItem.location}
    </h3>
    <ul className="flex flex-col my-2 font-light">
      {scheduleItem.time.map((item) => (
        <li key={item}>
          <h3 className="text-sm lg:text-base">{item}</h3>
        </li>
      ))}
    </ul>
  </li>
);

export default ScheduleItem;
