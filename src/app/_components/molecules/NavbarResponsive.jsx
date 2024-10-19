import React, { useState } from "react";
import Text from "../atoms/Text";
import Icons from "../atoms/Icons";
import { useMenuContext } from "@/app/assets/js/contextMenu";

export default function NavbarResponsive() {
  const { setIsOpen } = useMenuContext();
  const [isClosing, setIsClosing] = useState(false);

  const menu = [
    { name: "About Me", path: "#" },
    { name: "Why Design Craft", path: "#" },
    { name: "Services", path: "#" },
    { name: "Contact", path: "#" },
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 1000);
  };

  return (
    <div
      className={`w-screen h-screen fixed top-0 navbar-responsive p-[24px] flex flex-col items-center justify-center z-50 ${
        isClosing ? "close" : "open"
      }`}
    >
      <nav className="w-fit flex flex-col items-center gap-[48px] overflow-scroll">
        {menu.map((item) => (
          <Text
            tag="link"
            size={"menu-text"}
            weight={"600"}
            key={item.name}
            href={item.path}
            className={"text-center"}
            onClick={handleClose}
          >
            {item.name}
          </Text>
        ))}
      </nav>
      <div
        className="bg-[var(--Black)] p-[24px] rounded-[48px] cursor-pointer absolute bottom-[24px] right-[24px] max-sm:right-[16px]"
        onClick={handleClose}
      >
        <Icons
          name={"closeMenu"}
          width={"32"}
          height={"32"}
          className={"max-sm:w-[16px] max-sm:h-[16px]"}
        />
      </div>
    </div>
  );
}
