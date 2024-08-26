"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto mb-20 z-[39] w-full">
          {/* <motion.div
          className=""
          initial={{ x: "500px", opacity: 0 }}
          animate={{ x: "0", opacity: 100 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <Image
            src="/images/banners/contact.jpg"
            width="1280"
            height="1280"
            alt=""
            className="w-full max-lg:p-5 rounded-xl "
          />
        </motion.div> */}

          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto mt-7"
          >
            Let&#39;S CHAT
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-balance w-auto"
          >
            No one-size-fits-all here,{" "}
            <span className="text-[#039BE4]">only tailored strategies.  </span>
          </motion.h2>
          <div className="mx-auto flex lg:flex-row flex-col-reverse flex-wrap  items-center justify-center gap-16"></div>
        </div>
      </div>
    </>
  );
};

export default page;
