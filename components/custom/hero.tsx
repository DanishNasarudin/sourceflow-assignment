import hero from "@/public/hero.jpg";
import HeroInput from "./hero-input";
import SmartImage from "./smart-image";

export default function Hero({ data }: { data: string[] }) {
  return (
    <div className="h-[min(42rem,max(max-content,50vw))] bg-custom-blue overflow-clip">
      <div className="relative max-w-[1200px] w-full h-full mx-auto p-4 md:p-5 py-14! flex md:flex-row flex-col items-center gap-8">
        <div className="flex-1 flex flex-col justify-center gap-8 h-full z-[2]">
          <div className="flex flex-col gap-2 md:items-start items-center md:text-start text-center select-none cursor-default">
            <p className="text-background">Software Recruitment Specialists</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-background">
              Elevate your career
            </h1>
          </div>
          <HeroInput lists={data} />
        </div>
        <div className="flex-1 h-full flex items-center z-[2] md:w-auto w-[60vw] select-none">
          <SmartImage
            src={hero.src}
            alt="Hero"
            height={hero.height}
            width={hero.width}
            priority
            className="aspect-[25/24] w-full object-cover object-[100%_50%] rounded-4xl pointer-events-none"
          />
        </div>
        <div className="w-72 aspect-square bg-custom-orange rounded-full absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2"></div>
        <div className="w-72 aspect-square bg-custom-yellow rounded-full absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2"></div>
      </div>
    </div>
  );
}
