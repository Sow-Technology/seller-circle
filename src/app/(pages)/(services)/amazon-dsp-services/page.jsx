"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CycleCard from "@/components/cards/CycleCard";
import CTA from "@/components/pages/dsp/CTA";
import Awards from "@/components/sections/Awards";

import { GiPalette } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";

import Why from "@/components/pages/dsp/Why";
import { FaFunnelDollar } from "react-icons/fa";

const marqueeItem = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
  "/images/brands/11.png",
  "/images/brands/12.png",
  "/images/brands/13.png",
  "/images/brands/14.png",
  "/images/brands/15.png",
];
const Items = [
  {
    title: "Full-Funnel Strategy",
    description:
      "Plan customer journeys from awareness to purchase, ensuring a higher conversion rate.",
    icon: <FaFunnelDollar />,
  },
  {
    title: "Creative Assets",
    description:
      "Craft compelling creative assets tailored for your indicated messaging.",
    icon: <GiPalette />,
  },
  {
    title: "AMC Insight",
    description:
      "Utilize our AMC insight to gain a competitive edge. We analyze market trends and consumer behavior, providing data-driven recommendations to optimize your ad spend.",
    icon: <IoMdAnalytics />,
  },
];
const data = [
  {
    title: "Lifestyle Audiences",
    description:
      "Lifestyle audiences are based on shopper’s ongoing online behavior.",
  },
  {
    title: "In-Market Audiences",
    description:
      "In-market audiences are built based on someone’s shopping behavior on Amazon – specifically related to the category page they visit.",
  },
  {
    title: "Competitor Purchase Audiences",
    description:
      "Competitor purchasing audiences are built based on people who previously purchased a competitor ASIN.",
  },
  {
    title: "Competitor Retargeting Audiences",
    description:
      "Competitor retargeting audiences are built based on people who visited a competitor ASIN but didn’t convert.",
  },
  {
    title: "Cross Retargeting Audiences",
    description:
      "Cross retargeting audiences target people that viewed one of the seller’s other ASIN but didn’t convert.",
  },
  {
    title: "Pixel Retargeting Audiences",
    description:
      "Pixel retargeting audiences are built based on people who visited an external website containing a tracking pixel.",
  },
  {
    title: "ASIN Retargeting Audiences",
    description:
      "ASIN retargeting audiences are built based on people who visit your product detail page and don’t convert.",
  },
  {
    title: "Cross Purchase Audiences",
    description:
      "Cross purchase audiences target people that previously purchased the seller’s complementary ASIN (e.g., audience purchased a pencil, now target with a pencil sharpener).",
  },
  {
    title: "ASIN Repurchase Audiences",
    description:
      "Repurchase audiences target people that previously purchased the seller’s own ASIN.",
  },
];
const cycle = [
  {
    title: "Dominate Your Niche",
    l1: "Boost conversions by optimizing the relevance of your campaigns to shoppers most likely to love your products.",
  },
  {
    title: "Broaden Your Audience Reach",
    l1: "Tell your brand’s story to more people by targeting non-endemic keywords.",
    l2: "Keep your brand in the mind of consumers by showing your products to them wherever they search and shop.",
  },
];
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 z-[39] lg:px-5 flex flex-col gap-5">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Amazon DSP Management
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-4xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            “Reach New Heights with Amazon DSP”
          </motion.h2>
          <div className="">
            <div className=""></div>
            <div className="">
              {" "}
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
              >
                Your Brand in Front of{" "}
                <span className="text-[#039BE4]">Eager Shoppers </span>
              </motion.h2>{" "}
              <motion.p
                className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
              >
                Our team generates targeted ad campaigns that connect your
                products with the right audience, utilizing Amazon&#39;s wealth
                of shopper data. With our service, you&#39;ll benefit from
                increased visibility, enhanced brand awareness, and a boost in
                sales. We handle everything from ad creation to performance
                analysis, ensuring your campaigns are optimized for maximum
                impact.
              </motion.p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col-reverse relative my-4">
            <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
              {Items.map((item, idx) => (
                <div className="flex text-[#272727] gap-10 " key={idx}>
                  <div className="w-8 h-8 text-5xl text-background">
                    {item.icon}
                  </div>{" "}
                  <div>
                    <h3 className="lg:text-3xl  font-extrabold text-xl">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
              {" "}
              <div className="sticky top-24 h-80 w-80 border-2 border-background bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
                {" "}
                IMAGE
                {/* <motion.h3
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 100 }}
                  viewport={{ once: true }}
                  className="font-[900] text-2xl lg:text-4xl text-[#272727] text-center max-w-4xl uppercase mx-auto"
                >
                  Navigating Success Together.
                </motion.h3> */}
              </div>
            </div>
          </div>
          <motion.p
            className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            With our help, Amazon’s unparalleled Demand-Side Platform (DSP) can
            take your brand to new audiences on Amazon and beyond. Leverage the
            power of exclusive audiences and advanced data analytics to drive
            your brand&#39;s success.
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Amazon Marketing Cloud
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
          >
            Data-Driven Strategies for{" "}
            <span className="text-[#039BE4]">Optimal Results. </span>
          </motion.h2>{" "}
          <motion.p
            className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            The power of Amazon’s platform lies in its data. Consumer behaviors
            are mapped to pre-built audiences that align your product to their
            lifestyles, habits, demographics, and more, giving us the insights
            needed to help you connect to the right shoppers more often.
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl mt-5 lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Guide Customers Through the Entire Funnel{" "}
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
          >
            “Connect with Shoppers Through{" "}
            <span className="text-[#039BE4]">
              Tailored Audience Strategies&#34;{" "}
            </span>
          </motion.h2>{" "}
          <div className="flex gap-5 flex-row flex-wrap my-5  justify-center gap-y-10">
            {data.map((item, index) => (
              <CycleCard item={item} index={index} key={index} />
            ))}
          </div>
          <div className="">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            >
              Non-Endemic Advertising on Amazon
            </motion.h3>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
            >
              Your Brand on{" "}
              <span className="text-[#039BE4]">Amazon and Beyond</span>
            </motion.h2>{" "}
            <motion.p
              className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
            >
              We’re experts on Amazon but can also help you reach new shoppers
              with non-endemic search strategies. Drive traffic from everywhere
              shoppers search and maximize your product visibility.
            </motion.p>
            <div className="flex flex-row flex-wrap justify-center  gap-10 relative z-10 my-20 max-lg:px-5  ">
              {cycle.map((item, idx) => (
                <CycleCard item={item} index={idx} key={idx} />
              ))}
            </div>
          </div>
          <div className="">
            <div className=""></div>
            <div className="">
              {" "}
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
              >
                The Power of{" "}
                <span className="text-[#039BE4]">Exclusive Audiences </span>
              </motion.h2>{" "}
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-3xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
              >
                Your Brand, Everywhere Shoppers Search.{" "}
              </motion.h2>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col-reverse relative my-4">
            <div className="lg:w-1/2 w-full p-5 flex flex-col gap-4 text-lg lg:px-10">
              <motion.p
                className="mx-auto lg:max-w-4xl max-lg:p-4 text-left "
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
              >
                Amazon’s DSP is an extremely powerful tool for growth, even if
                you don’t sell on Amazon. We empower your success by
                understanding the nuances of audiences and budgeting, enabling
                you to reach the right shoppers without the challenge of
                resources or expertise.
              </motion.p>
              <ul className="list-disc p-4 flex gap-10">
                <li className="list-none border-2 border-background p-2 rounded-md px-5 hover:bg-background hover:text-white cursor-pointer">
                  Display Ads{" "}
                </li>
                <li className="list-none border-2 border-background p-2 rounded-md px-5 hover:bg-background hover:text-white cursor-pointer">
                  Video Ads{" "}
                </li>
                <li className="list-none border-2 border-background p-2 rounded-md px-5 hover:bg-background hover:text-white cursor-pointer">
                  {" "}
                  Audio Ads{" "}
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
              {" "}
              <div className="sticky top-24 h-80 w-80 border-2 border-background bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
                {" "}
                IMAGE
                {/* <motion.h3
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 100 }}
                  viewport={{ once: true }}
                  className="font-[900] text-2xl lg:text-4xl text-[#272727] text-center max-w-4xl uppercase mx-auto"
                >
                  Navigating Success Together.
                </motion.h3> */}
              </div>
            </div>
          </div>
          <Why />
          <Awards />
          <CTA />
          <Services slice="7" />
          <div className="">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10"
            >
              Brands <span className="text-[#039BE4]">we work with  </span>
            </motion.h2>
            <div className="my-10 overflow-hidden w-screen lg:max-w-7xl">
              <Marquee
                pauseOnHover
                className="flex items-center justify-center overflow-hidden max-w-6xl mx-auto"
              >
                {marqueeItem.map((item, index) => (
                  <div
                    className="max-w-[300px] flex items-center mx-5 "
                    key={index}
                  >
                    <Image src={item} alt="" width={150} height={150} />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
