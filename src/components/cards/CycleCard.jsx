"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCheckIcon,
  CheckCircle2Icon,
  CheckCircleIcon,
  CheckIcon,
} from "lucide-react";
import { CheckboxIcon } from "@radix-ui/react-icons";
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
      {item.b && <h5 className="font-bold text-lg">{item.b}</h5>}
      <p className="nunito  ">{item.description}</p>
      {item.l1 && (
        <>
          <ul className=" list-none pl-7">
            <li className="flex">
              <div>
                {" "}
                <CheckCircleIcon className="  aspect-square block w-5 h-5" />
              </div>
              {item.l1}
            </li>
            {item.l2 && (
              <li className="flex">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                {item.l2}
              </li>
            )}
          </ul>
        </>
      )}
      {item.services &&
        item.services.map((service, idx) => (
          <li key={idx} className=" list-none">
            <div className="flex gap-5 items-center mb-2">
              {" "}
              <CheckCircleIcon className="  aspect-square block w-5 h-5" />
              <span className="font-bold">{service.h}</span>
            </div>
            <p>{service.desc}</p>
          </li>
        ))}
    </motion.div>
  );
};

export default CycleCard;
