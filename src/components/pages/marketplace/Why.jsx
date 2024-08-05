import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
const cycle = [
  {
    title: "Expertise Across Platforms",
    description:
      "Our team has extensive experience managing campaigns on a variety of e-commerce platforms, ensuring your brand gets the attention it deserves.",
  },
  {
    title: "Tailored Strategies",
    description:
      "We understand that each marketplace has unique characteristics and customer behaviors. Our strategies are customized to align with the specific demands of each platform.",
  },
  {
    title: "Holistic Approach",
    description:
      "We integrate our advertising efforts across multiple marketplaces to create a cohesive and effective digital marketing strategy for your brand.",
  },
  {
    title: "Proven Results",
    description:
      "With a track record of success, we have helped numerous brands achieve significant growth and increased sales across various marketplaces.",
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
        Why Choose Seller Circle for Marketplaces Advertising?
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
