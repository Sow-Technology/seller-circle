import React from "react";
import { motion } from "framer-motion";
import Works from "@/components/sections/Works";
import {
  IoAlbumsOutline,
  IoAnalytics,
  IoColorWandOutline,
  IoCreateOutline,
  IoCubeOutline,
  IoFlashOutline,
  IoMicOutline,
  IoPricetagOutline,
  IoSwapHorizontalOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import {
  FaAward,
  FaChartPie,
  FaDatabase,
  FaGlobe,
  FaLayerGroup,
  FaLocationArrow,
  FaRetweet,
  FaTags,
  FaVectorSquare,
} from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { FaCogs, FaDotCircle, FaDraftingCompass } from "react-icons/fa";
import Audit from "@/components/forms/Audit";
import NumberedDesign1 from "@/components/Animations/NumberedDesign1";
import CTA from "./CTA";
import { BiBriefcase } from "react-icons/bi";
const Items = [
  {
    title: "Crafting Compelling Product Images",
    hl1: "Category-Researched Infographics",
    hl2: "High-Impact Image Creation",
    l1: "Develop visually appealing infographics that highlight key features and benefits, tailored to your product category.",
    l2: "Design images that resonate with search keywords and are optimized for better conversion rates.",
    i1: <FaChartPie />,
    i2: <IoCreateOutline />,
  },
  {
    title: "Optimized Titles, Bullet Points, and Keywords",
    hl1: "Keyword-Rich Titles",
    hl2: "Effective Bullet Points",
    hl3: "Research-Based Keywords",
    l1: "Create product titles that are not only engaging but also optimized with relevant keywords to improve search visibility.",
    l2: " Write concise and compelling bullet points that clearly communicate your product’s unique selling points.",
    l3: "Incorporate researched keywords into your listings to drive targeted traffic and enhance discoverability.",
    i1: <FaTags />,
    i2: <FaDotCircle />,
    i3: <FaDatabase />,
  },
  {
    title: "Conversion-Driven Design",
    hl1: "Enhanced Visuals",
    hl2: "Strategic Layouts",
    l1: "Utilize high-quality images and infographics that attract attention and drive purchase decisions.",
    l2: "Design product pages with a focus on clarity and ease of navigation, ensuring a seamless shopping experience.",
    i1: <IoColorWandOutline />,
    i2: <IoCubeOutline />,
  },
];
const NumberedData = [
  {
    title: "Proven Expertise",
    desc: "Over 1 million product listings optimized, showcasing our extensive experience and knowledge in creating effective Amazon pages.",
    icon: <BiBriefcase />,
    color: "#6A1B9A",
  },
  {
    title: "Tailored Solutions",
    desc: "We offer customized design solutions that align with your brand’s goals and product requirements.",
    icon: <FaCogs />,
    color: "#26A69A",
  },
  {
    title: "High Conversion Rates",
    desc: "Our designs are crafted to improve engagement and boost conversion rates by leveraging keyword optimization and compelling visuals.",
    icon: <IoAnalytics />,
    color: "#FBBB3B",
  },
  {
    title: "Comprehensive Approach",
    desc: "From product images to titles and descriptions, we handle every aspect of your product page to ensure it performs at its best.",
    icon: <FaGlobe />,
    color: "#42A5F5",
  },
];
const Catalog = () => {
  return (
    <div>
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Amazon Product Page Design Services
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Transform Your Listings into{" "}
        <span className="text-background">High-Performing Sales Machines.</span>
      </motion.h2>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-xl lg:text-3xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Designs That Convert, Listings That Perform
      </motion.h2>
      <motion.p
        className="mx-auto max-w-4xl text-center p-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        We specialize in creating high-impact product pages that not only
        attract attention but also drive conversions. Our expertise, honed
        through working on over 1 million product listings, ensures your product
        images, infographics, titles, and descriptions are optimized to enhance
        visibility and sales.
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
                {item.i3 && (
                  <div className="flex gap-7">
                    {" "}
                    <div className="w-8 h-8 text-5xl text-background">
                      {item.i3}
                    </div>{" "}
                    <div>
                      <h3 className="lg:text-2xl  font-bold text-lg">
                        {item.hl3}
                      </h3>
                      <p>{item.l3}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
          {" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
            {" "}
            <video autoPlay loop muted>
              <source src="/videos/4.mp4" />
            </video>
          </div>
        </div>
      </div>
      <Works />
      <div className="my-5 flex flex-row items-center justify-center flex-wrap gap-7">
        <div className="w-full">
          {" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Why us?
          </motion.h3>
        </div>
        <div className="">
          <Audit />
        </div>
        <div className="lg:w-1/2 w-[90%]">
          <NumberedDesign1 data={NumberedData} />
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Catalog;
