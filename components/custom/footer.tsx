"use client";
import { Nav } from "@/types/navbar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import { Button } from "../ui/button";

export default function Footer({ data }: { data: Nav[] }) {
  const { width = 0 } = useWindowSize();
  const isMobile = useMemo(() => width < 1280, [width]);

  return (
    <div className="bg-custom-blue text-background select-none">
      <div className="max-w-[1200px] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 gap-y-12 p-4 md:p-5 py-14!">
        <div className="col-span-1 flex flex-col gap-0">
          <Link
            href={"/"}
            className="text-background font-bold text-xl whitespace-nowrap"
          >
            {isMobile ? "SR Co." : "Software Recruitment co."}
          </Link>
          <div className="">
            <Link href={"#"}>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-background/5 dark:hover:bg-background/5"
              >
                <Linkedin
                  className="fill-background hover:fill-background/80 stroke-transparent"
                  size={20}
                />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-background/5 dark:hover:bg-background/5"
              >
                <Facebook
                  className="fill-background hover:fill-background/80 stroke-transparent"
                  size={20}
                />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-background/5 dark:hover:bg-background/5"
              >
                <Instagram
                  className="stroke-background hover:stroke-background/80"
                  size={20}
                />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-background/5 dark:hover:bg-background/5"
              >
                <Twitter
                  className="fill-background hover:fill-background/80 stroke-transparent"
                  size={20}
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-4 gap-y-12">
          {data.length > 0 &&
            data.map((d, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-3xl font-bold cursor-default">{d.title}</h3>
                <div className="flex flex-col gap-4">
                  {d.children &&
                    d.children.map((c, idxC) => (
                      <Link
                        key={idxC}
                        href={c.href || "#"}
                        className="hover:text-background/80 transition-all whitespace-nowrap w-min"
                      >
                        {c.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
