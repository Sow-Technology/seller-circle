"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { marqueeItem } from "@/lib/data";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CTA from "@/components/pages/global/CTA";
import Awards from "@/components/sections/Awards";
import { HiDocumentCheck } from "react-icons/hi2";
import { TbMapPin2 } from "react-icons/tb";

import Why from "@/components/pages/global/Why";
import { AiOutlineTranslation } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/forms/Pricing";

const Items = [
  {
    title: "Compliance Documents",
    description:
      "Ensure that all necessary compliance documents and certifications are in place for each market. Our team will help you navigate the regulatory landscape, ensuring that your products meet all local legal and safety requirements.",
    icon: <HiDocumentCheck />,
  },
  {
    title: "Advertising Region-Specific Strategy",
    description:
      "Develop and implement advertising campaigns tailored to the preferences and behaviors of consumers in each region. Utilize local platforms and media channels to effectively reach your target audience.",
    icon: <TbMapPin2 />,
  },
  {
    title: "Language Locale",
    description:
      "Adapt your product listings and marketing materials to the local language and cultural preferences of each target market, ensuring clear and engaging communication with your new audience.",
    icon: <AiOutlineTranslation />,
  },
  {
    title: "Local SEO",
    description:
      "Optimize your online presence with region-specific SEO strategies to increase visibility and attract local customers. Tailor your keywords and content to meet the search habits and preferences of different markets.",
    icon: <FaStoreAlt />,
  },
];
const GlobalLaunchStrategies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 z-[39] lg:px-5">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Global Launch Strategy
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Expand Your Reach with Expert Global Market Launch Support{" "}
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
                Expand Beyond Borders with{" "}
                <span className="text-[#039BE4]">Confidence </span>
              </motion.h2>{" "}
              <motion.p
                className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
              >
                Take your brand to the global stage with our comprehensive
                support for launching products in international marketplaces.
                Our expertise ensures that you understand the nuances and local
                compliance requirements, enabling a successful and seamless
                entry into new markets.
              </motion.p>
            </div>
          </div>
          <div className="my-8">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            >
              Comprehensive Global Launch Support{" "}
            </motion.h3>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
            >
              Local Expertise,{" "}
              <span className="text-[#039BE4]">Global Reach. </span>
            </motion.h2>{" "}
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
            >
              Expand Your Reach with Expert Global Market Launch Support{" "}
            </motion.h2>
            <motion.p
              className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
            >
              We offer personalized support to help you navigate the
              complexities of launching your product in global marketplaces.
              From understanding local compliance to crafting region-specific
              advertising strategies, our team ensures that your global
              expansion is smooth and successful.
            </motion.p>
          </div>{" "}
          <div className="flex lg:flex-row flex-col relative my-4">
            <div className="lg:w-1/2 w-full">
              {" "}
              <div className=" sticky top-24 p-5 flex flex-col gap-12 lg:px-10">
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
            </div>
            <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5">
              {" "}
              <div className=" ">
                {" "}
                {/* <motion.h3
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 100 }}
                  viewport={{ once: true }}
                  className="font-[900] text-2xl lg:text-4xl text-[#272727] text-center max-w-4xl uppercase mx-auto"
                >
                  Navigating Success Together.
                </motion.h3> */}
                <Pricing
                  businessDetails
                  businessName
                  consulting
                  challenges
                  productDetails
                  targetMarkets
                  interest2
                  additionalInfo
                  quoteReq
                  formType="globalLaunch"
                  ASIN={false}
                />
              </div>
            </div>
          </div>
          <Why />
          <Awards />
          <CTA />
          <Services slice="9" />
          <Link
            href="/pricing?s=Global Launch"
            className="mx-auto w-full flex items-center justify-center"
          >
            {" "}
            <Button variant="cta" className="px-28 py-8  text-2xl">
              Request a Quote
            </Button>
          </Link>
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

export default GlobalLaunchStrategies;
