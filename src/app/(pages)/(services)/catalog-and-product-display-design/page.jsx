"use client";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { easeIn, motion } from "framer-motion";
import AM1 from "@/components/sections/services/AM1";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { approchItems } from "@/lib/data";
import CTA from "@/components/pages/growth/CTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CycleCard from "@/components/cards/CycleCard";
import { StickyScrollCards } from "@/components/pages/advertising/StickyScrollCards";
import TabsSection from "@/components/pages/creative/TabsSection";
import FAQ from "@/components/pages/creative/FAQ";
import Awards from "@/components/sections/Awards";
import AContent from "@/components/pages/creative/AContent";
import BrandStory from "@/components/pages/creative/BrandStory";
import Catalog from "@/components/pages/creative/Catalog";
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
const marqueeItem = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
  "/images/brands/11.png",
  "/images/brands/12.png",
  "/images/brands/13.png",
  "/images/brands/14.png",
  "/images/brands/15.png",
];
const cycle = [
  {
    title: "Looking for Inspiration",
    description: "The first point of contact for product/brand inspiration.",
  },
  {
    title: "Product/Brand Awareness",
    description: "Increasing awareness of your product or brand.",
  },
  {
    title: "Improving Purchase Intent",
    description: "Enhancing the intent of customers to make a purchase.",
  },
  {
    title: "Finding Information",
    description:
      "Addressing customer preferences and providing relevant information.",
  },
  {
    title: "Driving Purchase",
    description: "Encouraging customers to make a purchase.",
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
            Creative storytelling
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Seamless Storytelling: Design That Converts Across{" "}
            <span className="text-background">
              Every Stage of the Buyer Journey.
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-4xl text-center p-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            At Seller Circle, we transform your Amazon presence through powerful
            creative storytelling. Our comprehensive services are designed to
            captivate and engage your audience, enhance your brand’s narrative,
            and drive conversions. From compelling A+ content and immersive
            brand stories to engaging product display designs and dynamic brand
            videos, we offer a holistic approach to elevate your product
            listings and marketing campaigns. Explore our specialized services
            below to see how we can help you craft a standout brand experience
            on Amazon.
          </motion.p>
          <div className="w-full h-auto my-12 p-5">
            <Image
              src="/images/services/whyaplus.jpg"
              width={1280}
              height={600}
              alt=""
            />
          </div>
          <TabsSection active={4} />
          <Suspense>
            {" "}
            <Catalog />
          </Suspense>
          <FAQ />

          <Services slice="2" />
          <Awards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
