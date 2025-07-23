"use client";
import { Nav } from "@/types/navbar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

export default function Footer({ data }: { data: Nav[] }) {
  const { width = 0 } = useWindowSize();
  const isMobile = useMemo(() => width < 1280, [width]);

  return (
    <div className="bg-custom-blue text-background select-none">
      <div className="max-w-[1200px] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-2 gap-y-12 p-4 md:p-5 py-14!">
        <div className="col-span-1 space-y-2">
          <Link
            href={"/"}
            className="text-background font-bold text-xl whitespace-nowrap"
          >
            {isMobile ? "SR Co." : "Software Recruitment co."}
          </Link>
          <div className="flex gap-2">
            <Link href={"#"}>
              <Linkedin className="fill-background stroke-transparent" />
            </Link>
            <Link href={"#"}>
              <Facebook className="fill-background stroke-transparent" />
            </Link>
            <Link href={"#"}>
              <Instagram className="stroke-background" />
            </Link>
            <Link href={"#"}>
              <Twitter className="fill-background stroke-transparent" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-4 gap-y-12">
          {data.length > 0 &&
            data.map((d, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-3xl font-bold">{d.title}</h3>
                <div className="flex flex-col gap-4">
                  {d.children &&
                    d.children.map((c, idxC) => (
                      <Link
                        key={idxC}
                        href={c.href || "#"}
                        className="hover:text-background/80 transition-all"
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
