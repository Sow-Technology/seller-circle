"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { approchItems } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";

const Approach = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20 lg:px-20 px-8">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Our approach{" "}
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
      >
        No one-size-fits-all here,{" "}
        <span className="text-[#039BE4]">only tailored strategies.  </span>
      </motion.h2>
      <div className="flex flex-row flex-wrap gap-16 mt-16">
        <div className="lg:max-w-[40%] min-w-[300px]">
          <div className="rounded-r-full p-10 bg-[#039BE4] text-white lg:px-20 px-8">
            Adopting a holistic approach to your entire account, not just
            individual ads, crafting strategies for increased visibility and
            optimized search flow.
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="p-4 bg-gray-100 shadow-sm rounded-xl my-5 max-sm:max-w-[85vw]"
          >
            <div className="min-w-[280px] max-w-[600px]  flex flex-row flex-wrap items-center">
              {" "}
              <Image
                src="/gif/2.gif"
                unoptimized
                alt=""
                width={500}
                height={700}
              />
              {/* <motion.div
                className="w-[70%] max-sm:max-w-[62%]"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", type: "spring", duration: 0.2 }}
              >
                <Image
                  src="/images/approach/a1.png"
                  width={400}
                  height={400}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", type: "spring", duration: 0.4 }}
                className="w-[30%] sm:max-w-[25%] flex justify-between flex-col sm:py-3 sm:mb-5 gap-2 sm:gap-7 "
              >
                <motion.div
                  className=""
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeIn", type: "spring", delay: 0.4 }}
                >
                  <Image
                    src="/images/approach/a2.png"
                    width={400}
                    height={400}
                    alt=""
                  />{" "}
                </motion.div>
                <motion.div
                  className=""
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeIn", type: "spring", delay: 0.8 }}
                >
                  <Image
                    src="/images/approach/a3.png"
                    width={400}
                    height={400}
                    alt=""
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", type: "spring", duration: 0.6 }}
                className="w-full flex items-center gap-5 max-sm:gap-2 max-sm:max-w-[85vw]"
              >
                <motion.div
                  className="w-1/4 flex-1 max-sm:max-w-[33%] object-contain"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeIn", type: "spring", delay: 0.4 }}
                >
                  <Image
                    src="/images/approach/a4.png"
                    width={400}
                    height={400}
                    alt=""
                  />
                </motion.div>
                <motion.div
                  className="w-1/4 flex-1 max-sm:max-w-[33%] object-contain"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeIn", type: "spring", delay: 0.8 }}
                >
                  <Image
                    src="/images/approach/a5.png"
                    width={400}
                    height={400}
                    alt=""
                  />
                </motion.div>
                <motion.div
                  className="w-1/5 object-contain"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeIn", type: "spring", delay: 1.2 }}
                >
                  <Image
                    src="/images/approach/a6.png"
                    width={400}
                    height={400}
                    alt=""
                    className="object-contain"
                  />
                </motion.div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
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
                  <Image src="/images/20.webp" alt="" height={50} width={50} />
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
            <Link href="/amazon-advertising" className="mt-10">
              {" "}
              <Button variant="cta" className="text-2xl px-10 py-8">
                Request AN Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
