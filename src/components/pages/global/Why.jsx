import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
const cycle = [
  {
    title: "Global Expertise",
    description:
      "Our team has extensive experience in launching products across various international markets, providing you with the insights and strategies needed for success.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that each market is unique. Our services are customized to address the specific challenges and opportunities of each region, ensuring that your global launch is effective and impactful.",
  },
  {
    title: "Seamless Integration",
    description:
      "From language localization to compliance, we offer end-to-end support to ensure that every aspect of your global launch is covered, allowing you to focus on your core business.",
  },
  {
    title: "Proven Success",
    description:
      "Our track record of successful global launches speaks for itself. Partner with us to leverage our expertise and achieve your international expansion goals.",
  },
];
const Why = () => {
  return (
    <div className="my-10">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Why Choose Us?
      </motion.h3>
      <div className="flex flex-row flex-wrap justify-center  gap-10 relative z-10 my-20 max-lg:px-5  ">
        {cycle.map((item, idx) => (
          <CycleCard item={item} index={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Why;
