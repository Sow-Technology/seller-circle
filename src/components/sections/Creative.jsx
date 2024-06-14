"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

const Creative = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20 lg:px-20 px-8">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-bold text-xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Creative Success
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl max-w-5xl mx-auto text-center my-7"
      >
        Elevating Creativity to Success:{" "}
        <span className="text-[#039BE4]">Your Roadmap to Achievements! </span>
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center"
      >
        {" "}
        <Button variant="cta">VIEW OUR SUCCESS STORIES</Button>
      </motion.div>{" "}
    </div>
  );
};

export default Creative;
