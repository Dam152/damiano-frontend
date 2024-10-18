import Link from "next/link";
import React from "react";
import Icons from "../atoms/Icons";
import Text from "../atoms/Text";

export default function Navbar({ className }) {
  const menu = [
    {
      name: "About Me",
      path: "#",
    },
    {
      name: "Why Design Craft",
      path: "#",
    },
    {
      name: "Services",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
  ];
  return (
    <nav
      className={`${className} z-50 p-[24px] rounded-[48px] bg-[var(--Black)] flex items-center  `}
    >
      <div className="w-fit h-fit flex max-md:hidden">
        <Link
          href={"#"}
          className="px-[24px] py-[16px] mr-[16px] bg-[var(--Purple)] rounded-[48px] flex w-fit hover:transition-all hover:duration-300 hover:scale-105"
        >
          <Icons
            name={"arrowUp"}
            className={
              "hover:transition-all hover:duration-200  hover:rotate-[360deg] "
            }
          ></Icons>
        </Link>

        {menu.map((item) => (
          <Text
            tag="link"
            key={Math.random()}
            size={"menu-text"}
            weight={"600"}
            theme="WHite"
            href={item.path}
            className={"animation-menu-hover"}
          >
            {item.name}
          </Text>
        ))}
      </div>
    </nav>
  );
}
