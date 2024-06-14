"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Retail = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Let&#39;s get you <span className="text-[#039BE4]">Retail Ready </span>
      </motion.h2>
      <motion.video
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        src="/retail.mp4"
        autoPlay
        muted
        loop
      ></motion.video>
    </div>
  );
};

export default Retail;
