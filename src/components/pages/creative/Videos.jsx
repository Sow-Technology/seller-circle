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
  IoUmbrellaOutline,
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
  FaWrench,
} from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import {
  FaCogs,
  FaDotCircle,
  FaDraftingCompass,
  FaTachometerAlt,
} from "react-icons/fa";
import Audit from "@/components/forms/Audit";
import NumberedDesign1 from "@/components/Animations/NumberedDesign1";
import CTA from "./CTA";
import { BiBriefcase } from "react-icons/bi";
import CycleCard from "@/components/cards/CycleCard";
import CTA2 from "./CTA2";
const Items = [
  {
    title: "Informative Content",
    desc: "We create engaging videos that provide comprehensive insights into your product. These videos are carefully researched to highlight your product's category, unique selling points (USPs), and styling language that resonates with your brand.",
  },
  {
    title: "Enhanced Decision-Making",
    desc: "Our videos are designed to help buyers make informed decisions by presenting clear, relevant information about your product in a visually appealing format.",
  },
  {
    title: "Brand Alignment",
    desc: "Each video is crafted to match your brand’s identity and messaging, ensuring consistency across all customer touchpoints.",
  },
];
const Items2 = [
  {
    title: "Attention-Grabbing",
    desc: "Our 30-40 second ads are designed to capture attention in the crowded Amazon search environment. We focus on creating compelling content that stands out and drives clicks.",
  },
  {
    title: "Conversion-Focused",
    desc: "We emphasize key product USPs, upsell opportunities, and high-impact content to convert clicks into sales. Our videos are engineered to drive engagement and boost your conversion rates.",
  },
  {
    title: "Strategic Content",
    desc: "Tailored to maximize ad performance, our videos are created with a deep understanding of what drives consumer behavior and encourages purchasing decisions.",
  },
];
const NumberedData = [
  {
    title: "Expertise in Video Production",
    desc: "Proven experience in creating videos that enhance product presentations and drive ad performance.",
    icon: <FaTachometerAlt />,
    color: "#6A1B9A",
  },
  {
    title: "Customized Solutions",
    desc: "Tailored video content that aligns with your brand’s goals and resonates with your target audience.",
    icon: <FaWrench />,
    color: "#26A69A",
  },
  {
    title: "Full-Service Approach",
    desc: "From concept to production, we handle every aspect of video creation to deliver content that meets your needs and exceeds expectations.",
    icon: <IoUmbrellaOutline />,
    color: "#FBBB3B",
  },
];
const data = [
  {
    title: "Enhanced Product Showcase",
    b: "Detailed Insights",
    description:
      " Our Product Display Page Videos offer a thorough overview of your product, helping potential buyers understand its benefits and features in a concise format.",
  },
  {
    title: "Increased Ad Effectiveness",
    b: "Click-to-Sale Conversion",
    description:
      "Amazon Ads Videos are optimized to convert viewers into buyers by highlighting the most compelling aspects of your product and encouraging immediate action.",
  },
  {
    title: "Brand Consistency",
    b: "Aligned Messaging",
    description:
      "We ensure that both Product Display Page and Amazon Ads Videos are in harmony with your brand’s identity and message, enhancing overall brand perception.",
  },
  {
    title: "Research-Driven Approach",
    b: "Targeted Content",
    description:
      "Our videos are informed by extensive research into your product category and target audience, ensuring that the content is relevant and impactful.",
  },
  {
    title: "High-Quality Production",
    b: "Professional Quality",
    description:
      "Each video is produced with high standards of quality, ensuring that your brand is presented in the best light possible.",
  },
  {
    title: "Strategic Storytelling",
    b: "Engaging Narratives",
    description:
      "We use effective storytelling techniques to engage viewers and create a memorable brand experience.",
  },
];
const Videos = () => {
  return (
    <div>
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Product Display Page & Amazon Ads Video Creation
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Captivate and Convert with{" "}
        <span className="text-background">Expertly Crafted Videos.</span>
      </motion.h2>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-xl lg:text-3xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Engage, Inform, Convert: Elevate Your Brand with Impactful Video Content{" "}
      </motion.h2>
      <motion.p
        className="mx-auto max-w-4xl text-center p-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        At Seller Circle, we understand the power of video in driving customer
        engagement and conversions. Our Product Display Page Videos and Amazon
        Ads Videos are designed to capture attention, convey key information,
        and drive sales. Whether it&#39;s a detailed product showcase or a
        high-impact ad, our video solutions are tailored to meet your
        brand&#39;s unique needs.
      </motion.p>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Product Display Page Videos
      </motion.h3>
      <div className="flex lg:flex-row-reverse flex-col-reverse relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
          {Items.map((item, idx) => (
            <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
              <div className="lg:text-3xl  font-extrabold text-xl">
                {item.title}
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
          {" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
            {" "}
            <video autoPlay loop muted>
              <source src="/videos/6.mp4" />
            </video>
          </div>
        </div>
      </div>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Amazon Ads Videos
      </motion.h3>
      <div className="flex lg:flex-row-reverse flex-col-reverse relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col-reverse gap-12 lg:px-10">
          {Items2.map((item, idx) => (
            <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
              <div className="lg:text-3xl  font-extrabold text-xl">
                {item.title}
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
          {" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
            {" "}
            <video autoPlay loop muted>
              <source src="/videos/5.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
        {data.map((item, index) => (
          <CycleCard item={item} index={index} key={index} />
        ))}
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
            Why Seller Circle?
          </motion.h3>
        </div>
        <div className="">
          <Audit />
        </div>
        <div className="lg:w-1/2 w-[90%]">
          <NumberedDesign1 data={NumberedData} />
        </div>
      </div>
      <CTA2 />
    </div>
  );
};

export default Videos;
