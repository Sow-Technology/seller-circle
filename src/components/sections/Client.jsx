"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const clientLogos = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
  "/images/brands/11.png",
  "/images/brands/12.png",
  "/images/brands/13.png",
  "/images/brands/14.png",
  "/images/brands/15.png",
];
const Client = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold lg:text-4xl text-2xl  text-left my-14 lg:px-20 px-8"
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
            className="p-5"
          >
            <Image
              src={item}
              width={280}
              height={130}
              alt=""
              loading="lazy"
              className={`object-contain lg:w-[250px] lg:h-[130px] w-[140px] h-[70px]             }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
