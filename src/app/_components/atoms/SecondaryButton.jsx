import React from "react";
import Link from "next/link";
import { colorMap } from "@/app/assets/js/colorMap";

export default function SecondaryButton({
  type_button = "link",
  children,
  size = "button-text-1",
  weight = "700",
  className,
  theme,
  bg1,
  ...props
}) {
  const color = colorMap[theme] || colorMap.White;
  const bgColor = colorMap[bg1] || colorMap.Black;

  if (type_button == "link" || type_button != "button") {
    return (
      <Link
        className={`${className} ${size} rounded-[48px] p-[24px] flex w-fit hover:transition-all hover:duration-300 hover:opacity-80`}
        style={{
          color: color,
          fontWeight: `${weight}`,
          backgroundColor: bgColor,
        }}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${className} ${size} rounded-[48px] p-[24px] flex w-fit hover:transition-all hover:duration-300 hover:opacity-80`}
        style={{
          color: color,
          fontWeight: `${weight}`,
          backgroundColor: bgColor,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
}
