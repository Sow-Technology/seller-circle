"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pricing2 from "@/components/sections/Pricing/Pricing2";
import Pricing3 from "@/components/sections/Pricing/Pricing3";

const services = [
  "EBC A+ Creation",
  "Brand Stores Creation",
  "Account Management",
  "Catalouge Service",
  "Training Service",
];
const Page = () => {
  const [activeService, setActiveService] = useState("EBC A+ Creation");

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-20 z-[39]">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          PRICING
        </motion.h3>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
        >
          Compare our plans and{" "}
          <span className="text-[#039BE4]">find yours.  </span>
        </motion.h2>
      </div>
      <div className="">
        <div className="lg:flex hidden gap-3 items-center justify-center">
          {services.map((service, idx) => (
            <BackgroundGradient key={idx}>
              <div
                className=" rounded-2xl p-3 text-slate-100 font-bold px-7 cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                {service}
              </div>
            </BackgroundGradient>
          ))}
        </div>
        <div className="lg:hidden flex flex-row items-center justify-center bg-white">
          <Carousel
            className="bg-white flex items-center justify-center"
            opts={{
              // align: "start",
              loop: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: false,
              infinite: true,
              speed: 500,
            }}
          >
            <CarouselPrevious />

            <CarouselContent className="flex flex-row bg-white max-w-[200px] mx-auto items-center justify-center">
              {services.map((service, idx) => (
                <CarouselItem key={idx} className="w-[180px] bg-white p-5">
                  {/* <BackgroundGradient className="blur-0"> */}
                  <div
                    className=" rounded-2xl p-3 w-[180px] text-slate-100 font-bold px-7 cursor-pointer"
                    onClick={() => setActiveService(service)}
                  >
                    {service}
                  </div>
                  {/* </BackgroundGradient> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {activeService == "EBC A+ Creation" && <Pricing />}
      {activeService == "Brand Stores Creation" && <Pricing2 />}
      {activeService == "Account Management" && <Pricing3 />}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Page;
