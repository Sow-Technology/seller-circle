import React from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
const CycleCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: easeIn,
        delay: 0.2 * index,
        type: "spring",
      }}
      className="min-w-[280px] lg:max-w-[380px] lg:min-w-[330px]   flex flex-col gap-3 py-5 px-2 rounded-2xl border-[3px] border-background  relative z-10 bg-white flex-1 text-center"
    >
      <h4 className="nunito font-extrabold text-2xl hover:text-background transition-all duration-300 hover:tracking-widest">
        {item.title}
      </h4>
      <div className="flex items-center">
        <div className="w-full h-1 bg-background" />
        <div className="p-2 rounded-full border-2 px-4 text-balance border-background">
          {index + 1}
        </div>
        <div className="w-full h-1 bg-background" />
      </div>
      <p className="nunito text-xs ">{item.description}</p>
      {item.l1 && (
        <>
          <ul className="list-disc pl-7">
            <li>{item.l1}</li>
            {item.l2 && <li>{item.l2}</li>}
          </ul>
        </>
      )}
    </motion.div>
  );
};

export default CycleCard;
