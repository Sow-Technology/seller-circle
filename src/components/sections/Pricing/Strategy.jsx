"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import {
  FaCogs,
  FaColumns,
  FaDollarSign,
  FaFileAlt,
  FaFunnelDollar,
  FaHandsHelping,
  FaMagic,
  FaMapMarkerAlt,
  FaPallet,
  FaPencilAlt,
  FaProjectDiagram,
  FaRedo,
  FaShareAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaUsersCog,
} from "react-icons/fa";
import {
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaClock,
  FaComment,
  FaCube,
  FaDatabase,
  FaFilm,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaIndustry,
  FaKey,
  FaList,
  FaMicrochip,
  FaMoneyBill1Wave,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRobot,
  FaTable,
  FaThumbsUp,
  FaTrophy,
  FaUserTie,
  FaWarehouse,
  FaWrench,
} from "react-icons/fa6";
import { HiMegaphone } from "react-icons/hi2";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
// import Works from "../../Works";
import FAQ from "@/components/pages/Faq";
// import Awards from "../../Awards";
import Link from "next/link";
// import CTA1 from "./CTA1";
import Works from "../Works";
import Awards from "../Awards";
import CTA1 from "./creative/CTA1";
import Marquee from "@/components/ui/marquee";
import { ReviewCard } from "../CustomerMarquee";
import { reviews } from "@/lib/data";
import Why1 from "./Why1";
import { motion } from "framer-motion";
const Items = [
  {
    hl1: "Comprehensive Market Analysis",
    l1: (
      <>
        Gain deep insights into market trends, competitor strategies, and
        customer behavior to inform your business decisions.
      </>
    ),
    i1: <FaIndustry />,
  },
  {
    hl1: "Customized Strategy Development:",
    l1: (
      <>
        Develop tailored strategies that align with your unique business
        objectives, leveraging data-driven insights and industry best practices.
      </>
    ),
    i1: <FaPuzzlePiece />,
  },
  {
    hl1: "Performance Optimization:",
    l1: (
      <>
        Enhance your existing campaigns and operations with targeted
        recommendations and actionable strategies to boost performance and drive
        growth.
      </>
    ),
    i1: <FaWrench />,
  },
  {
    hl1: "Brand Positioning and Differentiation:",
    l1: (
      <>
        Establish a strong market presence and differentiate your brand through
        strategic positioning and innovative approaches.
      </>
    ),
    i1: <FaMapMarkerAlt />,
  },
  {
    hl1: "Performance Reporting & Insights:",
    l1: (
      <>
        Receive detailed performance reports with insights into impressions,
        clicks, conversions, and more, helping you make data-driven decisions.
      </>
    ),
    i1: <FaClipboardList />,
  },
  {
    hl1: "Operational Efficiency:",
    l1: (
      <>
        Streamline your operations for maximum efficiency, including inventory
        management, logistics, and customer service strategies.
      </>
    ),
    i1: <FaClock />,
  },
  {
    hl1: "Actionable Insights and Reporting:",
    l1: (
      <>
        Receive detailed reports and actionable insights that help you measure
        success, track progress, and make informed decisions.
      </>
    ),
    i1: <FaChartLine />,
  },
  {
    hl1: "Ongoing Support and Guidance:",
    l1: (
      <>
        Benefit from continuous support and expert advice as you implement and
        refine your strategies, ensuring long-term success.
      </>
    ),
    i1: <FaHandsHelping />,
  },
];

const additionalFaq = [
  {
    question: "What is Amazon DSP and how does it benefit my business?",
    answer:
      "Amazon DSP allows you to programmatically buy display, video, and audio ads across Amazon's network of websites, as well as third-party exchanges. It enables precise audience targeting and cross-channel reach, helping you effectively engage potential customers.",
  },
  {
    question: "What makes your DSP services different from others?",
    answer:
      "Our DSP services are tailored to your specific needs, combining expert strategy with advanced technology. We use AI and machine learning for optimization, and our dedicated account managers ensure your campaigns align with your business goals.",
  },
  {
    question: "How do you ensure the safety of my brand while advertising?",
    answer:
      "We implement robust brand safety controls, ensuring your ads appear in appropriate and safe environments. We also provide transparent reporting so you can see exactly where your ads are displayed.",
  },
  {
    question:
      "Will you perform an account audit before starting the DSP campaigns?",
    answer:
      "Yes, we conduct a thorough audit of your current advertising efforts and account setup. This allows us to identify opportunities for improvement and craft a DSP strategy that’s aligned with your goals.",
  },
];

const Strategy = ({ IN }) => {
  const Items2 = [
    {
      // hl1: "Brand or Ad Video Package",
      l1: (
        <>
          <ul className="flex flex-col gap-4 my-3">
            {" "}
            <li className="flex gap-3 items-center">
              <div>
                {" "}
                <FaDollarSign className="block aspect-square w-5 h-5" />
              </div>
              <b>starting From:</b>
              <span className="font-bold text-2xl text-background">
                {IN ? "₹25,000 " : "$500 "}{" "}
              </span>
              per month +{" "}
              <span className="text-background font-bold text-2xl">2%</span>of
              sales
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Inclusions:
            </li>
            <ul className="ml-10">
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                Comprehensive Amazon account management{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                Amazon advertising management{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                tailored advertising strategies{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                content creation
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                inventory management
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                SEO and listing optimization
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                regular performance reporting
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                dedicated account management
              </li>
            </ul>
          </ul>
        </>
      ),
      // i1: <FaGem />,
    },
  ];
  const [whatActive, setWhatActive] = useState(true);
  const [moduleActive, setModuleActive] = useState(false);
  return (
    <div>
      {" "}
      <div className="">
        {" "}
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
        >
          Unlock Your Business Potential with{" "}
          <span className="text-[#039BE4]">Expert Strategy and Consulting</span>
        </motion.h2>{" "}
        <motion.p
          className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
        >
          Our Strategy and Consulting services are designed to help you navigate
          the complexities of the Amazon marketplace and achieve your business
          goals with confidence. Whether you&#39;re launching a new product or
          optimizing existing strategies, our experts are here to guide you
          every step of the way.
        </motion.p>
      </div>
      <div className="flex lg:flex-row flex-col relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
          <h2
            className="lg:text-3xl  font-extrabold text-xl flex gap-2 items-center cursor-pointer text-background"
            onClick={() => setWhatActive(!whatActive)}
          >
            <FaList /> What&#39;s Included
            {whatActive ? <ChevronUp /> : <ChevronDown />}
          </h2>
          {whatActive &&
            Items.map((item, idx) => (
              <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
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
                </div>
              </div>
            ))}
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-6  w-full justify-center ">
            {" "}
            <div className="">
              <div className="text-xl font-bold mt-2 text-center">
                Quote Request Form
              </div>
            </div>
            <div className="w-full">
              {" "}
              <Pricing
                businessDetails
                businessName
                consulting
                challenges
                intrest
                additionalInfo
                quoteReq
                ASIN={false}
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <section className="relative z-10 overflow-hidden bg-indigo-600 py-16 px-8 mt-40">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3">
              <div className="text-center lg:text-left ">
                <div className="mb-10 lg:mb-0 ">
                  <h1 className="mt-0 mb-3 lg:text-4xl text-xl font-bold leading-tight sm:text-4xl sm:leading-tight md:leading-tight text-white ">
                    Ready to Elevate Your Strategy?
                  </h1>
                  <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                    Fill out the form above, and one of our strategy and
                    consulting experts will reach out to discuss your specific
                    needs and provide a tailored plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="text-center lg:text-right">
                <a
                  className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                  href="#quote"
                >
                  Get a Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width="388"
            height="250"
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width="324"
            height="250"
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-4 left-4 -z-10">
          <svg
            width="43"
            height="56"
            viewBox="0 0 43 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="40.9984"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 40.9984 1.49626)"
                fill="white"
              ></circle>
              <circle
                cx="27.8304"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 27.8304 1.49626)"
                fill="white"
              ></circle>
              <circle
                cx="14.6644"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 14.6644 1.49626)"
                fill="white"
              ></circle>
              <circle
                cx="1.49642"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 1.49642 1.49626)"
                fill="white"
              ></circle>
              <circle
                cx="40.9984"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 40.9984 14.6642)"
                fill="white"
              ></circle>
              <circle
                cx="27.8304"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 27.8304 14.6642)"
                fill="white"
              ></circle>
              <circle
                cx="14.6644"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 14.6644 14.6642)"
                fill="white"
              ></circle>
              <circle
                cx="1.49642"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 1.49642 14.6642)"
                fill="white"
              ></circle>
              <circle
                cx="40.9984"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 40.9984 27.8302)"
                fill="white"
              ></circle>
              <circle
                cx="27.8304"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 27.8304 27.8302)"
                fill="white"
              ></circle>
              <circle
                cx="14.6644"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 14.6644 27.8302)"
                fill="white"
              ></circle>
              <circle
                cx="1.49642"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 1.49642 27.8302)"
                fill="white"
              ></circle>
              <circle
                cx="40.9984"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 40.9984 40.9982)"
                fill="white"
              ></circle>
              <circle
                cx="27.8304"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 27.8304 40.9963)"
                fill="white"
              ></circle>
              <circle
                cx="14.6644"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 14.6644 40.9982)"
                fill="white"
              ></circle>
              <circle
                cx="1.49642"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 1.49642 40.9963)"
                fill="white"
              ></circle>
              <circle
                cx="40.9984"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 40.9984 54.1642)"
                fill="white"
              ></circle>
              <circle
                cx="27.8304"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 27.8304 54.1642)"
                fill="white"
              ></circle>
              <circle
                cx="14.6644"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 14.6644 54.1642)"
                fill="white"
              ></circle>
              <circle
                cx="1.49642"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 1.49642 54.1642)"
                fill="white"
              ></circle>
            </g>
          </svg>
        </span>
      </section>
      {/* <Why1 /> */}
      <div className="marquee-wrapper [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] my-20">
        <Marquee pauseOnHover reverse className="[--duration:20s]">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="">
        {/* <Works /> */}
        {/* <div className="text-3xl text-center text-background font-bold">
          Amazon Advertising FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="//amazon-advertising" /> */}

        <Awards />
      </div>
    </div>
  );
};

export default Strategy;
