import { colorMap } from "@/app/assets/js/colorMap";
import React from "react";

export default function Section({ children, bg, className, ...props }) {
  const bgColor = colorMap[bg] || colorMap.Cream;
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className={`w-screen h-auto px-[32px] pt-[96px] max-md:px-[24px] max-sm:px-[16px] max-sm:pt-[64px] relative ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
