import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    layoutEffect: false,
    offset: ["start end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-zinc-900 ">
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="-rotate-90 md:w-[75px] md:h-[75px] xs:!w-[40px] xs:!h-[40px]"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-background stroke-1  fill-none "
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-slate-100 "
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-background "
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
