"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function LightMode() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return null;
}
