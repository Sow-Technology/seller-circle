"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center flex-col lg:px-20 px-8 overflow-hidden">
      <div className=" flex flex-row flex-wrap items-center justify-center gap-6 py-20 ">
        <div className="lg:max-w-[42%] flex flex-col items-center  min-w-[300px]">
          <video src="/hero.mp4" autoPlay muted loop>
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          initial={{ x: "500px", opacity: 0 }}
          animate={{ x: "0", opacity: 100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="lg:max-w-[55%] flex flex-col items-center min-w-[300px] text-center "
        >
          <h3 className="uppercase text-[21px] font-bold">seller circle</h3>
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-center max-w-xl">
            driving growth with a{" "}
            <span className="text-[#039BE4]">proven holistic approach</span>
          </h2>
          <p className="mt-5">
            With over 7 years of expertise, we&#39;ve empowered 1000+ brands
            with highly optimized campaigns and creatives that maximize
            visibility, conversions, and ROI. Experience our award-winning
            holistic approach to scale your brand.
          </p>
          <div className="flex flex-row gap-5 mt-10">
            <Button variant="cta">Get Started </Button>
            <Button variant="cta">Our story </Button>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-7 flex-row mx-auto mb-16 flex-wrap items-center justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 text-base font-semibold cursor-pointer"
        >
          <FaLinkedin className="text-[#0762C8] text-xl" />
          LinkedIn
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 text-base font-semibold cursor-pointer"
        >
          <FaInstagram className=" text-xl" />
          Instagram
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 text-base font-semibold cursor-pointer"
        >
          <FaFacebook className="text-[#0762C8] text-xl" />
          Facebook
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-3 text-base font-semibold cursor-pointer"
        >
          <FaPinterest className="text-[#E60023] text-xl" />
          Pinterest
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <Image
            src="/images/1a.webp"
            alt=""
            width={300}
            placeholder="blur"
            blurDataURL="/images/1.webp"
            height={300}
            className="h-[150px] w-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
