"use client";
import React from "react";
import Text from "../atoms/Text";
import Icons from "../atoms/Icons";
import Image from "next/image";

import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Reviews() {
  const reviews = [
    {
      name: "Ramon Dino",
      work: "CEO Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Ramon Dino",
      work: "CEO Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Ramon Dino",
      work: "CEO Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="w-full bg-[var(--Pink-light)] px-[24px] py-[48px] rounded-[48px] max-sm:px-[24px] max-sm:py-[24px] ">
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide className="w-full" key={Math.random()}>
            <div className="flex flex-col gap-[32px]  max-sm:gap-[24px] max-sm:flex-col-reverse">
              <div className="w-full flex gap-[24px] max-md:flex-col ">
                <Icons name={"Review"} width={"65"} height={"51"}></Icons>
                <Text
                  tag="p"
                  size={"review-text"}
                  className={"w-full max-w-[1173px]"}
                  theme="Purple"
                  weight={"600"}
                >
                  {r.text}
                </Text>
              </div>
              <div className=" pl-[80px] w-full flex gap-[32px] items-center max-md:flex-col  max-md:gap-[24px] max-md:pl-0 max-md:items-start">
                <Image
                  src={"/photo.png"}
                  alt="photo"
                  width={"128"}
                  height={"128"}
                  className="w-[128px] h-[128px] rounded-[50%] object-cover object-center"
                ></Image>
                <Text tag="h4" size={"name-review"} theme="Black">
                  <strong>{r.name}</strong> {r.work}
                </Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
