"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
const content = [
  {
    title: "Dramatic Growth in NTB Orders",
    description:
      "The brand saw a 3X increase in NTB orders, indicating successful acquisition of new customers and expanded market reach.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Significant Sales Increase",
    description:
      "Overall sales doubled within the four-month period, reflecting the effectiveness of the full-funnel advertising strategy.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Successful Scaling of New Product Range:",
    description:
      "The women’s wellness products saw considerable growth, driven by targeted audience campaigns that resonated with the brand's key demographics",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Improved Store Traffic and Customer Engagement:",
    description:
      "Store traffic increased by 45%, and the click-through rate (CTR) improved by 25%, demonstrating higher customer engagement with the brand’s ads and product listings.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Boost in Subscribe and Save",
    description:
      "The brand experienced a 75% increase in its Subscribe and Save program, indicating enhanced customer loyalty and repeat purchase behavior.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Reduction in Ad ACOS",
    description:
      "A strategic focus on cost-effective advertising, bolstered by Day Parting and AMC insights, led to an 8% decrease in ad ACOS, optimizing the brand’s return on ad spend.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Increased Share of Voice",
    description:
      "Consistent tracking and optimization of SOV ensured that the brand maintained a dominant presence in its key categories, significantly contributing to increased visibility and sales.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" unoptimized alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
];
export function StickyScroll2() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
