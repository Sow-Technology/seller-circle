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
    icon: "/case-study/32.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">1 </span>
      </>
    ),
    description:
      "Re-engage users who had shown interest but hadn’t completed a purchase, using exclusive Diwali discounts as a nudge",
  },
  {
    icon: "/case-study/33.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">2 </span>
      </>
    ),
    description:
      "Bring back past customers with fresh offers to encourage them to repurchase during the festival.",
  },
  {
    icon: "/case-study/34.png",
    heading: (
      <>
        <span className="text-[#f48825] text-8xl">3</span>
      </>
    ),
    description:
      "Reach high-intent shoppers searching for popular beauty keywords, expanding TrueFrog’s visibility and relevance in the festive season.",
  },
];
const marketingStrategies = [
  {
    icon: "/case-study/35.png",
    heading: <>Amazon-Owned Platforms</>,
    description: (
      <>
        Our ads on Amazon were visually rich with festive banners, product
        highlights, and clear discount labels, urging shoppers with CTAs like
        &quot;Shop Now for Diwali Savings&quot; and &quot;Diwali Deals Ending
        Soon&quot;.
      </>
    ),
  },
  {
    icon: "/case-study/36.png",
    heading: <>Third-Party Sites</>,
    description: (
      <>
        On other sites, our creatives maintained TrueFrog's brand voice and
        focused on creating brand awareness, with messages like &quot;Discover
        TrueFrog&#39;s Diwali Deals on Curly Hair Care&quot;, inviting new users
        to explore the brand.
      </>
    ),
  },
];
const resultsData = [
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold"> Brand Search </span>
        Growth
      </>
    ),
    description: (
      <>
        {" "}
        Branded searches grew by{" "}
        <span className="text-[#039BE4] font-extrabold">20%</span> for TrueFrog
        during the campaign, showing a significant boost in brand awareness.
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold"> Total </span> Spends
      </>
    ),
    description: (
      <>
        {" "}
        a <span className="text-[#039BE4] font-extrabold"> ₹20,704.31</span>,
        strategically allocated to reach high-intent audiences effectively.
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold">Total</span> Product
        Sales
      </>
    ),
    description: (
      <>
        {" "}
        Generated{" "}
        <span className="text-[#039BE4] font-extrabold">₹135,879.23</span> in
        sales during Diwali, reflecting a high conversion rate thanks to the
        targeted offers.
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold">
          Sales ROAS Delivery
        </span>{" "}
      </>
    ),
    description: (
      <>
        {" "}
        Achieved an impressive Return on Ad Spend (ROAS) of
        <span className="text-[#039BE4] font-extrabold">6.56%</span>,
        highlighting the cost-efficiency & impact of the festive campaign
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
