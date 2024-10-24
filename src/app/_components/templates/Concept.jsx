import React from "react";
import Section from "../atoms/Section";
import Text from "../atoms/Text";
import CardConcept from "../molecules/CardConcept";
import Icons from "../atoms/Icons";

export default function Concept() {
  return (
    <Section>
      <div className="section--container flex flex-col items-center gap-[64px]">
        <Text
          tag="h2"
          size={"headline-3"}
          className={"w-full max-w-[830px] text-center"}
          theme="Purple"
          weight={"700"}
        >
          From Concept to relality in{" "}
          <span className="text-[var(--Blue-light)]">2 days</span> or less
        </Text>
        <div className="w-full flex gap-[16px] flex-wrap">
          <CardConcept></CardConcept>
          <CardConcept></CardConcept>
          <CardConcept></CardConcept>
        </div>

        {/* <div className="w-full bg-[var(--Pink-light)] px-[24px] py-[48px] rounded-[48px] flex flex-col gap-[32px] max-sm:px-[16px] max-sm:py-[24px] max-sm:gap-[24px] max-sm:flex-col-reverse">
          <div className="w-full flex gap-[24px] justify-between max-md:flex-col max-sm:justify-start ">
            <Icons name={"Review"} width={"65"} height={"51"}></Icons>
            <Text
              tag="p"
              theme="Purple"
              size={"review-text"}
              weight={"600"}
              className={"w-full max-w-[1173px]"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </div>
        </div> */}
      </div>
    </Section>
  );
}
