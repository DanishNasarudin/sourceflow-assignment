import Client from "@/components/custom/client";
import Hero from "@/components/custom/hero";
import Jobs from "@/components/custom/jobs";
import { data } from "@/lib/data";

export default function Home() {
  const jobData = data;
  return (
    <div className="flex-1">
      <Hero data={jobData.map((j) => j.title)} />
      <Client />
      <Jobs data={jobData} />
      <section className="h-[200px]"></section>
    </div>
  );
}
