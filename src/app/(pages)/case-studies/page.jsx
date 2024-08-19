"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";
const c1 = {
  imageUrl: "/images/brands/1.png",
  year: "April 2024",
  date: "July 2024",
  category: "Herbal Supplements and Juices",
  title:
    "How Sellercircle Advertising Strategic Campaigns Achieved a 2X Sales Increase and Boosted Brand Awareness in 3 months",
  client: "Krishna Herbal & Ayurveda",
  services: "DSP, PPC, Search, Sponsored Video, AMC",
  link: "/case-studies/From-Stagnation-to-Growth-How-Krishna-Herbal-and-Ayurveda-Strategic-Campaigns-Achieved-a-2X-Sales-Increase-and-Boosted-Brand-Awareness-in-3-Months",
  marketplace: "Amazon.in",
};
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-20 z-[39]">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          Case Studies
        </motion.h3>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
        >
          Our Work defines <span className="text-[#039BE4]">our success!</span>
        </motion.h2>
        <BlogCard data={c1} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
