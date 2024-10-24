import React from "react";
import Section from "../atoms/Section";
import Text from "../atoms/Text";
import CardConcept from "../molecules/CardConcept";
import Reviews from "../molecules/Reviews";

export default function Concept() {
  const concepts = [
    {
      id: 0,
      number: 1,
      title: "Request",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 1,
      number: 2,
      title: "Request",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      number: 3,
      title: "Request",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
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
          {concepts.map((c) => (
            <CardConcept
              key={c.id}
              number={c.number}
              title={c.title}
              text={c.text}
            ></CardConcept>
          ))}
        </div>
        <Reviews></Reviews>
      </div>
    </Section>
  );
}
