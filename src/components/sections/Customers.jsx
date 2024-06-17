"use client";
import React from "react";
import CustomerMaqrquee from "./CustomerMarquee";
import { motion } from "framer-motion";
const Customers = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        What our <span className="text-[#039BE4]">customers say</span>
      </motion.h2>
      <CustomerMaqrquee />
    </div>
  );
};

export default Customers;
