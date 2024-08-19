"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaHourglassHalf,
  FaMedal,
  FaMountain,
  FaPuzzlePiece,
  FaStore,
} from "react-icons/fa6";
const data = [
  {
    title: "Stagnated NTB Orders",
    description:
      "Krishna Herbal and Ayurveda experienced a plateau in acquiring new customers, limiting the brand's potential for growth and market expansion.",
  },
  {
    title: "Scaling Other Product Ranges",
    description:
      "The brand sought to increase market share by scaling its range of products, particularly in the women’s wellness category, but lacked the effective strategies to achieve this.",
  },
  {
    title: "Increasing Market Share",
    description:
      "With a crowded market and stiff competition, the brand struggled to stand out and capture a larger share of the market.",
  },
];
const review = {
  body: "Since partnering with Seller Circle in April 2024, our sales have doubled and our Advertising Cost of Sale (ACOS) has decreased by 8%. Additionally, our Flipkart ad costs were reduced by 50%, with sales exceeding 2X. Seller Circle has expertly managed all aspects of our Amazon business, from Seller Central operations and creatives to DSP and search ads. Their holistic approach and deep understanding of Amazon's ecosystem have driven significant growth for Krishna Ayurveda and Herbal. Seller Circle is a great full-service team to work with, and I highly recommend them to any brand looking to scale their presence on Amazon. - Shrawan Daga ,Founder (Krishna Herbal And Ayurveda)",
  img: "/images/brands/1.png",
};
import CycleCard from "@/components/cards/CycleCard";
import { FaEdit, FaFunnelDollar, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { StickyScroll2 } from "@/components/pages/StickyScroll2";
import { ReviewCard } from "@/components/sections/CustomerMarquee";
import Pricing from "@/components/forms/Pricing";
import { TargetIcon } from "@radix-ui/react-icons";
const Page = () => {
  const [IN, setIN] = useState(null);
  useEffect(() => {
    async function fetchVisitorInfo() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      // setVisitorInfo(data);
      console.log(data);
      setIN(data.country);
    }

    fetchVisitorInfo();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-20 z-[39] p-2">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-lg lg:text-3xl  mx-auto text-center my-7 uppercase text-wrap"
        >
          From Stagnation to Growth: How Krishna Herbal and Ayurveda’s Strategic
          Campaigns{" "}
          <span className="text-[#039BE4]">
            Achieved a 2X Sales Increase and Boosted Brand Awareness in 3
            Months {" "}
          </span>
        </motion.h2>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          introduction
        </motion.h3>
        <h4 className="text-4xl mt-5 font-extrabold">Client Overview:</h4>
        <p className="lg:text-lg text-gray-800">
          Krishna Herbal and Ayurveda is a leading brand in the Ayurvedic herbal
          juices and supplements industry. Known for its natural and effective
          products, the brand has a dedicated customer base looking for health
          and wellness solutions rooted in Ayurveda.
        </p>
        <div className="flex gap-5 lg:flex-row flex-col my-10 px-10">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-center items-center justify-center font-bold">
              <FaPuzzlePiece />
              <span className=" text-3xl font-extrabold">Challenge</span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Despite a strong product line, Krishna Herbal and Ayurveda faced
              stagnation in New-to-Brand (NTB) orders and struggled to scale its
              other product ranges. The brand also aimed to increase its market
              share but faced challenges in achieving significant growth.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-center items-center justify-center font-bold">
              <FaMedal />
              <span className=" text-3xl font-extrabold">Achievement</span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Over a four-month period from April 2024 to July 2024,
              SellerCircle&#39;s strategic interventions, including advanced
              tactics like AMC data analysis, Day Parting strategy, and SOV
              tracking, led to a 2X increase in overall sales, a 3X increase in
              NTB orders, and a noticeable decrease in advertising ACOS,
              positioning the brand for sustained success.
            </p>
          </div>{" "}
        </div>
        <h4 className="text-4xl mt-5 font-extrabold">The Challenge:</h4>
        <p className="lg:text-lg text-gray-800">
          Faced stagnation in acquiring new customers, struggled to scale with
          increasing challenges in increasing market share due to stiff
          competition.
        </p>
        <div className="">
          {" "}
          <div className="flex gap-5 flex-row flex-wrap   justify-center gap-y-10 my-10 ">
            {data.map((item, index) => (
              <CycleCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
        <h4 className="text-4xl mt-5 font-extrabold">The Solution:</h4>

        <div className="grid gap-5   grid-cols-1 my-10 px-10">
          <div className=" col-span-1  flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-left  items-center font-bold">
              <FaEdit />
              <span className=" text-3xl font-extrabold">
                Catalog Corrections and Enhancements
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              SellerCircle implemented crucial corrections to the brand&#9;s
              catalog, optimizing product listings and enhancing A+ content to
              improve organic visibility and customer experience.
            </p>
          </div>
          <div className=" col-span-1 flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-left items-center  font-bold">
              <FaStore />
              <span className=" text-3xl font-extrabold">
                Brand Store Redesign
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              A comprehensive redesign of the brand store was undertaken to
              improve customer flow, making it easier for visitors to navigate
              and discover the full range of products offered by Krishna Herbal
              and Ayurveda.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-left items-center   font-bold">
              <FaFunnelDollar />
              <span className=" text-3xl font-extrabold">
                Full-Funnel Advertising Campaign
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              A full-funnel advertising strategy was executed, focusing on
              increasing brand awareness and targeting competitors within the
              category. This included:
            </p>
            <ul className="text-gray-800">
              <li>
                <span className="text-background mr-1">➤</span>
                <span className="font-bold text-gray-900">
                  Sponsored Product (SP) Campaigns:
                </span>{" "}
                Targeting high-volume keywords and competitor products.
              </li>
              <li>
                <span className="text-background mr-1">➤</span>
                <span className="font-bold text-gray-900">
                  Sponsored Brand (SB) and Sponsored Brand Video (SBV)
                  Campaigns:
                </span>{" "}
                Increasing brand recognition through creative ads.
              </li>
              <li>
                <span className="text-background mr-1">➤</span>
                <span className="font-bold text-gray-900">
                  Sponsored Display (SD) Campaigns:
                </span>{" "}
                Engaging potential customers through dynamic remarketing.
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-left items-center   font-bold">
              <FaChartLine />
              <span className=" text-3xl font-extrabold">
                Amazon Marketing Cloud (AMC) Integration:
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Leveraged AMC to gain deep insights into customer behavior and ad
              performance across various touchpoints, enabling precise targeting
              and optimization of ad spend.
            </p>
          </div>
        </div>
        <div className="flex gap-5 lg:flex-row flex-col my-10 px-10">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-center items-center justify-center font-bold">
              <FaHourglassHalf />
              <span className=" text-3xl font-extrabold">
                Day Parting Strategy:
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Implemented a Day Parting strategy to optimize ad spending by
              focusing on the most effective times of the day when customers
              were most likely to engage and convert, leading to better ad
              efficiency and lower ACOS.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/Dayparting.png"
              width={500}
              height={500}
              alt=""
              className="lg:w-[350px]"
            />
          </div>{" "}
        </div>
        <div className="flex gap-5 lg:flex-row flex-col my-10 px-10">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-center items-center justify-center font-bold">
              <FaChartLine />
              <span className=" text-3xl font-extrabold">
                Share of Voice (SOV) Tracking:
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Monitored SOV to ensure the brand consistently appeared in top
              search positions, outpacing competitors and maximizing visibility
              across all targeted categories
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/Brandshareofvoice.png"
              width={500}
              height={500}
              alt=""
              className="lg:h-[250px] w-auto"
            />
          </div>{" "}
        </div>
        <div className="grid gap-5   grid-cols-1 my-10 px-10">
          <div className=" col-span-1  flex flex-col gap-5">
            <h5 className="flex gap-2 text-background text-xl text-left  items-center font-bold">
              <TargetIcon className="w-7 h-7" />
              <span className=" text-3xl font-extrabold">
                Targeted DSP Campaigns
              </span>
            </h5>
            <p className="lg:text-lg text-gray-800">
              Specific DSP campaigns were crafted to increase awareness among
              in-market , Remarketing ,and Custom audiences, driving
              consideration and intent for the brand’s offerings.
            </p>
          </div>
        </div>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
        >
          The Results
        </motion.h3>
        <StickyScroll2 />
        <div className="my-7 flex flex-col gap-7">
          {" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Conclusion
          </motion.h3>
          <p className="lg:text-lg text-gray-800">
            SellerCircle&#39;s strategic approach, integrating advanced
            analytics through AMC, effective timing with Day Parting, and
            rigorous SOV tracking, successfully transformed Krishna Herbal and
            Ayurveda’s Amazon performance. By addressing stagnation, scaling new
            product lines, and increasing market share, the brand not only
            achieved significant sales growth but also strengthened its position
            in the competitive Ayurvedic herbal market.
          </p>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-7">
          {" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Client Testimonial
          </motion.h3>
          <ReviewCard {...review} />
        </div>
        <div className="flex lg:flex-row flex-col relative my-4">
          <div className="lg:w-1/2 w-full">
            {" "}
            <div className=" p-5 sticky top-20 flex flex-col gap-12 lg:px-10 lg:mt-10">
              <h3 className="text-gray-800 lg:text-4xl font-bold">
                If your brand faces similar challenges, SellerCircle is ready to
                craft a tailored strategy that drives impactful results.
              </h3>
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
            <div className="w-full">
              {" "}
              <Pricing
                businessDetails
                monthlyAdvertisingBudget={[
                  `<${IN ? "₹50,000" : "$1,000"}`,
                  `${IN ? "₹50,000 - ₹1,00,000" : "$1,000-$2,000"}`,
                  `${IN ? " ₹1,00,000-₹5,00,000 " : "$2,000-$10,000"}`,
                  `> ${IN ? "₹5,00,000" : "$10,000"}`,
                ]}
                primaryAdvertisingGoals
                businessName
                additionalInfo
                ASIN={false}
                formType="avertising"
              />
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
