import ImageWrapper from "@/atoms/ImageWrapper";
import { Event } from "@prisma/client";
import Link from "next/link";
import { IconSelector } from "@/utils/iconscolors";

interface ScheduleItemProps {
  item: Event;
}

const ScheduleItem = ({ item }: ScheduleItemProps) => (
  <li
    className="p-4 rounded-lg flex flex-col gap-1 md:gap-4 border shadow-custom"
    style={{ background: `${IconSelector[item.eventType].color}` }}
  >
    <div className="flex gap-2 lg:gap-4 items-center">
      <ImageWrapper
        src={IconSelector[item.eventType].icon as string}
        alt={IconSelector[item.eventType].alt}
        imageSize="h-4 w-4 lg:h-5 lg:w-5"
      />
      <h4 className="text-lg lg:text-xl font-bold font-roboto-condensed">
        {item.title}
      </h4>
    </div>

    <h5 className="text-sm lg:text-base">{item.description}</h5>
    <h5 className="text-sm lg:text-base italic">{item.venue}</h5>

    <Link href={`/reserve/event/${item.id}`}>
      <div className="w-full flex justify-end">
        <button
          className="text-xs lg:text-sm bg-custom-red text-white p-2 rounded-md font-bold"
          type="button"
        >
          Reserve
        </button>
      </div>
    </Link>
  </li>
);

export default ScheduleItem;
