"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Audit from "../forms/Audit";
import { services } from "@/lib/data";
import ServiceCard from "../cards/ServiceCard";
import Services from "./about/Services";
import Link from "next/link";

const Growth = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col lg:px-20 px-8 relative z-10">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Your growth partner{" "}
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-4xl text-center my-7"
      >
        Leveraging Talent + Tech to scale your brand and{" "}
        <span className="text-[#039BE4]">
          capture audiences effectively, letting you focus on what matters.
        </span>
      </motion.h2>
      <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-10 relative z-10 mt-20  lg:items-stretch items-center">
        <motion.h3
          id="services"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          OUR SERVICES
        </motion.h3>
        <div className="flex flex-row flex-wrap justify-center mb-20 gap-10 relative z-10 mt-20 ">
          {services.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
          <Link
            href="/services"
            className="inline-flex items-center justify-center lg:mr-auto lg:ml-10 gap-2 flex-col font-bold"
          >
            <div className="inline-flex items-center justify-center lg:mr-auto lg:ml-10 gap-2 flex-col font-bold">
              {" "}
              <div className="w-[150px] h-[150px] cshad rounded-full flex items-center justify-center">
                {" "}
                <Image src="/images/10.svg" height={100} width={100} alt="" />
              </div>
              VIEW ALL
            </div>
          </Link>
          <motion.div
            className="max-w-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeIn", duration: 1, type: "tween" }}
          >
            <Audit />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
