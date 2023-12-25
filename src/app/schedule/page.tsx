import ScheduleSection from "@/components/schedulepage/ScheduleSection";
import SectionHeader from "@/atoms/SectionHeader";

const SchedulePage = () => (
  <main className="min-h-[90vh] py-12 flex flex-col items-center text-text-secondary bg-bg-color-primary">
    <SectionHeader color="text-text-secondary">Events Schedule</SectionHeader>
    <ScheduleSection />
  </main>
);

export default SchedulePage;
