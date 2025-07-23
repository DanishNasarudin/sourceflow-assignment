import { logo } from "@/lib/data";
import SmartImage from "./smart-image";

export default function Client() {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center p-4 md:p-5 py-14! pb-18! gap-8 select-none">
      <p className="text-foreground/30 cursor-default">Who we work with</p>
      <div className="flex overflow-x-hidden gap-14 w-full relative">
        <div className="flex whitespace-nowrap shrink-0 gap-14 animate-marquee">
          {logo.length > 0 &&
            logo.map((l, idx) => (
              <SmartImage
                key={idx}
                src={l.image.src}
                alt={l.name}
                height={l.image.height}
                width={l.image.width}
                className="object-cover h-5 w-min pointer-events-none select-none"
              />
            ))}
        </div>
        <div className="flex whitespace-nowrap shrink-0 gap-14 animate-marquee">
          {logo.length > 0 &&
            logo.map((l, idx) => (
              <SmartImage
                key={idx}
                src={l.image.src}
                alt={l.name}
                height={l.image.height}
                width={l.image.width}
                className="object-cover h-5 w-min pointer-events-none select-none"
              />
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
