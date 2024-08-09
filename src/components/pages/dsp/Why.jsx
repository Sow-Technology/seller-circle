import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
const cycle = [
  {
    title: "Reach Exclusive Audiences",
    l1: "Take advantage of Amazon audiences to reach new or existing customers on the platform or other channels.",
    l2: "Improve results and relevance with a view in different formats and devices.",
  },
  {
    title: "Access High-Quality Channels",
    l1: "Reach your audiences on Amazon sites and apps.",
    l2: "Use sites where advertisers operate through direct inventory from Amazon Publisher Services and third-party auctions.",
  },
  {
    title: "Always Optimized Campaigns",
    l1: "Improve and perfect your campaigns in real time.",
    l2: "Drive qualified traffic and boost sales and brand awareness, both online and offline.",
  },
  {
    title: "Metric-Based Strategy",
    l1: "Utilize pre- and post-campaign performance audience insights to assess what drives campaign results.",
  },
];
const Why = () => {
  return (
    <div className="mt-10">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Why Use Amazon DSP Campaigns?{" "}
      </motion.h3>
      <div className="flex flex-row flex-wrap justify-center  gap-10 relative z-10 mt-20 max-lg:px-5  ">
        {cycle.map((item, idx) => (
          <CycleCard item={item} index={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Why;
