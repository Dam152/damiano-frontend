import React from "react";
import Icons from "../atoms/Icons";
import { colorMap } from "@/app/assets/js/colorMap";
import Text from "../atoms/Text";

export default function CardConcept() {
  return (
    <div className=" p-[32px] bg-[var(--White)] rounded-[24px] flex flex-col gap-[16px] flex-calc">
      <Icons width={"100"} height={"100"} name={"Ellipse"}>
        <text
          x="50"
          y="50"
          textAnchor="middle"
          fill={colorMap.Black}
          dominantBaseline="middle"
          className="number"
        >
          1
        </text>
      </Icons>

      <Text tag="h4" size={"card-title-1"} weight={"700"} theme="Purple">
        Request
      </Text>
      <Text tag="p" size={"body-2"} theme="Black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </div>
  );
}
