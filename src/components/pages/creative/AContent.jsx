import React from "react";
import { motion } from "framer-motion";
import { FaColumns, FaFileAlt } from "react-icons/fa";
import { FaPallet } from "react-icons/fa6";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { BiPieChart, BiWindow } from "react-icons/bi";
import CycleCard from "@/components/cards/CycleCard";
import Works from "@/components/sections/Works";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Pricing from "@/components/forms/Pricing";
const Items = [
  {
    title: "Enhanced Product Descriptions",
    hl1: "Detailed Information",
    hl2: "Visual Appeal",
    l1: "Utilize EBC to create comprehensive product descriptions that include images, comparison charts, and formatted text for better clarity.",
    l2: "Enhance descriptions with high-quality images that showcase key product features and uses.",
    i1: <FaFileAlt />,
    i2: <FaPallet />,
  },
  {
    title: "Brand Story",
    hl1: "Narrative Building",
    hl2: "Customer Engagement",
    l1: "Share your brand’s story, mission, and values to create a deeper connection with customers.",
    l2: "Use your brand’s story to build trust and foster customer loyalty.",
    i1: <IoBookOutline />,
    i2: <IoPeopleOutline />,
  },
  {
    title: "High-Quality Images",
    hl1: "Visual Highlights",
    hl2: "Customer Visualization",
    l1: "Integrate high-resolution images that effectively highlight your product’s features and benefits.",
    l2: "Help customers visualize your product in various settings, improving their overall shopping experience.",
    i1: <IoStatsChartOutline />,
    i2: <BiPieChart />,
  },
  {
    title: "Custom Modules",
    hl1: "Tailored Layouts",
    hl2: "Flexible Presentation",
    l1: "Choose from various layout options and modules to present your product information in a customized manner.",
    l2: "Adapt the content presentation to fit your brand’s style and product needs.",
    i1: <FaColumns />,
    i2: <BiWindow />,
  },
];
const data = [
  {
    title: "Increased Conversion Rates",
    b: "Effective Information",
    description:
      " EBC helps answer customer questions and address concerns, reducing cart abandonment and boosting conversions.",
  },
  {
    title: "Enhanced Brand Trust and Credibility",
    b: "Effective Information",
    description:
      "High-quality EBC establishes your brand’s credibility and professionalism, making your listings more appealing to potential buyers.",
  },
  {
    title: "Reduced Return Rates",
    b: "Clear Expectations",
    description:
      "Thorough and accurate product information helps set clear expectations, reducing the likelihood of returns.",
  },
  {
    title: "Improved SEO Performance",
    b: "Search Visibility",
    description:
      "Enhanced content with relevant keywords improves your product’s search ranking on Amazon, increasing visibility in search results.",
  },
  {
    title: "Competitive Advantage",
    b: "Stand Out Listings",
    description:
      "EBC provides a competitive edge by making your listings more engaging and noticeable compared to standard descriptions.",
  },
  {
    title: "Better Customer Engagement",
    b: "Engaging Experience",
    description:
      "A visually appealing and informative EBC page leads to higher customer engagement, increasing the likelihood of purchases and repeat buyers",
  },
];
const AContent = () => {
  return (
    <div>
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Transform Your Listings with A+ Content:{" "}
        <span className="text-background">Elevate, Engage, Convert!</span>
      </motion.h2>
      <motion.p
        className="mx-auto max-w-4xl text-center p-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        Seller Circle’s Amazon A+ / Enhanced Brand Content (EBC) services. We
        specialize in crafting visually compelling and informative product pages
        that not only captivate customers but also drive conversions. Our
        expertise in EBC ensures that your product listings stand out with
        detailed descriptions, high-quality visuals, and a strong brand
        narrative.
      </motion.p>
      <div className="flex lg:flex-row-reverse flex-col-reverse relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
          {Items.map((item, idx) => (
            <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
              <div className="lg:text-3xl  font-extrabold text-xl">
                {item.title}
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex gap-7">
                  {" "}
                  <div className="w-8 h-8 text-5xl text-background">
                    {item.i1}
                  </div>{" "}
                  <div>
                    <h3 className="lg:text-2xl  font-bold text-lg">
                      {item.hl1}
                    </h3>
                    <p>{item.l1}</p>
                  </div>
                </div>
                <div className="flex gap-7">
                  {" "}
                  <div className="w-8 h-8 text-5xl text-background">
                    {item.i2}
                  </div>{" "}
                  <div>
                    <h3 className="lg:text-2xl  font-bold text-lg">
                      {item.hl2}
                    </h3>
                    <p>{item.l2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
          {" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
            {" "}
            <video autoPlay loop muted>
              <source src="/videos/1.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="my-20">
        {" "}
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          Why Enhanced Brand Content Matters
        </motion.h3>
        <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
          {data.map((item, index) => (
            <CycleCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
      <Works />
      <div className="flex flex-row gap-10 items-center justify-center flex-wrap">
        <div className="">
          <Image src="/images/services/5.png" alt="" width="500" height="500" />
        </div>
        <div className="">
          <Pricing services={["Basic A+ Content"]} formType="basicA+" />
        </div>
      </div>
    </div>
  );
};

export default AContent;
