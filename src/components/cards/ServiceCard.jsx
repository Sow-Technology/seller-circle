import React from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
const ServiceCard = ({ item }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: easeIn }}
      className="min-w-[280px] lg:max-w-[330px] p-10 flex flex-col gap-7 rounded-2xl cshad justify-between relative z-10 bg-white flex-1"
    >
      <h4 className="nunito font-extrabold text-2xl hover:text-background transition-all duration-300 hover:tracking-widest">
        {item.title}
      </h4>
      <p className="nunito text-xs text-justify">{item.description}</p>
      <div className="flex items-center justify-between">
        <div>
          <Image src={item.icon} height={50} width={50} alt="" />
        </div>
        <div className="flex items-center">
          VIEW MORE <Image src="/images/10.svg" height={50} width={50} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
