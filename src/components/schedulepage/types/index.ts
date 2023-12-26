export interface ScheduleItemType {
  [key: string]: number | string;
}

export interface ScheduleItemsType {
  time: string;
  list: ScheduleItemType[];
}
