export interface ScheduleItemType {
  id: number;
  title: string;
  time: string[];
  location: string;
}

export interface ScheduleDataType {
  name: string;
  venue: string;
  address: string;
  events: ScheduleItemType[];
}
