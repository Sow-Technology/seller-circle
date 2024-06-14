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
const antonio = Antonio({
  subsets: ["latin"],
});
const WeAre = () => {
  return (
    <div className="mx-auto max-w-7xl  flex items-center w-full flex-col flex-wrap lg:px-20 px-8">
      <h2 className="nsans text-4xl lg:text-7xl font-extrabold mx-auto text-center text-wrap ">
        &quot;We are one circle of growth, succeeding like a flywheel”
      </h2>
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
        <h3 className="font-bold text-3xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto">
          working together, growing together, and riding the momentum to
          success.
        </h3>
        <div
          className={`flex flex-row items-center justify-between flex-wrap gap-8 mt-14`}
        >
          <div className="flex flex-col items-center text-center lg:justify-between justify-center">
            <div className={`${antonio.className} group stroke`}>
              <span className="font-bold text-8xl text-white group:stroke  stroke stroke-black stroke-2 outline-black block">
                $2.5
              </span>{" "}
              <br />
              <span className="font-bold stroke group:stroke text-5xl text-white text-center">
                {" "}
                Billion+
              </span>{" "}
            </div>
            <div className={`font-semibold text-3xl `}>
              {" "}
              Manager Advertising
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7">
            <div className={`${antonio.className}`}>
              <span className="font-bold text-8xl text-white stroke stroke-black stroke-2 outline-black block">
                500K+
              </span>
            </div>
            <div className={`font-semibold text-3xl `}>Catalogue Design</div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7">
            <div className={`${antonio.className}`}>
              <span className="font-bold text-8xl text-white stroke stroke-black stroke-2 outline-black block">
                3000+
              </span>
            </div>
            <div className={`font-semibold text-3xl `}>Seller Served</div>
          </div>
          <div className="flex flex-col items-center text-center justify-between gap-7">
            <div className={`${antonio.className}`}>
              <span className="font-bold text-8xl text-white stroke stroke-black stroke-2 outline-black block">
                20+
              </span>
            </div>
            <div className={`font-semibold text-3xl `}>Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
