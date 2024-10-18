import { colorMap } from "@/app/assets/js/colorMap";
import React from "react";
import Link from "next/link";

export default function Text({
  children,
  tag = "p",
  size,
  weight,
  theme = "White",
  className,
  href = "",
  ...props
}) {
  const color = colorMap[theme] || colorMap.White;

  if (tag === "link") {
    return (
      <Link
        href={href}
        className={`${size} ${className}`}
        style={{ color: color, fontWeight: weight }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  const Tag = tag;
  return (
    <Tag
      className={`${size} ${className}`}
      style={{ color: color, fontWeight: weight }}
      {...props}
    >
      {children}
    </Tag>
  );
}
