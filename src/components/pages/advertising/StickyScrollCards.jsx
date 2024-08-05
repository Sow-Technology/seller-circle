"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
const content = [
  {
    title: "Sustainable Ad Campaigns for Increased Revenue",
    description:
      "Understanding the importance of creating sustainable Amazon ad campaigns and increasing product revenue is at the core of our strategy. Our team specializes in Amazon advertising, holding 20+ certifications in ad campaign strategies and ad-revenue management.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Collaborative Advertising Management",
    description:
      "Our in-house team of Account Executives takes a collaborative approach to advertising management, ensuring no opportunities are missed. We simplify data analysis with our tech and expertise, providing you with the transparency needed to confidently delegate your advertising.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Utilizing Data to Unlock the Amazon Flywheel",
    description:
      "We utilize Amazon's API to fuel the strategies outlined in the Amazon Advertising Flywheel. This allows for quick and accurate decision-making, automating and optimizing advertising campaigns on Amazon efficiently.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/1.gif" alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Deep Analytical Tech Integration",
    description:
      "We integrate advanced technology through our API to study product-wise distribution, identify best-performing targets, perform bulk actions on campaigns, and automate processes with human intelligence combined with machine learning for optimal results.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
  {
    title: "Human Decisions with Tech Efficiencies",
    description:
      "Your customer’s journey doesn’t end at a single ad placement. We combine tech automation and intuition to lead audiences through the full funnel, analyzing data efficiently to adjust campaigns and maximize your return.",
    content: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
      >
        <Image src="/gif/5.gif" alt="" width={1000} height={1000} />
      </motion.div>
    ),
  },
];
export function StickyScrollCards() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
