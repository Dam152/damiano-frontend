import { colorMap } from "@/app/assets/js/colorMap";
import React from "react";

export default function Ball({
  width = "128",
  height = "128",
  bg,
  className,
  ...props
}) {
  const bgColor = colorMap[bg] || colorMap.Blue;
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 182 174"
      fill="none"
      {...props}
    >
      <path
        d="M35.7395 156.79C78.0563 179.967 130.459 181.981 161.536 143.604C192.612 105.227 186.677 48.91 148.279 17.8157C109.88 -13.2787 56.4238 1.52767 22.4827 31.0014C-11.4584 60.4752 -6.57719 133.613 35.7395 156.79Z"
        fill={`${bgColor}`}
      />
    </svg>
  );
}
