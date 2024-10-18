"use client";
import { useState, useEffect } from "react";
import Ball from "../atoms/Ball";
import Text from "../atoms/Text";
import PrimaryButton from "../atoms/PrimaryButton";
import Navbar from "../molecules/Navbar";

export default function Hero() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 3;

      if (window.scrollY > scrollThreshold || window.innerWidth <= 768) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-screen h-screen bg-[var(--Purple)] px-[32px] max-md:pb-[32px] max-sm:pb-[24px] max-[900px]:h-auto max-md:px-[24px] max-sm:px-[16px] relative overflow-x-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="section--container flex flex-col items-center gap-[24px] max-[900px]:pb-[56px] max-[900px]:pt-[64px] max-sm:pt-[114px] max-sm:pb-[96px] z-10">
          <Text size={"headline-1"} weight={"700"} className={"text-center"}>
            We Design Beautiful Products Faster.
          </Text>
          <Text size={"headline-2"} className={"text-center"}>
            A premium design services that’s accessible to all, without the
            premium price tag.
          </Text>
          <PrimaryButton href="">See Plan</PrimaryButton>
        </div>
        <Navbar
          className={`fixed bottom-[48px] max-md:absolute max-md:bottm-[32px] max-sm:bottom-[24px] max-md:right-[24px] max-sm:right-[16px] md:transition-opacity md:duration-500 ${
            showNavbar ? "md:opacity-100" : "md:opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
