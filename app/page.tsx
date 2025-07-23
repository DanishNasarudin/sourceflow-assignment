import Hero from "@/components/custom/hero";
import { data } from "@/lib/data";

export default function Home() {
  const jobData = data;
  return (
    <div className="flex-1">
      <Hero data={jobData.map((j) => j.title)} />
    </div>
  );
}
