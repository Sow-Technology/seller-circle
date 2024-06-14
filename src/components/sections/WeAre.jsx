"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Marquee from "../ui/marquee";
const marqueeItem = [
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
];
import { Antonio } from "next/font/google";
import { motion } from "framer-motion";
const antonio = Antonio({
  subsets: ["latin"],
});
const WeAre = () => {
  return (
    <div className="mx-auto max-w-7xl  flex items-center w-full flex-col flex-wrap lg:px-20 px-8">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nsans text-4xl lg:text-7xl font-extrabold mx-auto text-center text-wrap "
      >
        &quot;We are one circle of growth, succeeding like a flywheel”
      </motion.h2>
      <div className="my-20">
        <Marquee
          pauseOnHover
          className="flex items-center justify-center gap-5"
        >
          {marqueeItem.map((item, index) => (
            <div className="max-w-[300px] flex items-center " key={index}>
              <Image src={item} alt="" width={150} height={150} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="my-20">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-bold lg:text-3xl text-2xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          working together, growing together, and riding the momentum to
          success.
        </motion.h3>
        <div
          className={`flex flex-row  justify-center lg:justify-between flex-wrap gap-8 mt-14`}
        >
          <div className="flex flex-col items-center text-center lg:justify-between justify-center">
            <div className={`${antonio.className} group text-white  stroke`}>
              <span className="font-bold lg:text-8xl text-6xl group:stroke   stroke-black stroke-2 outline-black block">
                $100
              </span>{" "}
              <br />
              <span className="font-bold  group:stroke lg:text-5xl text-3xl  text-center">
                {" "}
                MILLION +
              </span>{" "}
            </div>
            <div className={`font-semibold lg:text-3xl text-2xl `}>
              {" "}
              Manager Advertising
            </div>
          </div>
          <div className="flex flex-col items-center h-auto flex-1 text-center justify-between gap-7 ">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-8xl text-6xl text-white stroke stroke-black stroke-2 outline-black block">
                500K+
              </span>
            </div>
            <div className={`font-semibold lg:text-3xl text-2xl `}>
              Catalogue Design
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:min-w-[150px]">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-8xl text-6xl text-white stroke stroke-black stroke-2 outline-black block">
                3000+
              </span>
            </div>
            <div className={`font-semibold lg:text-3xl text-2xl `}>
              Seller Served
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:min-w-[150px]">
            <div className={`${antonio.className}`}>
              <span className="font-bold lg:text-8xl text-6xl text-white stroke stroke-black stroke-2 outline-black block">
                20+
              </span>
            </div>
            <div className={`font-semibold lg:text-3xl text-2xl `}>Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
