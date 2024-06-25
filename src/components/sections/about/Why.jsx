"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { easeIn, easeInOut, motion } from "framer-motion";
const strategiesItem = [
  {
    icon: "/images/34.webp",
    title: "Transparent",
    description: "Providing regular contact and reports to all our clients",
  },
  {
    icon: "/images/32.webp",
    title: "Experienced",
    description:
      "Growth Managers to Develop Unique Strategy To Grow Brands with To Grow Brands with Amazon PPC & Product Placement",
  },
  {
    icon: "/images/33.webp",
    title: "Professional",
    description: "Amazon Ad's Certified Experts",
  },
  {
    icon: "/images/a2.png",
    title: "Ad Technology",
    description:
      "Artificial Intelligence + \nMachine learning +\nAutomation +\n Business Intelligence",
  },
];
const Why = () => {
  const [hoverIndex, setHoverIndex] = useState(undefined);
  const handleHover = (index) => {
    setHoverIndex(index);
  };
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20 px-4">
      <div className="flex flex-row max-lg:flex-wrap  items-center justify-center lg:justify-between gap-4 lg:-ml-16">
        {strategiesItem.map((item, index) => (
          <div className="" key={index}>
            <div
              className={` bg-white lg:mr-3 py-8 px-5 lg:w-[220px] max-md:ml-5 ${
                hoverIndex == index ? "h-auto" : "h-[480px]"
              }   w-[85%] group  border-r-2`}
            >
              <div className="flex p-5 w-[110%] py-[30px] ml-4 bg-[#039BE4] items-center justify-center  rounded-l-[250px]  !rounded-tr-[100px] relative mt-7">
                <Image
                  src={item.icon}
                  width={85}
                  height={90}
                  alt=""
                  className="h-[60px] w-[65px]"
                />
                <div className="bg-[#039BE4] -bottom-[47px] h-[140%] w-1/2 absolute -right-[11px] -z-10 rounded-[40px]" />
                <div className="bg-[#066EA0] -bottom-[42.5px] h-[43px] w-[90px] absolute -right-[5px] -z-10 rounded-[21px]" />
              </div>
              <h2 className="font-[900] text-xl text-center mt-5 h-[50px]">
                {item.title}
              </h2>
              <div
                className={`overflow-hidden text-ellipsis ${
                  hoverIndex == index ? "h-[300px]" : "h-[200px] "
                }`}
              >
                <p
                  className={`max-w-[380px] text-left mt-3 ${
                    hoverIndex == index ? "h-auto" : "h-[100px] "
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className=" flex flex-row items-center justify-center gap-2 ml-10 lg:w-[250px] lg:h-[250px]">
          <div className="text-4xl text-orange-500 font-[900]">20+</div>
          <div className="text-balance font-bold text-2xl">
            Amazon Ad Certification
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
