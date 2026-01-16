import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import DatasetGrid from "@/components/DatasetGrid";
import LeaderboardTable from "@/components/LeaderboardTable";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <LeaderboardTable />
      <DatasetGrid />
      <About />
    </div>
  );
}
