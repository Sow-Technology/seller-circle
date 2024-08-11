"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Carousel } from "react-responsive-carousel";

import Pricing2 from "@/components/sections/Pricing/Pricing2";
import Pricing3 from "@/components/sections/Pricing/Pricing3";
import Pricing5 from "@/components/sections/Pricing/Pricing5";
import Pricing4 from "@/components/sections/Pricing/Pricing4";
import Creative from "@/components/sections/Pricing/creative/Creative";
const services = [
  "Creative Services",
  "Full service management",
  "Advertising",
  "DSP",
  "Strategy and consulting",
  "Global launch",
  "Marketplaces Expansion",
];
const Page = () => {
  const [activeService, setActiveService] = useState("Creative Services");
  const [country, setCountry] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  useEffect(() => {
    async function fetchVisitorInfo() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      // setVisitorInfo(data);
      console.log(data);
      setCountry(data.country);
    }

    fetchVisitorInfo();
  }, []);
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
        <div className="lg:hidden flex items-center justify-center  bg-white">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            // autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            width={300}
            className="pb-10"
          >
            {/* Add more slides as needed */}
            {services.map((service, idx) => (
              // <BackgroundGradient
              //   className="overflow-clip rounded-2xl "
              //   key={idx}
              // >
              <div
                className=" rounded-2xl p-3  text-slate-100 font-bold px-7 text-wrap mb-5 py-3 cursor-pointer overflow-clip bg-background flex flex-col "
                onClick={() => setActiveService(service)}
                key={idx}
              >
                {service}
                <div className="h-10 w-full "></div>
              </div>
              // </BackgroundGradient>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full my-3 text-2xl py-5 font-[900] text-center text-white  rounded-none bg-grid-background bg-background mb-20">
        {activeService}
      </div>
      <div className="-mt-24">
        {/* {activeService == "EBC A+ Creation" && <Pricing />}
        {activeService == "Brand Stores Creation" && <Pricing2 />}
        {activeService == "Account Management" && <Pricing3 />}
        {activeService == "Catalouge Service" && <Pricing4 />}
        {activeService == "Training Service" && <Pricing5 />} */}
        {activeService == "Creative Services" && <Creative />}
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Page;
