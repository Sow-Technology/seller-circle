"use client";
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/cards/WorkCard";
const images = [
  "/images/work/story/1.png",
  "/images/work/story/2.jpg",
  "/images/work/story/3.png",
  "/images/work/story/4.png",
  "/images/work/story/5.png",
  "/images/work/story/6.png",
  "/images/work/story/7.jpg",
  "/images/work/story/8.png",
  "/images/work/story/9.png",
  "/images/work/story/10.png",
  "/images/work/story/11.png",
  "/images/work/story/12.jpg",
  "/images/work/story/13.png",
  "/images/work/story/14.png",
  "/images/work/story/15.png",
  "/images/work/story/16.png",
  "/images/work/story/17.png",
];
const Story = () => {
  return (
    <div className="flex flex-col gap-10 my-20">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        BRAND STORY{" "}
      </motion.h3>
      <div className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  ">
        {images.map((image, index) => (
          <WorkCard src={image} key={index} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Story;
