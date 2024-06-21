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
import { motion } from "framer-motion";
import Working from "./Working";

const WeAre = () => {
  return (
    <div className="mx-auto lg:max-w-7xl w-screen max-w-[100%]  flex items-center  flex-col flex-wrap lg:px-20 px-8 relative z-20 overflow-hidden ">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nsans text-3xl lg:text-7xl font-extrabold lg:mx-auto text-center text-balance "
      >
        &quot;We are one circle of growth,{" "}
        <span className="text-[#039BE4]">succeeding like a flywheel</span>”
      </motion.h2>
      <div className="my-20 overflow-hidden w-screen lg:max-w-7xl">
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
      <Working />
    </div>
  );
};

export default WeAre;
