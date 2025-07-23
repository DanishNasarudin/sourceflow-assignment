"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  value?: string;
  onValueChange?: (newValue: string) => void;
  className?: string;
  lists?: string[];
};

export default function HeroInput({
  value,
  onValueChange = () => {},
  className,
  lists,
}: Props) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const suggestions = useMemo(() => {
    if (!lists || !input) return [];
    if (lists.map((l) => l.toLowerCase()).includes(input.toLowerCase()))
      return [];

    return lists.filter((l) => l.toLowerCase().includes(input.toLowerCase()));
  }, [lists, input]);

  const handleChange = useCallback((e: string) => {
    setInput(e);
    onValueChange(e);
  }, []);

  useEffect(() => {
    if (!value) return;
    setInput(value);
  }, [value]);

  return (
    <div className="relative">
      <Popover open={isFocused && suggestions.length > 0}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "w-full bg-background rounded-full flex overflow-clip",
              className
            )}
            onClick={(e) => e.preventDefault()}
          >
            <input
              className="w-full px-4"
              placeholder="E.g. networking"
              value={input}
              onChange={(e) => {
                e.stopPropagation();
                handleChange(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              type="button"
              className="cursor-pointer font-medium text-[#25210E] bg-custom-yellow hover:bg-custom-yellow/80 p-4 px-5 whitespace-nowrap transition-all"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Search jobs
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="rounded-xl p-0 overflow-clip"
          sideOffset={8}
          align="start"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ScrollArea className={cn(suggestions.length >= 4 && "h-[200px]")}>
            {suggestions.map((s, idx) => (
              <div
                key={idx}
                className="hover:bg-foreground/10 p-2 m-1 rounded-lg cursor-pointer"
                onClick={() => {
                  setInput(s);
                }}
              >
                {s}
              </div>
            ))}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
