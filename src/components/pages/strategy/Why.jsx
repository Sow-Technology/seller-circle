import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
const cycle = [
  {
    title: "Seasoned Expertise",
    description:
      "Our team of experienced consultants brings a wealth of knowledge and insights to help you succeed on Amazon.",
  },
  {
    title: "Actionable Insights",
    description:
      "Receive practical recommendations and strategies that you can implement to achieve your business goals.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. Our strategies are customized to meet your specific needs and objectives.",
  },
  {
    title: "Holistic Approach",
    description:
      "From product launch to scaling and creative strategy, we offer end-to-end consulting services to support your business growth.",
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
