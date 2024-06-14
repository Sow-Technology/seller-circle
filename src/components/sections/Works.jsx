"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Works</span>
      </motion.h2>
      <div className="flex flex-wrap items-center gap-7 justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button variant="cta" className="w-[150px] text-center">
            A+
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="cta" className="w-[150px] text-center">
            BRAND STORY
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="cta" className="w-[150px] text-center">
            BRAND VIDEO
          </Button>
        </motion.div>{" "}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button variant="cta" className="w-[150px] text-center">
            BRAND STORE
          </Button>
        </motion.div>{" "}
      </div>
    </div>
  );
};

export default Works;
