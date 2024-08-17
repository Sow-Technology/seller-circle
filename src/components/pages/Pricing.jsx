"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Carousel } from "react-responsive-carousel";

import Creative from "@/components/sections/Pricing/creative/Creative";
import FullService from "@/components/sections/Pricing/FullService";
import Advertising from "@/components/sections/Pricing/Advertising";
import DSP from "@/components/sections/Pricing/DSP";
import Strategy from "@/components/sections/Pricing/Strategy";
import Global from "@/components/sections/Pricing/Global";
import Marketplaces from "@/components/sections/Pricing/Marketplces";

const services = [
  "Creative Services",
  "Full Service Management",
  "Advertising",
  "DSP",
  "Strategy and Consulting",
  "Global Launch",
  "Marketplaces Expansion",
];

const Pricing = () => {
  const searchParam = useSearchParams();
  const [activeService, setActiveService] = useState(
    searchParam.get("s") || "Creative Services"
  );
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchVisitorInfo() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
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
                className="rounded-2xl p-3 text-slate-100 font-bold px-7 cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                {service}
              </div>
            </BackgroundGradient>
          ))}
        </div>
        <div className="lg:hidden flex items-center justify-center bg-white">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            width={300}
            className="pb-10"
          >
            {services.map((service, idx) => (
              <div
                className="rounded-2xl p-3 text-slate-100 font-bold px-7 text-wrap mb-5 py-3 cursor-pointer overflow-clip bg-background flex flex-col"
                onClick={() => setActiveService(service)}
                key={idx}
              >
                {service}
                <div className="h-10 w-full "></div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full my-3 text-2xl py-5 font-[900] text-center text-white rounded-none bg-grid-background bg-background mb-20">
        {activeService}
      </div>
      <div className="-mt-12 max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading Creative Services...</div>}>
          {activeService == "Creative Services" && (
            <Creative IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading Full Service Management...</div>}>
          {activeService == "Full Service Management" && (
            <FullService IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading Advertising...</div>}>
          {activeService == "Advertising" && (
            <Advertising IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading DSP...</div>}>
          {activeService == "DSP" && (
            <DSP IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading Strategy and Consulting...</div>}>
          {activeService == "Strategy and Consulting" && (
            <Strategy IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading Global Launch...</div>}>
          {activeService == "Global Launch" && (
            <Global IN={country == "IN" ? true : false} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading Marketplaces Expansion...</div>}>
          {activeService == "Marketplaces Expansion" && (
            <Marketplaces IN={country == "IN" ? true : false} />
          )}
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
