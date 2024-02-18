import { colorSelector } from "@/utils/iconscolors";

const ScheduleLegend = () => (
  <div className="w-11/12 lg:w-3/4 max-w-[1248px] my-6 lg:my-8 flex md:justify-end">
    <ul className="flex gap-2 lg:gap-4 flex-wrap items-center justify-between w-max border p-4 rounded-md">
      {colorSelector.map((item) => (
        <li key={item.title} className="flex gap-2 items-center">
          <div
            className="h-3 w-3 lg:h-6 lg:w-6 rounded-md border"
            style={{ background: item.color }}
          />
          <h6 className="text-xs md:text-sm">{item.title}</h6>
        </li>
      ))}
    </ul>
  </div>
);

export default ScheduleLegend;
