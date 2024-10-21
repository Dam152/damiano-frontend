"use client";
import { useState, useEffect } from "react";
import Text from "../atoms/Text";
import PrimaryButton from "../atoms/PrimaryButton";
import Navbar from "../molecules/Navbar";
import Icons from "../atoms/Icons";
import NavbarResponsive from "../molecules/NavbarResponsive";
import { useMenuContext } from "@/app/assets/js/contextMenu";
import Ball from "../atoms/Ball";
import { configBalls } from "@/app/assets/js/balls";

export default function Hero() {
  const [showNavbar, setShowNavbar] = useState(false);
  const { open, setIsOpen } = useMenuContext();
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 16;

      if (window.scrollY > scrollThreshold) {
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <section className="w-screen h-screen bg-[var(--Purple)] px-[32px] max-md:pb-[32px] max-sm:pb-[24px] max-[900px]:h-auto max-md:px-[24px] max-sm:px-[16px] overflow-x-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center relative ">
        {configBalls.map((ball, index) => (
          <Ball
            key={index}
            width={ball.width}
            height={ball.height}
            className={ball.className}
            bg={ball.bg}
          />
        ))}
        <div className="section--container flex flex-col items-center gap-[24px] max-[900px]:pb-[56px] max-[900px]:pt-[64px] max-sm:pt-[114px] max-sm:pb-[96px] z-10 ">
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
          className={`fixed bottom-[48px] max-md:hidden transition-opacity duration-500 ${
            showNavbar ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className="hidden p-[24px] bg-[var(--Black)] rounded-[48px] cursor-pointer ml-auto max-md:block"
          onClick={() => setIsOpen(!open)}
        >
          <Icons name={"menu"} width={"32"} height={"24.32"} />
        </div>
        {open && <NavbarResponsive />}
      </div>
    </section>
  );
}
