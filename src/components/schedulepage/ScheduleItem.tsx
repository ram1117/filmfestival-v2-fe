import ImageWrapper from "@/atoms/ImageWrapper";
import { ScheduleItemType } from "./types";

interface ScheduleItemProps {
  item: ScheduleItemType;
}

const ScheduleItem = ({ item }: ScheduleItemProps) => (
  <li
    className="p-4 rounded-lg flex flex-col gap-1 md:gap-4 border shadow-custom"
    style={{ background: `${item.eventColorCode}` }}
  >
    <div className="flex gap-2 lg:gap-4 items-center">
      <ImageWrapper
        src={item.icon as string}
        alt="Event Icon"
        imageSize="h-4 w-4 lg:h-5 lg:w-5"
      />
      <h4 className="text-lg lg:text-xl font-bold font-roboto-condensed">
        {item.title}
      </h4>
    </div>

    <h5 className="text-sm lg:text-base">{item.description}</h5>
    <h5 className="text-sm lg:text-base italic">{item.venue}</h5>
  </li>
);

export default ScheduleItem;
