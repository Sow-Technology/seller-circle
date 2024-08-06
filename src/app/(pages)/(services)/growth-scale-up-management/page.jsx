"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { easeIn, motion } from "framer-motion";
import AM1 from "@/components/sections/services/AM1";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { approchItems, marqueeItem } from "@/lib/data";
import CTA from "@/components/pages/growth/CTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CycleCard from "@/components/cards/CycleCard";
const items = [
  {
    title: "Strategic Planning",
    description:
      "Working with you to create a strategic plan to get your business where you want it to be.",
  },
  {
    title: "Best Practices",
    description:
      "Keeping up to date on current best practices for Amazon businesses to grow your revenue and profit numbers.",
  },
  {
    title: "Listing Creation",
    description:
      "Creating listings, parent-child variations, virtual bundles, etc.",
  },
  {
    title: "Promotional Strategies",
    description:
      "Providing suggestions on coupons, deals, product pricing, new product bundles, and more. We’ll then execute any changes.",
  },
  {
    title: "SEO Optimization",
    description:
      "Utilizing SEO to grow your impressions, clicks, sales, and organic reach.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Optimizing listings for conversion through both copy and photography updates.",
  },
  {
    title: "Holistic Approach to Scale",
    description:
      "Implementing a Flywheel strategy for advertising on Amazon combined with a conversion engine, SEO, and creative tactics to scale up.",
  },
  {
    title: "Data-Driven Strategies",
    description:
      "Utilizing insights from business reports and brand analytics to identify top-performing products and drive growth.",
  },
  {
    title: "Advanced Advertising Technologies",
    description:
      "Leveraging cutting-edge tools to maximize ROI and reach your target audience effectively.",
  },
  {
    title: "Holistic Approach",
    description:
      "Navigating growth challenges and capitalizing on market opportunities with tailored solutions.",
  },
  {
    title: "Collaborative Management",
    description:
      "Ensuring no opportunities are missed through a collaborative approach with our in-house team.",
  },
  {
    title: "Transparent Processes",
    description:
      "Providing clear insights into your campaign performance and growth trajectory for confident delegation.",
  },
];

const data = [
  {
    title: "Ignite Your Business Growth",
    description:
      "Our approach integrates data-driven strategies for managing daily operations, optimizing creatives, and catalog management. We leverage advanced advertising technologies to maximize ROI and reach your target audience.",
  },
  {
    title: "Tailored Holistic Solutions",
    description:
      "Our holistic solutions are designed to navigate growth challenges and capitalize on market opportunities, driving exponential business growth. We tailor our strategies to meet the unique needs of your brand, ensuring you stay ahead in the competitive marketplace.",
  },
  {
    title: "Maximize Your ROI",
    description:
      "We leverage cutting-edge advertising technologies to ensure your campaigns deliver the highest return on investment. Our team continuously optimizes your advertising efforts, targeting the right audience at the right time for maximum impact.",
  },
  {
    title: "Collaborative Account Management",
    description:
      "Our in-house team of Account Executives takes a collaborative approach to account management. We ensure no opportunities are left on the table by simplifying volumes of data with our tech and expertise.",
  },
  {
    title: "Transparent and Confident Delegation",
    description:
      "With our transparent processes, you gain the confidence to delegate your advertising efforts. Our tech simplifies data, giving you clear insights into your campaign performance and growth trajectory.",
  },
  {
    title: "Full Funnel Advertising Strategy",
    description:
      "Scaling your sales through a well-researched audience. Our full funnel advertising strategy ensures that each stage of the customer journey is targeted effectively, from awareness to conversion. We analyze and engage the right audience segments, driving traffic and maximizing sales opportunities through tailored ads and precise targeting.",
  },
];
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 z-[39] ">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Growth & Scale-up ! Amazon Full Service Management
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Amazon Operations <br />+ <br />
            Advertising Management
          </motion.h2>
          <AM1 />
          <div className="flex gap-5 flex-row flex-wrap my-5  justify-center gap-y-10">
            {data.map((item, index) => (
              <CycleCard item={item} index={index} key={index} />
            ))}
          </div>
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
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10"
          >
            Explore Our{" "}
            <span className="text-[#039BE4]">
              Growth and Full Service Management{" "}
            </span>
          </motion.h2>
          <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-10 relative z-10 my-20 ">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeIn }}
                className="min-w-[280px] max-w-[400px] p-10 flex flex-col gap-7 rounded-2xl cshad  relative z-10 bg-white "
              >
                <h4 className="nunito font-extrabold text-2xl hover:text-background transition-all duration-300 hover:tracking-widest">
                  {item.title}
                </h4>
                <p className="nunito text-xs text-left">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <CTA />
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10"
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
            <div className="flex flex-row lg:px-12 px-8 lg:max-w-[45%]">
              <div>
                <div className="w-[2px] rounded-2xl h-[90%] justify-self-center self-center bg-[#A9A8A8] mt-[20px]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 ">
                {" "}
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
          <Services slice="1" />
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
