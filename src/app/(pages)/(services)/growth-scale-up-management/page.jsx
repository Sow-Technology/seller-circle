"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import AM1 from "@/components/sections/services/AM1";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { approchItems } from "@/lib/data";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 z-[39]">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Growth & Scale-up Management
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Amazon Operations + Advertising Management
          </motion.h2>
          <AM1 />
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
          >
            Level Up Your Brand on Amazon with{" "}
            <span className="text-[#039BE4]">Full Service Management  </span>
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito  text-base lg:text-xl max-w-5xl mx-auto text-center my-7 "
          >
            Our comprehensive Amazon Full-Service offering provides a dynamic
            solution designed to grow or launch your Amazon business. Our expert
            team utilizes proprietary techniques to free up your time by
            managing day-to-day Amazon tasks, enhancing listing SEO and
            conversions, updating product photos, creating high success rate
            launches, revitalizing low sale products, and more!
          </motion.p>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
          >
            Explore Our{" "}
            <span className="text-[#039BE4]">
              Growth and Full Service Management{" "}
            </span>
          </motion.h2>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
          >
            No one-size-fits-all here,{" "}
            <span className="text-[#039BE4]">only tailored strategies.  </span>
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito  text-base lg:text-xl max-w-5xl mx-auto text-center my-7 "
          >
            At Seller Circle, we specialize in scaling sales for brands on
            Amazon and other marketplaces through a holistic approach and proven
            strategies for PPC and DSP. As an advanced Amazon partner with
            hands-on expertise across all categories, we’ve worked with over
            1000+ brands, tailoring unique strategies to maximize ROI and impact
            profits. Our proactive, data-driven team ensures transparent
            advertising and effective conversion engines. With our tech-enabled,
            comprehensive services, your brand will not only grow but thrive in
            the competitive marketplace. Join us and experience continuous and
            sustainable growth.
          </motion.p>
          <div className="flex flex-row flex-wrap gap-16 mt-16">
            <div className="flex flex-row lg:max-w-[45%]">
              <div>
                <div className="w-[2px] rounded-2xl h-[90%] justify-self-center self-center bg-[#A9A8A8] mt-[20px]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                {approchItems.map((item, index) => (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-center justify-center  gap-5 flex-row font-bold relative "
                  >
                    <div className="absolute -left-6">
                      <Image
                        src="/images/20.webp"
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>{" "}
                    <div className="  rounded-full flex items-center justify-center ml-10">
                      {" "}
                      <Image
                        src={item.icon}
                        height={100}
                        width={100}
                        alt=""
                        className="lg:min-h-[100px] min-h-[50px] min-w-[50px] lg:min-w-[100px]"
                      />
                    </div>
                    <div className="h-[70px] w-[70px] flex items-center justify-center text-6xl bg-clip-text from-[#755AFF] to-[#9B88FF] bg-gradient-to-r text-transparent font-extrabold">
                      {index + 1}
                    </div>
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mx-auto">
              <Audit />
            </div>
          </div>
          <Services />
        </div>
      </div>
    </>
  );
};

export default page;
