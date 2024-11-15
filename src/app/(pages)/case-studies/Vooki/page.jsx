"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { BrandOverview } from "./_components/BrandOverview";
import { Objectives } from "./_components/Objectives";
import { Strategy } from "./_components/Strategy";
import { Execution } from "./_components/Execution";
import { Results } from "./_components/Results";
import { Conclusion } from "./_components/Conclusion";
const data = [
  {
    icon: "/case-study/38.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">1 </span>
      </>
    ),
    description:
      "Position Vooki as a top-selling product in its category by doubling business-as-usual (BAU) sales.",
  },
  {
    icon: "/case-study/39.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">2 </span>
      </>
    ),
    description:
      "Increase brand visibility and attract New-to-Brand (NTB) customers.",
  },
  {
    icon: "/case-study/40.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">3</span>
      </>
    ),
    description:
      "Leverage festive traffic to drive a significant increase in daily sales.",
  },
];
const marketingStrategies = [
  [
    {
      icon: "/case-study/41.png",
      heading: <>Touchpoint-Based Targeting</>,
      description: (
        <>
          DSP ads targeted custom audiences based on initial touchpoints
          identified in AMC, delivering tailored offers to high-intent shoppers.
        </>
      ),
    },
    {
      icon: "/case-study/42.png",
      heading: <>Abandoned Cart Re-Engagement (Last 90 Days)</>,
      description: (
        <>
          Engaged users who had abandoned Vooki products with creatives showing
          festive discounts, prompting them to complete their purchase.
        </>
      ),
    },
    {
      icon: "/case-study/43.png",
      heading: <>SP Ads Interactor Retargeting</>,
      description: (
        <>
          Retargeted audiences who interacted with SP ads but hadn’t yet
          purchased, reinforcing Vooki’s festive offers to maximize conversion
          potential.
        </>
      ),
    },
  ],
  [
    {
      icon: "/case-study/44.png",
      heading: <>Pre-Sales Build-Up and Event Days</>,
      description: (
        <>
          Started DSP ads in advance to create awareness and built up momentum
          leading into the event. During the event, we deployed dynamic
          targeting of competitors, lifestyle audiences, and in-market shoppers.
        </>
      ),
    },
    {
      icon: "/case-study/45.png",
      heading: <>Deal Price Promotion</>,
      description: (
        <>
          On the event days, Vooki&#39;s products were featured with a deal
          price, further supported by DSP ads that drove high-intent traffic to
          capitalize on the festive offer.
        </>
      ),
    },
  ],
  [
    {
      icon: "/case-study/46.png",
      heading: <>Top-of-Search Dominance</>,
      description: (
        <>
          Our SP and SB ads held prime placements during the lead-up and sales
          period, maximizing brand exposure and capturing valuable click share.
        </>
      ),
    },
    {
      icon: "/case-study/47.png",
      heading: <>Enhanced Visibility through SBV Ads</>,
      description: (
        <>
          Using SBV ads, we showcased product efficiency directly to customers
          interested in keywords like &quot;eco-friendly cleaner&quot; and
          &quot;kitchen cleaner&quot;, creating a stronger brand connection and
          interaction.
        </>
      ),
    },
  ],
];
const resultsData = [
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold"> Brand Search </span>
        Volume Growth
      </>
    ),
    description: (
      <>
        {" "}
        Vooki&#39;s branded search volume grew by{" "}
        <span className="text-[#039BE4] font-extrabold">18.25%</span>,
        reflecting heightened brand visibility and interest among festive
        shoppers.
      </>
    ),
  },
  {
    heading: (
      <>
        <span className="text-[#f48825] font-extrabold">
          {" "}
          New-to-Brand (NTB){" "}
        </span>{" "}
        Orders
      </>
    ),
    description: (
      <>
        {" "}
        Achieved a{" "}
        <span className="text-[#039BE4] font-extrabold"> 54.18% </span> increase
        in NTB orders, successfully attracting new customers and expanding
        Vooki&#39;s customer base.
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold">Sales</span> Growth
      </>
    ),
    description: (
      <>
        {" "}
        Total sales rose by{" "}
        <span className="text-[#039BE4] font-extrabold">50.37%</span>, driven by
        precise targeting & strategic promotion during the high-traffic season.
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold">Overall</span>{" "}
        Performance
      </>
    ),
    description: (
      <>
        {" "}
        Vooki saw a robust increase in daily sales and order volume, positioning
        the brand as a{" "}
        <span className="text-[#039BE4] font-extrabold">
          Category Leader
        </span>{" "}
        during the festive period.
      </>
    ),
  },
];
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl nsans mx-auto relative flex flex-col gap-10">
        <HeroSection />
        <BrandOverview />
        <Objectives data={data} />
        <Strategy />
        <Execution marketingStrategies={marketingStrategies} />
        <Results resultsData={resultsData} />
        <Conclusion />
      </div>
      <Footer />
    </div>
  );
}
