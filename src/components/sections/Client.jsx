"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const clientLogos = [
  "/images/51.svg",
  "/images/52.svg",
  "/images/53.svg",
  "/images/54.svg",
  "/images/55.svg",
  "/images/56.svg",
  "/images/57.svg",
  "/images/58.svg",
  "/images/51.svg",
  "/images/52.svg",
  "/images/53.svg",
  "/images/54.svg",
  "/images/55.svg",
  "/images/56.svg",
  "/images/57.svg",
  "/images/58.svg",
];
const Client = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl  text-left my-14"
      >
        Our <span className="text-[#039BE4]">Client List</span>
      </motion.h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {clientLogos.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            key={index}
          >
            <Image
              src={item}
              width={280}
              height={130}
              alt=""
              loading="lazy"
              className="object-contain lg:w-[280px] lg:h-[130px] w-[140px] h-[70px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
