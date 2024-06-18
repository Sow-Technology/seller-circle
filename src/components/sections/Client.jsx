"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const clientLogos = [
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
              className={`object-contain lg:w-[250px] lg:h-[130px] w-[140px] h-[70px] grayscale ${
                index == 3 && "invert"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
