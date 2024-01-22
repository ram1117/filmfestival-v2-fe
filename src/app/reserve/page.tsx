import TicketsSection from "@/components/ticketspage/AllAccessSection";
import SectionHeader from "@/atoms/SectionHeader";

const ReservePage = () => (
  <main className="flex flex-col items-center py-6 lg:py-12 bg-bg-color-primary min-h-[90vh]">
    <SectionHeader color="text-text-secondary">All Access Pass</SectionHeader>
    <TicketsSection />
  </main>
);

export default ReservePage;
