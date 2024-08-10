"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { easeIn, motion } from "framer-motion";
import AM1 from "@/components/sections/services/AM1";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { approchItems, marqueeItem } from "@/lib/data";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CycleCard from "@/components/cards/CycleCard";
import { StickyScrollCards } from "@/components/pages/advertising/StickyScrollCards";
import Why from "@/components/pages/marketplace/Why";
import CTA from "@/components/pages/marketplace/CTA";
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

const cycle = [
  {
    title: "Walmart Advertising",
    description:
      "Walmart’s online marketplace is a powerhouse in the retail industry. Our services include:",
    services: [
      {
        h: "Sponsored Products",
        desc: "Increase product visibility with targeted ads that appear in search results and on product pages.",
      },
      {
        h: "Sponsored Brands",
        desc: "Enhance brand presence with banner ads that showcase your products at the top of search results.",
      },
      {
        h: "Display Ads",
        desc: " Reach a broader audience with visually engaging ads across Walmart's network.",
      },
      {
        h: "Analytics and Reporting",
        desc: "Gain insights into campaign performance and optimize for better results.",
      },
    ],
  },
  {
    title: "Flipkart Advertising",
    description:
      "India’s leading e-commerce platform, Flipkart, offers immense opportunities. Our services include:",
    services: [
      {
        h: "Product Listing Ads",
        desc: "Improve product discoverability with ads that appear in search results and category pages.",
      },
      {
        h: "Brand Stories",
        desc: "Build brand awareness with rich media ads that tell your brand’s story.",
      },
      {
        h: "Performance Analysis",
        desc: "Monitor and analyze campaign performance to maximize ROI.",
      },
    ],
  },
  {
    title: "Instacart Advertising",
    description:
      "For grocery and household items, Instacart is a key marketplace. Our services include:",
    services: [
      {
        h: "Featured Products",
        desc: "Ensure your products are highlighted in search results and category pages.",
      },
      {
        h: "Coupons and Promotions",
        desc: "Drive sales with special offers and discounts.",
      },
      {
        h: "Customer Targeting",
        desc: " Utilize data-driven strategies to reach the right customers at the right time.",
      },
    ],
  },
  {
    title: "Nykaa Advertising",
    description:
      "As a major beauty and wellness platform in India, Nykaa is essential for brands in this niche. Our services include:",
    services: [
      {
        h: "Sponsored Listings",
        desc: "Enhance product visibility with targeted ads in search results and category pages.",
      },
      {
        h: "Influencer Collaborations",
        desc: "Leverage Nykaa’s network of beauty influencers to boost brand credibility.",
      },
      {
        h: "Campaign Management",
        desc: "Optimize ad spend and performance with detailed analytics.",
      },
    ],
  },
  {
    title: "1MG Advertising",
    description:
      "For healthcare and wellness products, 1MG is a crucial platform. Our services include:",
    services: [
      {
        h: "Product Promotions",
        desc: "Highlight your products in search results and category pages.",
      },
      {
        h: "Brand Campaigns",
        desc: "Create comprehensive campaigns that showcase your brand’s strengths.",
      },
      {
        h: "Data Analytics",
        desc: " Track and analyze performance metrics to refine your strategies.",
      },
    ],
  },
];
const page = () => {
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
            Marketplaces Advertising
          </motion.h3>

          <motion.p
            className="mx-auto max-w-4xl text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            At Seller Circle, we understand that succeeding in the world of
            e-commerce means reaching customers on multiple platforms. Our
            Marketplaces Advertising services extend beyond Amazon to include a
            variety of leading marketplaces, ensuring your brand has maximum
            visibility and engagement across the digital retail landscape.
          </motion.p>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Our Marketplaces Advertising Services
          </motion.h2>
          <div className="flex flex-row flex-wrap justify-center  gap-10 relative z-10 my-20 max-lg:px-5  ">
            {cycle.map((item, idx) => (
              <CycleCard item={item} index={idx} key={idx} />
            ))}
          </div>
          <Why />
          <CTA />
          <Services slice="2" />
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
