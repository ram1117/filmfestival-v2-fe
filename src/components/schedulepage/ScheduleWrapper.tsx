import { ScheduleDataType } from "./types";
import ScheduleItem from "./ScheduleItem";

interface ScheduleWrapperProps {
  schedules: ScheduleDataType;
}

const ScheduleWrapper = ({ schedules }: ScheduleWrapperProps) => (
  <section className="w-11/12 lg:w-4/5">
    <div className="flex items-center gap-2 border p-2 lg:p-4 rounded-md">
      <h3 className="text-base">
        {schedules.venue},<span className="mx-1">{schedules.address}</span>
      </h3>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 my-8 lg:my-12">
      {schedules.events.map((item) => (
        <ScheduleItem scheduleItem={item} key={item.id} />
      ))}
    </ul>
  </section>
);

export default ScheduleWrapper;
