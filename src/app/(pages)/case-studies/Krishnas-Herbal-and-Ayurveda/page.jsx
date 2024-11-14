"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { HeroSection } from "./_components/HeroSection";
import { BrandOverview } from "./_components/BrandOverview";
import { Objectives } from "./_components/Objectives";
import { Challenges } from "./_components/Challenges";
import { Strategy } from "./_components/Strategy";
import { Execution } from "./_components/Execution";
import { Results } from "./_components/Results";
import { Conclusion } from "./_components/Conclusion";
const data = [
  {
    icon: "/case-study/6.png",
    heading: (
      <>
        <span className="text-[#f48825]">Expand </span>Product Categories
      </>
    ),
    description:
      "Scale new product listings and improve visibility for newly launched categories while strengthening existing ones.",
  },
  {
    icon: "/case-study/7.png",
    heading: (
      <>
        <span className="text-[#f48825]">Grow Market Share </span>for Hero
        Products
      </>
    ),
    description:
      "Enhance the market presence of best-selling items and identify new hero products for future scaling.",
  },
  {
    icon: "/case-study/8.png",
    heading: (
      <>
        {" "}
        <span className="text-[#f48825]"> Optimize </span>Advertising Spend
        Products
      </>
    ),
    description:
      "Ensure ad spend is distributed across key periods, focusing on peak buying hours to maximize performance.",
  },
  {
    icon: "/case-study/9.png",
    heading: (
      <>
        <span className="text-[#f48825]">Gain</span> Customer Journey Insights
      </>
    ),
    description:
      "Use Amazon Marketing Cloud (AMC) to understand audience behavior and refine campaigns based on data-driven insights.",
  },
];
const challenges = [
  {
    icon: "/case-study/10.png",
    title: "Scaling New Product Listings in a Crowded Category",
    description:
      "Krishna Ayurveda aimed to introduce new health and wellness products in a crowded and competitive category on Amazon. The challenge was breaking through the noise and establishing visibility for new listings, especially as more brands entered the health and wellness sector, particularly in diabetic care.",
  },
  {
    icon: "/case-study/11.png",

    title: "Market Share Growth for Hero Products in a Competitive Category",
    description:
      "Despite having successful hero products in diabetic care, Krishna Ayurveda found it challenging to maintain and grow their market share due to aggressive competition targeting high-traffic keywords and product placements. Identifying new hero products to replicate the success of existing top-sellers was essential.",
  },
  {
    icon: "/case-study/12.png",

    title: "Optimizing Ad Spend in a Saturated Market",
    description:
      "With numerous brands bidding for the same keywords and customer attention, Krishna Ayurveda faced high costs for visibility. Optimizing advertising spend efficiently was crucial to avoid ad wastage and ensure a sufficient return on investment (ROI).",
  },
  {
    icon: "/case-study/13.png",

    title:
      "Understanding the Customer Journey in a Complex, Competitive Environment",
    description:
      "Understanding the customer journey became increasingly important for Krishna Ayurveda to gain deeper insights into how potential buyers interacted with their products and brand across different touchpoints on Amazon. Refining campaigns to target each segment of the journey was a priority to avoid inefficient and ineffective retargeting or conversion efforts.",
  },
];
const retailData = [
  <>
    Revamped Krishna Ayurveda&#39;s Amazon brand store, ensuring a seamless
    customer journey from product pages to the store,{" "}
    <span className="text-[#f48825] font-extrabold">
      promoting cross-selling
    </span>
    .
  </>,
  <>
    Enhanced A+ content and product detail pages (PDPs) with brand stories to{" "}
    <span className="text-[#f48825] font-extrabold">boost engagement</span>,
    increase basket size, and drive more{" "}
    <span className="text-[#f48825] font-extrabold"> traffic </span> to the
    store.
  </>,
  <>
    Our strategy focused on driving traffic to the new store by leveraging{" "}
    <span className="text-[#f48825] font-extrabold">
      {" "}
      Sponsored Brand Video{" "}
    </span>{" "}
    and{" "}
    <span className="text-[#f48825] font-extrabold">
      Sponsored Brand Product Ads
    </span>{" "}
    to boost visibility and engagement.
  </>,
];
const dayparting = [
  <>
    {" "}
    Leveraged data from{" "}
    <span className="text-[#f48825] font-extrabold">
      Amazon Marketing Stream
    </span>{" "}
    to implement dayparting, focusing ad spend during peak conversion periods.{" "}
  </>,
  <>
    {" "}
    Reduced unnecessary ad spending during low-traffic hours, resulting in
    efficient spend allocation while maintaining product competitiveness.{" "}
  </>,
  <>
    {" "}
    Tracking top-of-search placements to boost CTR for the brand, analyzing
    campaign-wise placement data from{" "}
    <span className="text-[#f48825] font-extrabold">Marketing Stream</span> for
    optimized performance.{" "}
  </>,
];
const marketingStrategies = [
  {
    icon: "/case-study/20.png",
    title: "Sponsored Ads Strategy",
    description:
      "Ran targeted campaigns using Sponsored Products and Sponsored Display ads to improve visibility for new products and scale new listings. Enhanced Sponsored Brands video ads for hero products, using product targeting to capture traffic from competitors and grow market share.",
  },
  {
    icon: "/case-study/21.png",

    title: "Dayparting & Data-Driven Budgeting",
    description:
      "Implemented dayparting strategies through Amazon Marketing Stream to serve ads during peak buying hours and optimize ad spend.",
  },
  {
    icon: "/case-study/22.png",

    title: "Amazon DSP & Retargeting",
    description:
      "Ran retargeting campaigns via Amazon DSP to re-engage customers who visited Krishna Ayurveda's product pages but didn't convert. Personalized ads and special offers helped in converting these potential customers.",
  },
  {
    icon: "/case-study/23.png",

    title: "Path to Purchase Campaigns",
    description:
      "Based on AMC insights, specific campaigns were created to target different touchpoints in the customer journey, especially for cart abandoners and those in the consideration phase.",
  },
  {
    icon: "/case-study/24.png",

    title: "Created SBV and SB Campaigns",
    description:
      "Launched Sponsored Brand Video (SBV) and Sponsored Brand (SB) campaigns directed towards the new brand store to cross-sell products and increase consideration, driving traffic & engagement through the brand store.",
  },
  {
    icon: "/case-study/25.png",

    title: "Holistic Campaign Approach",
    description:
      "Implemented a comprehensive, holistic campaign strategy that targeted both the linear and non-linear buyer journeys, ensuring continuous brand visibility and engagement across multiple touchpoints in the purchasing process.",
  },
  {
    icon: "/case-study/26.png",

    title: "Subscribe & Save Activation",
    description:
      "Launched Subscribe & Save for key diabetic care products, increasing customer loyalty and driving repeat purchases.",
  },
  {
    icon: "/case-study/27.png",

    title: "Targeted Coupons for Cart Abandoners",
    description:
      "Introduced targeted coupons for customers who abandoned their carts, incentivizing them to complete their purchase and driving conversions.",
  },
  {
    icon: "/case-study/28.png",

    title: "Market Basket Analysis for Combos & Packs",
    description:
      "Analyzed frequently bought together products using market basket analysis, creating product bundles and multi-pack offerings to increase basket size and encourage customers to purchase complementary products.",
  },
];
const resultsData = [
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold"> 90% </span>
        Sales Increase in 6 months{" "}
      </>
    ),
    description: (
      <>
        {" "}
        Krishna Ayurveda doubled their sales from{" "}
        <span className="text-[#039BE4] font-extrabold">₹1.41 crore</span> in
        March to{" "}
        <span className="text-[#039BE4] font-extrabold">₹2.37 crore</span> by
        September.{" "}
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        <span className="text-[#f48825] font-extrabold"> 20% </span> Reduction
        in ACOS
      </>
    ),
    description: (
      <>
        {" "}
        Optimized advertising strategies, especially through dayparting, led to
        a <span className="text-[#039BE4] font-extrabold"> 20% </span>reduction
        in ACoS, ensuring more profitable growth.{" "}
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        Increase in{" "}
        <span className="text-[#f48825] font-extrabold">NTB Orders</span>{" "}
      </>
    ),
    description: (
      <>
        {" "}
        New-to-brand (NTB ) orders surged from 793 in March to{" "}
        <span className="text-[#039BE4] font-extrabold">7,000</span> by
        September—a{" "}
        <span className="text-[#039BE4] font-extrabold"> 900% </span> increase,
        highlighting significant brand growth.{" "}
      </>
    ),
  },
  {
    heading: (
      <>
        {" "}
        Improved{" "}
        <span className="text-[#f48825] font-extrabold">Basket Size</span>{" "}
      </>
    ),
    description: (
      <>
        {" "}
        Through effective store redesign, cross-selling strategies, and enhanced{" "}
        PDPs, the average basket size increased by{" "}
        <span className="text-[#039BE4] font-extrabold">25%</span>.{" "}
      </>
    ),
  },
];
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl nsans mx-auto relative flex flex-col gap-10">
        {/* <section>
          <div className="flex items-center justify-center gap-10 pt-10 ">
            <Image
              src="/logo-dark.svg"
              alt=""
              width="700"
              height={700}
              className="w-[30%] h-auto"
            />
            <span className=" italic font-mono font-bold text-gray-500 text-2xl">
              x
            </span>
            <Image
              src="/images/brands/1.png"
              alt=""
              width="700"
              height={700}
              className="w-[30%] h-auto"
            />
          </div>
          <div className="relative min-h-[500px] pb-40 pt-20">
            <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
            <div className="flex flex-col items-center justify-center z-10 relative">
              <h2 className="text-[#f48825] lg:text-7xl text-5xl font-extrabold">
                90%
              </h2>
              <p className="lg:text-3xl text-xl font-bold">
                Increase in Sales over a 6 month period
              </p>
            </div>
            <div className="flex flex-col items-center justify-center z-10 relative">
              <h2 className="text-[#f48825] lg:text-8xl text-6xl font-extrabold">
                20%
              </h2>
              <p className="lg:text-4xl text-2xl font-bold">
                Reduction in ACOS
              </p>
            </div>
            <div className="flex flex-col items-center justify-center z-10 relative">
              <h2 className="text-[#f48825] lg:text-9xl text-7xl font-extrabold">
                900%
              </h2>
              <p className="lg:text-4xl text-2xl font-bold">
                Increase in NTB Orders
              </p>
            </div>
            <div className="absolute left-0 bottom-0">
              <Image
                src="/case-study/2.jpg"
                width={1000}
                height={1000}
                alt=""
                className="lg:h-[300px] h-[200px] w-auto"
              />
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/case-study/3.jpg"
                width={1000}
                height={1000}
                alt=""
                className="lg:h-[400px] h-[300px] w-auto"
              />
            </div>
          </div>
        </section> */}
        <HeroSection />
        {/* <section>
          <div className="flex w-full justify-between">
            <div>
              {" "}
              <Image
                src="/images/brands/1.png"
                alt=""
                width="700"
                height={700}
                className=" max-h-[100px] w-auto aspect-auto"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-end">
              <h2 className="text-right font-extrabold text-3xl">
                Brand Overview
              </h2>
              <div className="w-[90%] h-1 bg-[#f48825]" />
            </div>
          </div>
          <div>
            <p className="text-2xl lg:text-4xl font-bold my-20 max-w-5xl mx-auto text-center">
              Krishna Ayurveda, a health-focused brand specializing in diabetic
              and wellness products, sought to scale new listings, grow the
              market share of their hero products, and optimize ad spend.
              SellerCircle was tasked with building advanced advertising
              strategies to boost visibility, conversions, and profitability on
              Amazon.
            </p>
          </div>
          <Image
            src="/case-study/4.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full mx-auto object-cover -mt-20"
          />
        </section> */}
        <BrandOverview />
        {/* <section className="my-20">
          <div className="relative w-max mx-auto mb-20">
            <h2 className="lg:text-5xl text-3xl font-extrabold  mx-auto ">
              Objectives
            </h2>
            <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
          </div>
          <div className="flex flex-wrap items-center justify-between ">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "lg:w-1/2 w-full flex gap-4 items-center p-4",
                  idx % 2 == 1 && "flex-row-reverse justify-end"
                )}
              >
                <div className="flex items-center justify-center h-full min-w-[70px] aspect-square w-auto relative">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.heading}
                    className="w-[40px] h-auto z-10"
                  />
                  <Image
                    src="/case-study/5.png"
                    width={70}
                    height={70}
                    alt={item.heading}
                    className="w-auto absolute inset-0 z-0 h-[70px]"
                  />
                </div>
                <div className={idx % 2 == 1 && "text-right"}>
                  <h3 className={cn("text-2xl font-extrabold nsans ")}>
                    {item.heading}
                  </h3>
                  <p className="text-lg font-medium text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <Objectives data={data} />
        {/* <section className="my-20 w-full">
          <h2 className="text-5xl font-extrabold text-center text-blue-950 mb-5">
            Challenges
          </h2>
          <div className="flex-col flex w-full">
            {challenges.map((item, idx) => (
              <div className="w-full py-10" key={idx}>
                <div
                  className={`   px-5  max-md:ml-5 shad  w-full group   flex flex-row shadow-lg gap-0 py-10 -mt-10`}
                >
                  <div className="flex p-2 min-w-[80px] max-w-[130px] py-[30px] ml-4 bg-[#039BE4] items-center justify-center   !rounded-[30px_30px_100px_100px]   relative  h-2/3 -mt-7 z-10">
                    <Image
                      src={item.icon}
                      width={200}
                      height={200}
                      alt=""
                      className="h-[80px] w-auto aspect-auto "
                    />
                    <div className="bg-[#039BE4]  h-[20px] w-[70px] top-0 left-10 absolute -right-[11px] -z-10 rounded-r-full" />
                    <div className="bg-[#066EA0] top-0 left-[80px] h-[20px] w-[40px] absolute -z-5 rounded-[21px_21px_0_0]" />{" "}
                  </div>
                  <div className=" z-10 lg:px-10 px-4">
                    <h2 className="font-[900] text-2xl text-left mt-5 lg:h-[50px]  text-[#039BE4]">
                      {item.title}
                    </h2>
                    <div className={`overflow-hidden text-ellipsis`}>
                      <p
                        className={`text-left font-semibold text-slate-700 mt-3 `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <Challenges challenges={challenges} />
        {/* <section className="my-20 px-2">
          <div className="relative w-max mx-auto mb-20">
            <h2 className="lg:text-5xl text-3xl font-extrabold  mx-auto ">
              Strategy
            </h2>
            <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="lg:text-6xl text-4xl font-[900] text-[#039BE4] text-center">
              AMC + DSP + SP
            </h3>
            <div className="flex  gap-4">
              <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
                <div className="h-5 w-5 bg-white rounded-full" />
              </div>
              <p className="text-xl lg:text-3xl font-bold text-slate-600">
                SellerCircle developed custom AMC queries to analyze{" "}
                <span className="text-[#f48825] font-extrabold">
                  SP ad interactions
                </span>
                , identifying how targets perform for each ASIN. This insight
                refined placements and boosted{" "}
                <span className="text-[#f48825] font-extrabold">
                  {" "}
                  campaign results{" "}
                </span>{" "}
                for Hero ASINs.
              </p>
            </div>{" "}
            <Image
              src="/case-study/14.png"
              alt=""
              width={1000}
              height={400}
              className="mx-auto lg:h-[300px] h-[200px] w-auto aspect-auto"
            />
            <h3 className="lg:text-4xl text-2xl font-[900] text-[#039BE4] text-center mt-10">
              &quot;Achieving retail success through a fully optimized Brand
              Store & premium A+ content.&quot;
            </h3>
            {retailData.map((item, idx) => (
              <div className="flex  gap-4" key={idx}>
                <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-full" />
                </div>
                <p className="text-xl lg:text-3xl font-bold text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-5 my-10">
            <Image
              src="/case-study/15.png"
              width={300}
              alt=""
              height={100}
              className="w-[100px]"
            />
            <Image
              src="/case-study/16.png"
              width={300}
              alt=""
              height={100}
              className="w-[100px]"
            />
            <Image
              src="/case-study/17.png"
              width={300}
              alt=""
              height={100}
              className="w-[100px]"
            />
          </div>
          <h3 className="lg:text-6xl text-4xl font-[900] text-[#039BE4] text-center my-10 mt-20">
            Product Scaling & Hero Product Strategy
          </h3>
          <div className="flex  gap-4 my-20">
            <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
              <div className="h-5 w-5 bg-white rounded-full" />
            </div>
            <p className="text-xl lg:text-3xl font-bold text-slate-600">
              Using insights from{" "}
              <span className="font-extrabold text-[#f48825]"> AMC + SP </span>,
              SellerCircle identified top-performing targets for the Hero ASIN,
              increasing placements and refining campaign focus. This strategic
              shift amplified{" "}
              <span className="font-extrabold text-[#f48825]">
                {" "}
                visibility{" "}
              </span>{" "}
              and{" "}
              <span className="font-extrabold text-[#f48825]">
                optimized ad spend
              </span>
              , driving stronger results for the Hero ASIN.{" "}
            </p>
          </div>
          <Image
            src="/case-study/18.png"
            alt=""
            width={1000}
            height={400}
            className="mx-auto my-10 lg:h-[300px] h-[200px] w-auto aspect-auto "
          />
          <div className="my-10 flex flex-col gap-8">
            <h3 className="lg:text-4xl text-2xl font-[900] text-[#039BE4] text-center mt-10">
              Dayparting with Amazon Marketing Stream
            </h3>
            {dayparting.map((item, idx) => (
              <div className="flex  gap-4" key={idx}>
                <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-full" />
                </div>
                <p className="text-xl lg:text-3xl font-bold text-slate-600">
                  {item}
                </p>
              </div>
            ))}
            <Image
              src="/case-study/19.png"
              alt=""
              width={1000}
              height={400}
              className="mx-auto my-10 h-[350px] w-auto"
            />
          </div>
        </section> */}
        <Strategy retailData={retailData} dayparting={dayparting} />
        {/* <section className="lg:my-20">
          <div className="relative w-max mx-auto mb-20">
            <h2 className="lg:text-5xl text-3xl font-extrabold  mx-auto ">
              Execution
            </h2>
            <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
          </div>
          <div className="flex gap-4 flex-col">
            {" "}
            {marketingStrategies.map((item, idx) => (
              <div
                key={idx}
                className={cn(" w-full flex gap-4 items-center p-4")}
              >
                <div className="flex items-center justify-center h-full min-w-[90px] aspect-square w-auto relative">
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.heading}
                    className="w-[50px] h-auto z-10"
                  />
                  <Image
                    src="/case-study/5.png"
                    width={120}
                    height={120}
                    alt={item.heading}
                    className="w-auto absolute inset-0 z-0 h-[90px]"
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      "text-2xl font-extrabold nsans text-[#f48825]"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xl font-medium text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <Execution marketingStrategies={marketingStrategies} />
        {/* <section className="lg:my-20">
          <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between">
            <div className="h-1.5 rounded-xl  w-full bg-[#f48825]" />

            <h2 className="lg:text-5xl text-3xl font-extrabold  mx-auto ">
              Execution
            </h2>
            <div className="h-1.5 rounded-xl  w-full bg-[#f48825]" />
          </div>
          <div className="p-5 w-full  flex flex-col justify-between gap-5 relative py-10">
            {" "}
            {resultsData.map((item, index) => (
              <div
                key={index}
                className={`mb-5 w-[80%] ${
                  index % 2 === 0 ? "text-left" : "text-right ml-auto"
                }`}
              >
                {" "}
                <h3 className="text-3xl text-black font-extrabold">
                  {item.heading}
                </h3>{" "}
                <p className="text-slate-700 text-xl font-semibold">
                  {item.description}
                </p>{" "}
              </div>
            ))}{" "}
            <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
          </div>
        </section> */}
        <Results resultsData={resultsData} />
        {/* <section className="lg:my-20 relative p-2">
          <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between">
            <div className="h-1.5 rounded-xl  w-full bg-[#039BE4]" />

            <h2 className="lg:text-5xl text-3xl font-extrabold  mx-auto ">
              Conclusion
            </h2>
            <div className="h-1.5 rounded-xl  w-full bg-[#039BE4]" />
          </div>
          <p className="text-slate-700 font-bold lg:text-3xl text-xl lg:leading-[50px]  my-10">
            By leveraging Amazon&#39;s advanced advertising technologies,
            SellerCircle helped Krishna Ayurveda achieve exceptional growth
            across multiple fronts. From scaling new product categories and
            growing hero product&#39;s market share to optimizing ad spend and
            refining the customer journey, our holistic and data-driven strategy
            resulted in a{" "}
            <span className="font-[900] text-[#039BE4]">
              90% sales increase
            </span>{" "}
            and a{" "}
            <span className="font-[900] text-[#039BE4]">20% reduction</span> in
            ACoS and maintain a Total ROAS of 5.15 during the period. These
            successes highlight the importance of targeted, technology-driven
            Amazon advertising in driving profitable growth for brands.
          </p>
          <div className="flex items-center justify-around relative z-10">
            <div className="flex gap-2 items-center">
              <Image src="/case-study/29.png" alt="" width={50} height={50} />
              <Link
                href="/"
                className="lg:text-2xl font-semibold text-slate-700"
              >
                https://sellercircle.in/
              </Link>
            </div>
            <div className="flex gap-2 items-center ">
              <Image src="/case-study/30.png" alt="" width={50} height={50} />
              <Link
                href="mailto:contact@sellercircle.in"
                className="lg:text-2xl font-semibold text-slate-700"
              >
                contact@sellercircle.in
              </Link>
            </div>
          </div>
          <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
        </section> */}
        <Conclusion />
      </div>
      <Footer />
    </div>
  );
}
