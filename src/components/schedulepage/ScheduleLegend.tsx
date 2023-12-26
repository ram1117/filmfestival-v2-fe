import { scheduleLegendData } from "@/data/ScheduleData";

const ScheduleLegend = () => (
  <div className="w-11/12 lg:w-3/4 max-w-[1248px] my-6 lg:my-8 flex md:justify-end">
    <ul className="flex gap-2 lg:gap-4 flex-wrap items-center justify-between w-max border p-4 rounded-md">
      {scheduleLegendData.map((item) => (
        <li key={item.id} className="flex gap-2 items-center">
          <div
            className="h-3 w-3 lg:h-6 lg:w-6 rounded-md border"
            style={{ background: item.eventColorCode }}
          />
          <h6 className="text-xs md:text-sm">{item.name}</h6>
        </li>
      ))}
    </ul>
  </div>
);

export default ScheduleLegend;
