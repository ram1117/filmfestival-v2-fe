import SectionHeader from "@/atoms/SectionHeader";
import { db } from "@/db";
import ScheduleSection from "@/components/schedulepage/ScheduleSection";

const SchedulePage = async () => {
  const events = await db.schedule.findMany({
    orderBy: { date: "asc" },
    include: { events: true },
  });

  const dateOptions = events.map((date) =>
    date.date.toLocaleString("default", { day: "2-digit", month: "short" })
  );

  return (
    <main className="min-h-[90vh] py-12 flex flex-col items-center text-text-secondary bg-bg-color-primary">
      <SectionHeader color="text-text-secondary">Events Schedule</SectionHeader>
      <ScheduleSection scheduleData={events} dateOptions={dateOptions} />
    </main>
  );
};

export default SchedulePage;
