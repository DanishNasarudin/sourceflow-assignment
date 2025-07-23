"use client";
import { Nav } from "@/types/navbar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Triangle, X } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar({ data }: { data: Nav[] }) {
  const { width = 0 } = useWindowSize();
  const isMobile = useMemo(() => width < 1280, [width]);

  return (
    <div className="sticky top-0 z-[10] bg-background/80 backdrop-blur-md">
      <div className="flex gap-2 p-4 md:p-5 items-center justify-between max-w-[1200px] w-full mx-auto">
        <div className="flex gap-8 items-center">
          <Link
            href={"/"}
            className="text-custom-blue font-bold text-xl whitespace-nowrap"
          >
            {isMobile ? "SR Co." : "Software Recruitment co."}
          </Link>
          {!isMobile && (
            <div className="flex gap-7 items-center">
              {data.length > 0 &&
                data.map((d, idx) => {
                  if (d.children && d.children.length > 0) {
                    return (
                      <DropdownMenu key={idx}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant={"ghost"}
                            className="data-[state=open]:[&>svg]:-rotate-180 px-0! hover:bg-transparent dark:hover:bg-transparent hover:text-foreground/60"
                          >
                            {d.title}{" "}
                            <Triangle className="fill-custom-blue stroke-transparent -rotate-90 !h-3 transition-all" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            {d.children.map((c, idxC) => (
                              <DropdownMenuItem key={idxC}>
                                <Link
                                  href={c.href || "#"}
                                  className="text-base"
                                >
                                  {c.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  } else {
                    return (
                      <Link key={idx} href={d.href || "#"}>
                        <Button
                          variant={"ghost"}
                          className="px-0! hover:bg-transparent dark:hover:bg-transparent hover:text-foreground/60"
                        >
                          {d.title}
                        </Button>
                      </Link>
                    );
                  }
                })}
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <Button className="bg-custom-yellow hover:bg-custom-yellow/80 text-[#451B09] font-bold text-base p-3 px-5">
            Upload CV
          </Button>
          {!isMobile && (
            <Button className="bg-custom-orange hover:bg-custom-orange/80 text-[#451B09] font-bold text-base p-3 px-5">
              Contact us
            </Button>
          )}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className="!p-1">
                  <Menu className="stroke-custom-blue stroke-3 scale-150" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full bg-background/80 backdrop-blur-md">
                <VisuallyHidden>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </VisuallyHidden>
                <div className="flex flex-col h-full w-full">
                  <div className="flex gap-2 p-4 md:p-5 items-center justify-between">
                    <Link
                      href={"/"}
                      className="text-custom-blue font-bold text-xl whitespace-nowrap"
                    >
                      Software Recruitment co.
                    </Link>
                    <SheetClose asChild>
                      <Button variant={"ghost"} size={"icon"} className="!p-1">
                        <X className="stroke-custom-blue stroke-3 scale-150" />
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="p-4 md:p-5 pt-0 md:pt-0 flex flex-col w-full gap-2 flex-1">
                    {data.map((d, idx) => {
                      if (d.children && d.children.length > 0) {
                        return (
                          <Accordion key={idx} type="multiple">
                            <AccordionItem value={d.title}>
                              <AccordionTrigger className="py-2 hover:no-underline cursor-pointer">
                                {d.title}
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col w-full gap-6 pt-4 pb-2">
                                {d.children.map((c, idxC) => (
                                  <SheetClose key={idxC} asChild>
                                    <Link href={c.href || "#"}>{c.title}</Link>
                                  </SheetClose>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        );
                      } else {
                        return (
                          <SheetClose key={idx} asChild>
                            <Link
                              href={d.href || "#"}
                              className="text-sm py-2 font-medium"
                            >
                              {d.title}
                            </Link>
                          </SheetClose>
                        );
                      }
                    })}
                    <Button className="bg-custom-orange hover:bg-custom-orange/80 text-[#451B09] font-bold text-base p-3 px-5 mt-4">
                      Contact us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
}
