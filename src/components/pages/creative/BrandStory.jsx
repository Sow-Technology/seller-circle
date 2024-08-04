import React from "react";
import { motion } from "framer-motion";
import Works from "@/components/sections/Works";
import {
  IoAlbumsOutline,
  IoFlashOutline,
  IoMicOutline,
  IoPricetagOutline,
  IoSwapHorizontalOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import {
  FaAward,
  FaLayerGroup,
  FaLocationArrow,
  FaRetweet,
  FaVectorSquare,
} from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";
import Audit from "@/components/forms/Audit";
import NumberedDesign1 from "@/components/Animations/NumberedDesign1";
import CTA from "./CTA";
const Items = [
  {
    title: "Amazon Brand Story Design",
    hl1: "Engaging Narratives",
    hl2: "Visual Appeal",
    l1: "Craft compelling stories that highlight your brand’s journey, values, and unique selling points.",
    l2: "Use high-quality visuals and creative layouts to capture attention and engage potential customers.",
    i1: <IoMicOutline />,
    i2: <IoFlashOutline />,
  },
  {
    title: "Showcase Other Products/Category",
    hl1: "Comprehensive Display",
    hl2: "Cross-Promotion",
    l1: "Design brand stories that seamlessly integrate with your product display pages, showcasing other products and categories.",
    l2: "Encourage cross-selling and upselling by featuring related products in a visually appealing manner.",
    i1: <FaLayerGroup />,
    i2: <MdCompareArrows />,
  },
  {
    title: "Drive Traffic to Brand Pages",
    hl1: "Strategic Design",
    hl2: "Enhanced Navigation",
    l1: "Create brand stories that drive traffic to your Amazon Brand Store and other product pages.",
    l2: "Use intuitive design elements to guide customers through your product range and brand offerings.",
    i1: <FaDraftingCompass />,
    i2: <FaLocationArrow />,
  },
  {
    title: "Beautiful Backgrounds and Themes",
    hl1: "Cohesive Aesthetics",
    hl2: "Custom Visuals",
    l1: "Design brand stories with backgrounds that match your brand’s theme, creating a consistent and attractive look.",
    l2: "Develop custom visuals that enhance your brand’s narrative and appeal to your target audience.",
    i1: <IoAlbumsOutline />,
    i2: <FaVectorSquare />,
  },
  {
    title: "Mobile Optimization",
    hl1: "Cohesive Aesthetics",
    hl2: "Enhanced Engagement",
    l1: "Ensure that all brand stories are optimized for mobile devices, providing a seamless experience for on-the-go shoppers.",
    l2: "Use mobile-friendly designs to keep customers engaged and informed, no matter how they access your product pages.",
    i1: <IoSwapHorizontalOutline />,
    i2: <FaRetweet />,
  },
];
const NumberedData = [
  {
    title: "Expert Design",
    desc: "Leverage our expertise in Amazon Brand Story design to create compelling and visually appealing narratives.",
    icon: <FaAward />,
    color: "#6A1B9A",
  },
  {
    title: "Consistent Branding",
    desc: "Ensure your brand’s story is consistent and reflects your unique identity across all product pages.",
    icon: <IoPricetagOutline />,
    color: "#26A69A",
  },
  {
    title: "Increased Visibility",
    desc: "Drive more traffic to your brand pages.",
    icon: <IoTrendingUpOutline />,
    color: "#FBBB3B",
  },
];
const BrandStory = () => {
  return (
    <div>
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Amazon Brand Story Design Services
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Transform Your Product Pages with{" "}
        <span className="text-background">Engaging Brand Stories.</span>
      </motion.h2>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-xl lg:text-3xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Bring Your Brand&#39;s Story to Life
      </motion.h2>
      <motion.p
        className="mx-auto max-w-4xl text-center p-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        Elevate your Amazon product pages with our Amazon Brand Story Design
        Services. We specialize in creating captivating brand stories that not
        only inform but also engage potential buyers, driving traffic to your
        brand pages and showcasing your entire product range. Our designs are
        tailored to reflect your brand’s theme, ensuring a cohesive and visually
        appealing experience.
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
              <source src="/videos/2.mp4" />
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

export default BrandStory;
