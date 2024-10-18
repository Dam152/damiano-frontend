import React from "react";
import Text from "../atoms/Text";

export default function Header() {
  return (
    <header className="w-screen bg-[var(--Purple)] flex justify-center py-[24px] px-[32px] max-md:px-[24px] max-sm:px-[16px]">
      <Text tag="h3" size={"headline-6"} weight={"500"}>
        Damiano Ciucci
      </Text>
    </header>
  );
}
