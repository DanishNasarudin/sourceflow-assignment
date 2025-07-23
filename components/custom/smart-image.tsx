"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface SmartImageProps extends ImageProps {
  themeSrc?: { light: string; dark: string };
}

export default function SmartImage({
  themeSrc,
  src,
  className,
  ...props
}: SmartImageProps) {
  const { theme } = useTheme();
  const [srcDisplay, setSrc] = useState(src);

  useEffect(() => {
    if (!themeSrc) return;
    setSrc(theme === "light" ? themeSrc.light : themeSrc.dark);
  }, [theme, themeSrc]);

  return (
    <Image
      {...props}
      src={srcDisplay}
      data-loaded="false"
      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
      className={cn(
        "data-[loaded=false]:bg-foreground/30 data-[loaded=false]:animate-pulse w-full h-auto",
        className
      )}
    />
  );
}
