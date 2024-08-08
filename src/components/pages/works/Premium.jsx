"use client";
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/cards/WorkCard";
const images = [
  "/images/work/premium/1.jpeg",
  "/images/work/premium/2.jpeg",
  "/images/work/premium/3.jpeg",
  "/images/work/premium/4.jpeg",
  "/images/work/premium/5.jpeg",
  "/images/work/premium/6.jpeg",
  "/images/work/premium/7.jpeg",
  "/images/work/premium/8.jpeg",
  "/images/work/premium/9.jpeg",
  "/images/work/premium/10.jpeg",
  "/images/work/premium/11.jpeg",
];
const Premium = () => {
  return (
    <div className="flex flex-col gap-10 my-20">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        PREMIUM A+ CONTENT
      </motion.h3>
      <div className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  ">
        {images.map((image, index) => (
          <WorkCard src={image} key={index} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Premium;
