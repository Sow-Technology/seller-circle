import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/sections/about/Services";
import React from "react";
export const metadata = {
  title:
    "Seller Circle | Comprehensive Amazon Services for Growth & Advertising",
  description:
    "Explore Seller Circle’s expert services: Growth & Scale-Up Management, Amazon Advertising, DSP Campaigns, Creative Storytelling, Marketplaces Advertising, and Global Launch Strategies. Elevate your Amazon business with tailored solutions and advanced strategies.",
  openGraph: {
    title:
      "Seller Circle | Comprehensive Amazon Services for Growth & Advertising",
    description:
      "Discover Seller Circle’s full suite of services: from Growth & Scale-Up Management to Amazon Advertising, DSP campaigns, Creative Storytelling, and Global Launch Strategies. Tailored solutions to elevate your Amazon business and drive results.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/services",
    type: "website",
    siteName: "Seller Circle",
  },
};

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] z-[501] flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto z-30  lg:px-5">
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
