import SectionHeader from "@/atoms/SectionHeader";
import VenueSection from "@/components/venues/VenueSection";

const VenuesPage = () => (
  <section className="min-h-max lg:min-h-[90vh] bg-bg-color-primary text-text-secondary py-6 lg:py-12 flex flex-col items-center">
    <SectionHeader color="text-text-secondary">Event Venues</SectionHeader>
    <VenueSection />
  </section>
);

export default VenuesPage;
