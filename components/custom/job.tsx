import { cn } from "@/lib/utils";
import { Job as JobType } from "@/types/job";
import { format } from "date-fns";
import { Banknote, Cog, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const colors = ["bg-custom-yellow", "bg-custom-blue", "bg-custom-orange"];

export default function Job({ data, index }: { data: JobType; index: number }) {
  return (
    <div
      className={cn(
        "p-8 rounded-4xl text-custom-blue flex flex-col gap-5 min-h-full select-none",
        colors[index % colors.length],
        colors[index % colors.length].includes("blue") && "text-background"
      )}
    >
      <div className="flex gap-2 text-sm items-center p-1 px-2 bg-background w-min rounded-md text-custom-blue cursor-default">
        <Cog size={14} /> {data.stack}
      </div>
      <h3 className="text-3xl font-bold cursor-default">{data.title}</h3>
      <div className="flex flex-col gap-2 cursor-default">
        <div className="flex gap-2 items-center">
          <MapPin size={16} /> {data.location}
        </div>
        <div className="flex gap-2 items-center">
          <Banknote size={16} /> £{data.salary.toLocaleString()}
        </div>
      </div>
      <p className="cursor-default">{data.shortDescription}</p>
      <div className="flex-1"></div>
      <Button
        variant={"secondary"}
        className="text-custom-blue font-medium py-6"
      >
        View this job
      </Button>
      <p className="font-light cursor-default">
        Posted on {format(data.createdAt, "dd/MM/yyyy")}
      </p>
    </div>
  );
}
