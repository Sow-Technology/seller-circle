"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Why = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-7"
      >
        Why <span className="text-[#039BE4]">Seller circle? </span>
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/why-us.png"
          alt=""
          width={1280}
          height={1500}
          className="inset-0 bg-cover object-cover"
        />
      </motion.div>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="my-20 font-bold text-xl lg:text-3xl text-justify p-5"
      >
        Crafting Amazon narratives that convert: 30+ years of expertise blend
        into captivating stories through Product display images, A+, brand
        stories, videos, and a bespoke Brand store for maximum engagement .
      </motion.p>
    </div>
  );
};

export default Why;
