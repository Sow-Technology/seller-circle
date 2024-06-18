"use client";
import React from "react";
import Image from "next/image";
import Marquee from "../ui/marquee";
const marqueeItem = [
  "/images/b1.png",
  "/images/b2.png",
  "/images/b3.png",
  "/images/b4.png",
  "/images/b5.png",
  "/images/b6.png",
  "/images/b7.png",
  "/images/b8.png",
  "/images/b9.png",
  "/images/b10.png",
  "/images/b11.png",
  "/images/b12.png",
  "/images/b13.png",
  "/images/b14.png",
  "/images/b15.png",
  "/images/b16.png",
];
import { Antonio } from "next/font/google";
import { motion } from "framer-motion";
const antonio = Antonio({
  subsets: ["latin"],
});
const WeAre = () => {
  return (
    <div className="mx-auto max-w-7xl  flex items-center w-full flex-col flex-wrap lg:px-20 px-8 relative z-20 overflow-hidden">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nsans text-3xl lg:text-7xl font-extrabold mx-auto text-center text-wrap "
      >
        &quot;We are one circle of growth,{" "}
        <span className="text-[#039BE4]">succeeding like a flywheel</span>”
      </motion.h2>
      <div className="my-20 overflow-hidden ">
        <Marquee
          pauseOnHover
          className="flex items-center justify-center overflow-hidden max-w-6xl mx-auto"
        >
          {marqueeItem.map((item, index) => (
            <div className="max-w-[300px] flex items-center mx-5 " key={index}>
              <Image
                src={item}
                alt=""
                width={150}
                height={150}
                className={`grayscale ${index == 3 && "invert"}    `}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="my-20">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-extrabold lg:text-4xl text-xl text-black text-center max-w-4xl uppercase mx-auto"
        >
          working together, growing together,{" "}
          <span className="text-[#039BE4]">
            and riding the momentum to success.
          </span>
        </motion.h3>
        <div
          className={`flex flex-row  justify-center lg:justify-between flex-wrap gap-8 mt-14`}
        >
          <div className="flex flex-col items-center text-center max-lg:w-1/2 justify-between ">
            <div
              className={`${antonio.className} group font-bold lg:text-7xl text-5xl text-white  stroke`}
            >
              <span className="   stroke-black stroke-2 outline-black ">
                $100M+
              </span>{" "}
            </div>
            <div className={`font-bold text-background lg:text-2xl text-xl `}>
              {" "}
              Managed Advertising
            </div>
          </div>
          <div className="flex flex-col items-center h-auto flex-1 text-center justify-between gap-7 max-lg:w-1/2 ">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
                500K+
              </span>
            </div>
            <div className={`font-bold text-background lg:text-2xl text-xl `}>
              Catalogue Design
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:w-[45%]">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
                3000+
              </span>
            </div>
            <div className={`font-bold lg:text-2xl text-xl text-background`}>
              Seller Served
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:w-[40%] lg:min-w-[170px]">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
                20+
              </span>
            </div>
            <div className={`font-bold lg:text-2xl text-xl text-background `}>
              Awards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
