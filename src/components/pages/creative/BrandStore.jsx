import React from "react";
import { motion } from "framer-motion";
import CycleCard from "@/components/cards/CycleCard";
import {
  FaBoxes,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaSitemap,
  FaSlidersH,
} from "react-icons/fa";
import { IoBasketOutline, IoNewspaperOutline } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import Works from "@/components/sections/Works";
import Audit from "@/components/forms/Audit";
import NumberedDesign1 from "@/components/Animations/NumberedDesign1";
import { MdAssignment } from "react-icons/md";
const data = [
  {
    title: "Tailored Store Design",
    description:
      "Our design process starts with understanding your brand's unique identity and goals. We create a customized store layout that highlights your products and tells your brand's story effectively.",
  },
  {
    title: "High-Quality Creatives",
    description:
      "We use high-quality visuals and engaging banners to create an aesthetically pleasing and cohesive store experience. Our creatives are designed to draw attention and encourage customers to explore further.",
  },
  {
    title: "Easy Navigation",
    description:
      "We prioritize user experience by designing stores with intuitive navigation. Our subpages and banners are organized in a way that makes it easy for customers to find what they are looking for and learn more about your brand.",
  },
  {
    title: "Mobile-Friendly Design",
    description:
      "With a significant portion of Amazon shoppers using mobile devices, we ensure your store is fully optimized for mobile viewing. Our designs look great and function seamlessly on any device",
  },
  {
    title: "SEO Optimization",
    description:
      "Our team integrates SEO best practices into your store design to improve visibility and attract more organic traffic. We ensure your store's meta tags, descriptions, and content are optimized for search engines.",
  },
];
const data2 = [
  {
    title: "Increased Sales Conversion",
    description:
      "Our stores are designed with conversion in mind. By creating a seamless and engaging shopping experience, we help turn visitors into customers.",
  },
  {
    title: "Enhanced Dwell Time",
    description:
      "Engaging visuals and intuitive navigation encourage customers to spend more time exploring your store, increasing the likelihood of purchases.",
  },
  {
    title: "Strong Brand Representation",
    description:
      "We ensure your brand is represented consistently and attractively, building trust and recognition among customers.",
  },
  {
    title: "Data-Driven Optimization",
    description:
      "Utilize insights from Store performance data to continuously improve and optimize your store for better engagement and sales.",
  },
];
const data3 = [
  {
    title: "Experience",
    description:
      "With years of experience in Amazon brand management, we know what works.",
  },
  {
    title: "Comprehensive Service",
    description:
      "From design to SEO, we handle every aspect of your Amazon Store.",
  },
  {
    title: "Results-Driven",
    description:
      "Our designs are focused on achieving your business goals, whether it's increasing sales, enhancing brand visibility, or improving customer engagement.",
  },
];
const Items = [
  {
    title: "Engaging Visuals",
    hl1: "Banners and Images",
    hl2: "Product Tiles",
    l1: "We use high-quality, engaging visuals that capture attention and convey your brand's message.",
    l2: "Display your products with auto-populated information, including price and Prime status, to make shopping easier for customers.",
    i1: <FaSlidersH />,
    i2: <FaBoxes />,
  },
  {
    title: "Informative and Readable Content",
    hl1: "Text Tiles",
    hl2: "Video Integration",
    l1: "Provide clear and informative descriptions about your brand and products. Our designs ensure text is easy to read and well-integrated with visuals.",
    l2: "Add videos to showcase your products and tell your brand's story in a dynamic way.",
    i1: <IoNewspaperOutline />,
    i2: <FaMicrochip />,
  },
  {
    title: "Structured Layout",
    hl1: "Subpages",
    hl2: "Product Collections",
    l1: "Organize your store into subpages that highlight different product categories, deals, or brand stories. This helps customers easily navigate and find relevant information.",
    l2: "Feature products in a grid format with options for Add to Cart and Quick Shop, enhancing the shopping experience.",
    i1: <FaSitemap />,
    i2: <IoBasketOutline />,
  },
];
const NumberedData = [
  {
    title: "Consultation",
    desc: "We begin with a thorough consultation to understand your brand, products, and goals.",
    icon: <FaChalkboardTeacher />,
    color: "#6A1B9A",
  },
  {
    title: "Design Proposal",
    desc: "Our team creates a design proposal tailored to your needs, including layout, visuals, and SEO strategy.",
    icon: <MdAssignment />,
    color: "#26A69A",
  },
  {
    title: "Development",
    desc: "Once approved, we develop your store using Amazon’s Store Builder tools, ensuring a professional and cohesive design.",
    icon: <FaLaptopCode />,
    color: "#FBBB3B",
  },
  {
    title: "Review and Launch",
    desc: "We review the store with you, make any necessary adjustments, and launch your brand new Amazon Store.",
    icon: <FaCalendarCheck />,
    color: "#42A5F5",
  },
];
const BrandStore = () => {
  return (
    <div>
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Optimize, Engage, Convert – Your Amazon Store Redefined
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
      >
        Elevate Your Amazon Presence with{" "}
        <span className="text-background">Expert Store Design</span>
      </motion.h2>
      <motion.p
        className="mx-auto max-w-4xl text-center p-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        At Seller Circle, we specialize in creating Amazon Brand Stores that are
        more than just a collection of products. Our stores are designed to
        convert more sales, increase dwell time, and engage buyers through
        easy-to-navigate, visually appealing designs. Our expertise ensures your
        store not only looks great but also performs exceptionally well in terms
        of SEO and meta tags.
      </motion.p>
      <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
        {data.map((item, index) => (
          <CycleCard item={item} index={index} key={index} />
        ))}
      </div>
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
          <div className="sticky top-24 h-80 w-80 border-2 border-background bg-background/30 rounded-md flex items-center justify-center text-2xl font-extrabold">
            {" "}
            IMAGE
          </div>
        </div>
      </div>
      <Works />
      <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
        {data2.map((item, index) => (
          <CycleCard item={item} index={index} key={index} />
        ))}
      </div>
      <div className="my-5 flex flex-row items-center justify-center flex-wrap gap-7">
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          Optimize, Engage, Convert – Your Amazon Store Redefined
        </motion.h3>
        <div className="">
          <Audit />
        </div>
        <div className="lg:w-1/2 w-[90%]">
          <NumberedDesign1 data={NumberedData} />
        </div>
        <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
          {data3.map((item, index) => (
            <CycleCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStore;
