"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Audit from "@/components/forms/Audit";
import CustomerMaqrquee from "@/components/sections/CustomerMarquee";
import OurStory from "@/components/sections/Story";
import Working from "@/components/sections/Working";
import Marquee from "@/components/ui/marquee";
import TypingAnimation from "@/components/ui/typing-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const marqueeItem = [
  "/images/s1.webp",
  "/images/s2.webp",
  "/images/s3.webp",
  "/images/s4.webp",
  "/images/s5.webp",
  "/images/s6.webp",
  "/images/s7.webp",
  "/images/s8.webp",
  "/images/s9.webp",
  "/images/s10.webp",
];
const approchItems = [
  {
    icon: "/images/21.webp",
    text: "Conduct a comprehensive 30-point account audit for improvement opportunities.",
  },
  {
    icon: "/images/22.webp",
    text: "Tailor strategies for product listings, competitor data, and Amazon ads aligned with brand goals.",
  },
  {
    icon: "/images/23.webp",
    text: "Kickstart account build-out focusing on lower funnel optimization.",
  },
  {
    icon: "/images/24.webp",
    text: "Optimize, craft new campaign strategies, and explore expansion opportunities post-account preparation.",
  },
];
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-20 z-[39] flex flex-col gap-7 lg:px-20 px-8">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          Your growth partner{" "}
        </motion.h3>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-4xl text-center my-7"
        >
          Leveraging Talent + Tech to scale your brand and{" "}
          <span className="text-[#039BE4]">
            capture audiences effectively, letting you focus on what matters.
          </span>
        </motion.h2>
        <TypingAnimation
          className="text-3xl"
          text="“We are one circle of growth, succeeding like a flywheel” (Seller Circle)"
        />
        <motion.p
          className="mx-auto max-w-4xl text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
        >
          <b>Seller Circle</b> is your one-stop destination for all marketplace
          service needs. Founded in 2017, our vision is to enable and accelerate
          brands and sellers on marketplaces with a variety of services,
          including catalog creation, creative solutions, and marketing
          advertising. With over 20 certifications and awards for our strategic
          excellence, we bring 30+ years of combined experience and a team of
          50+ dedicated professionals. We act as an extended arm of your
          business, partnering with you to scale your brand.
        </motion.p>
        <div className="my-20">
          <Marquee
            pauseOnHover
            className="flex items-center justify-center gap-5"
          >
            {marqueeItem.map((item, index) => (
              <div className="max-w-[300px] flex items-center " key={index}>
                <Image
                  src={item}
                  alt=""
                  loading="lazy"
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </Marquee>
        </div>
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
        <motion.p
          className="mx-auto max-w-4xl text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
        >
          At Seller Circle, we specialize in scaling sales for brands on Amazon
          and other marketplaces through a holistic approach and proven
          strategies for PPC and DSP. As an advanced Amazon partner with
          hands-on expertise across all categories, we’ve worked with over 1000+
          brands, tailoring unique strategies to maximize ROI and impact
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
          <div className="">
            <Audit />
          </div>
        </div>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
        >
          Our <span className="text-[#039BE4]">Story </span>
        </motion.h2>
        <OurStory />
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase"
        >
          why <span className="text-[#039BE4]">seller circle </span>
        </motion.h2>
        <Image
          src="/images/a1.png"
          alt=""
          width={1200}
          height={1200}
          className="w-auto max-h-[80vh] object-contain"
        />
        <Working />
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl text-balance max-w-5xl mx-auto text-center my-7 uppercase"
        >
          Check what our{" "}
          <span className="text-[#039BE4]">Clients have to say about us </span>
        </motion.h2>
        <CustomerMaqrquee />
      </div>
      <Footer />
    </>
  );
};

export default Page;
