import React from "react";
import Section from "../atoms/Section";
import { Yaldevi } from "@next/font/google";
import Text from "../atoms/Text";
import Ball from "../atoms/Ball";

export default function About() {
  return (
    <Section id="about">
      <Ball
        bg={"BlueLight"}
        className={
          "absolute left-[-48px] top-[48px] max-sm:left-[-96px] max-sm:top-[24px]"
        }
      ></Ball>
      <Ball
        width="32px"
        height="32px"
        bg={"Fucsia"}
        className={"absolute top-[135px] left-[145px] max-sm:hidden"}
      ></Ball>
      <Ball
        bg={"YellowLight"}
        width="32"
        height="32"
        className={
          "absolute top-[135px] right-[145px] max-md:right-[-16px] max-sm:top-[48px]"
        }
      ></Ball>
      <div className="w-full flex flex-col gap-[48px] items-center section--container max-sm:gap-[24px]">
        <Text
          tag="h2"
          size={"headline-3"}
          theme="Purple"
          weight={"700"}
          className={"text-center"}
        >
          About me
        </Text>
        <Text
          tag="p"
          size={"body-1"}
          theme="Black"
          className={"text-center"}
          weight={"400"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    </Section>
  );
}
