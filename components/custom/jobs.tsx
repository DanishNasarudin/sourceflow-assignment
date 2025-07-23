"use client";
import { cn } from "@/lib/utils";
import { Job as JobType } from "@/types/job";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Job from "./job";

export default function Jobs({ data }: { data: JobType[] }) {
  const { width = 0 } = useWindowSize();
  const slidesToScroll = useMemo(
    () => (width < 768 ? (width < 640 ? 1 : 2) : 3),
    [width]
  );

  if (width === 0) return null;

  return (
    <div className="bg-[#D7E7FB]">
      <div className="max-w-[1200px] w-full mx-auto p-4 md:p-5 py-14! pb-28! flex flex-col items-center gap-8">
        <h2 className="text-4xl font-bold text-[#0E2152]">Latest Jobs</h2>
        <Carousel className="w-full" opts={{ slidesToScroll }}>
          <CarouselContent>
            {data.length > 0 &&
              data.map((d, idx) => (
                <CarouselItem
                  key={idx}
                  className={cn(
                    "grow-1",
                    slidesToScroll === 3
                      ? "basis-1/3"
                      : slidesToScroll === 2
                      ? "basis-1/2"
                      : ""
                  )}
                >
                  <Job data={d} index={idx} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="top-full left-0 translate-y-[105%]" />
          <CarouselNext className="top-full left-0 translate-x-4/3 translate-y-[105%]" />
        </Carousel>
        <div className="flex justify-end w-full">
          <Button
            variant={"ghost"}
            className="w-min text-[#0E2152] hover:bg-foreground/5"
          >
            View more jobs
          </Button>
        </div>
      </div>
    </div>
  );
}
