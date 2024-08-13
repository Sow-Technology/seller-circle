import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
const cycle = [
  {
    title: "Expertise in Amazon Advertising:",
    description:
      "With years of experience and a deep understanding of Amazon’s ecosystem, we are well-equipped to maximize the potential of your DSP campaigns.",
  },
  {
    title: "Tech-Driven Advertising:",
    description:
      "We use advanced technologies, including AI and machine learning, to optimize your DSP campaigns, ensuring your ads are always performing at their best.",
  },
  {
    title: "Full-Funnel Strategy:",
    description:
      "Target customers at every stage of the buying journey, from awareness to conversion, with our comprehensive full-funnel approach.",
  },
  {
    title: "Tailored Solutions:",
    description:
      "We understand that every business is unique. That’s why we offer customized DSP strategies designed to meet your specific needs and objectives.",
  },
];
const Why1 = () => {
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

export default Why1;
