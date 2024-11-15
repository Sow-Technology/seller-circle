"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";
import { caseStudies } from "@/lib/data";

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
        <div className="flex gap-5 flex-col">
          {caseStudies.map((item, idx) => (
            <BlogCard key={idx} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
