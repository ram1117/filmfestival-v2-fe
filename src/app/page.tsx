import HeroSection from "@/components/homepage/HeroSection";
import ProgramSection from "@/components/homepage/ProgramSection";
import JurySection from "@/components/homepage/JurySection";

export default function Home() {
  console.log(process.env.DB_TYPE);

  return (
    <main>
      <HeroSection />
      <ProgramSection />
      <JurySection />
    </main>
  );
}
