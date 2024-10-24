import React from "react";
import Section from "../atoms/Section";
import Text from "../atoms/Text";
import CardConcept from "../molecules/CardConcept";
import Reviews from "../molecules/Reviews";
import Ball from "../atoms/Ball";
import { configBallsConcept } from "@/app/assets/js/balls";

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
    <Section className={"relative overflow-x-hidden"}>
      {configBallsConcept.map((ball, index) => (
        <Ball
          key={index}
          width={ball.width}
          height={ball.height}
          bg={ball.bg}
          className={ball.className}
        />
      ))}

      <div className="section--container flex flex-col items-center gap-[64px] ">
        <Text
          tag="h2"
          size={"headline-3"}
          className={"w-full max-w-[830px] text-center z-10"}
          theme="Purple"
          weight={"700"}
        >
          From Concept to reality in{" "}
          <span className="text-[var(--Blue-light)]">2 days</span> or less
        </Text>
        <div className="w-full flex gap-[16px] flex-wrap z-10">
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
