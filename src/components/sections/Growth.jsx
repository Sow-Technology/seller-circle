"use client";
import Image from "next/image";
import React from "react";
import { easeIn, motion } from "framer-motion";
import Audit from "../forms/Audit";
const items = [
  {
    title: "Growth & Scale up Management",
    description:
      "Our approach integrates data-driven strategies for managing daily operations, optimizing creatives, and catalog management. We leverage advanced advertising technologies to maximize ROI and reach your target audience. Our holistic solutions are tailored to navigate growth challenges and capitalize on market opportunities, driving exponential business growth.",
    icon: "/images/11.webp",
  },
  {
    title: "Amazon Advertising  Services ",
    description:
      "Unlock the full potential of your Amazon presence with our targeted advertising campaigns, designed to maximize ROI. We utilize advanced techniques for enhanced visibility and sales while optimizing ad spend. Through our marketing stream and tracking capabilities, we ensure that every dollar spent delivers a meaningful impact, driving measurable results for your brand.",
    icon: "/images/12.webp",
  },
  {
    title: "Market Places Advertising ",
    description:
      "Expand your brand's reach across diverse marketplaces using personalized advertising strategies. Amplify your brand presence and customer engagement on top e-commerce platforms, including Walmart, Flipkart, and Quick commerce channels. Our multi-channel advertising solutions ensure holistic market penetration and measurable metrics, empo wering your brand to thrive in competitive market spaces.",
    icon: "/images/13.webp",
  },
  {
    title: "Catalog Creation & Design ",
    description:
      "Elevate your product listings with captivating catalog designs tailored for marketplace ecommerce platforms. Ensure seamless navigation and an enhanced user experience for shoppers, driving conversions and sales. Incorporate SEO-based titles and details, along with Product Display Page designs featuring rich infographic information. Our expertise extends to marketplace ecommerce catalog creation, optimizing visibility and engagement across multiple platforms.",
    icon: "/images/14.webp",
  },
  {
    title: "Amazon Creative Storytelling ",
    description:
      "Craft compelling brand narratives on Amazon that resonate with your audience. Utilize Brand Story Creation and A+ Design to communicate product USPs effectively, engaging customers through storytelling to showcase your brand's unique value. Our expertise extends to creating great designs that visually tell your brand's story, utilizing the brand store to boost order value and reduce bounce rates. Implement creative content strategies to stand out in the competitive marketplace and drive meaningful engagement with your audience.",
    icon: "/images/15.webp",
  },
  {
    title: "Strategy And consulting ",
    description:
      "Partner with seasoned experts for winning strategies and actionable insights to optimize your Amazon presence and marketing efforts. Drive business growth through informed decision-making and strategic planning, whether you're launching your brand on Amazon or seeking expert guidance for a perfect launch",
    icon: "/images/16.webp",
  },
  {
    title: "Amazon DSP Services ",
    description:
      "we go beyond conventional strategies to elevate your Amazon DSP campaigns. Our approach begins with meticulous analysis, ensuring we target the right audience and build precise customer targets. We craft a creative funnel designed for optimal awareness, capturing attention and driving engagement. Engineered for long-term success, our DSP campaigns are structured to deliver sustained results, amplifying your brand's presence and impact on Amazon.",
    icon: "/images/11.webp",
  },
];
const Growth = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col lg:px-20 px-8 relative z-10">
      {" "}
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
      <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-10 relative z-10 mt-20 ">
        {items.map((item, index) => (
          <motion.div
            key={index}
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
                VIEW MORE{" "}
                <Image src="/images/10.svg" height={50} width={50} alt="" />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex items-center justify-center mr-auto ml-10 gap-2 flex-col font-bold">
          {" "}
          <div className="w-[150px] h-[150px] cshad rounded-full flex items-center justify-center">
            {" "}
            <Image src="/images/10.svg" height={100} width={100} alt="" />
          </div>
          VIEW ALL
        </div>
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ ease: "easeIn", duration: 1, type: "tween" }}
        >
          <Audit />
        </motion.div>
      </div>
    </div>
  );
};

export default Growth;
