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
import Socials from "./Socials";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center flex-col lg:px-20 px-8 overflow-hidden">
      <div className=" flex flex-row flex-wrap items-center justify-center gap-x-6 ">
        <div className="lg:max-w-[42%] lg:flex hidden flex-col items-center py-5  min-w-[280px] ">
          <video src="/hero.mp4" playsInline autoPlay muted loop>
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
          <h2 className="font-extrabold text-[28px] leading-[33px] md:text-4xl lg:text-5xl uppercase text-center max-w-xl">
            driving growth with a{" "}
            <span className="text-[#039BE4]">proven holistic approach</span>
          </h2>
          <p className="mt-5">
            With 30+ years of combined expertise, SellerCircle has empowered
            over 6,000 brands through highly optimized campaigns, compelling
            creatives, strategic product launches, and expert advisory.
            Experience our award-winning, holistic approach to maximize
            visibility, conversions, and ROI for your brand
          </p>
          <div className="flex flex-row gap-5 mt-10">
            <Link href="/contact">
              {" "}
              <Button variant="cta">Get Started </Button>
            </Link>
            <Link href="/about#ourStory">
              <Button variant="cta">Our story </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
