import Link from "next/link";
import React from "react";
import { colorMap } from "@/app/assets/js/colorMap";

export default function PrimaryButton({
  type_button = "link",
  children,
  size = "button-text-2",
  weight = "400",
  className,
  theme,
  bg1,
  bg2,
  ...props
}) {
  const color = colorMap[theme] || colorMap.Purple;
  const bgColor = colorMap[bg1] || colorMap.White;
  const bgColor2 = colorMap[bg2] || colorMap.Pink;

  if (type_button == "link" || type_button != "button") {
    return (
      <Link
        className={`${className} ${size} rounded-[200px] p-[4px] flex w-fit hover:transition-all hover:duration-300 hover:opacity-80`}
        style={{
          color: color,
          fontWeight: `${weight}`,
          backgroundColor: bgColor,
        }}
        {...props}
      >
        <div
          style={{ backgroundColor: bgColor2 }}
          className="rounded-[200px] py-[12px] px-[24px] border-4 border-[var(--Purple)] border-black w-fit"
        >
          {children}
        </div>
      </Link>
    );
  } else {
    return (
      <button
        className={`${className} ${size} rounded-[200px] p-[4px] flex w-fit hover:transition-all hover:duration-300 hover:opacity-80`}
        style={{
          color: color,
          fontWeight: `${weight}`,
          backgroundColor: bgColor,
        }}
        {...props}
      >
        <div
          style={{ backgroundColor: bgColor2 }}
          className="rounded-[200px] py-[12px] px-[24px] border-4 border-[var(--Purple)] border-black w-fit"
        >
          {children}
        </div>
      </button>
    );
  }
}
