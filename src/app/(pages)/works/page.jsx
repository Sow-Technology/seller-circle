import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Works from "@/components/sections/Works";
import React, { Suspense } from "react";
export const metadata = {
  title:
    "Seller Circle | Our Work: A+ Content, Brand Stores, Brand Stories, and Videos",
  description:
    "Explore our portfolio showcasing exceptional work in Amazon A+ Content, Brand Stores, Brand Stories, and Videos. See how our creative solutions have transformed brands and driven success.",
  openGraph: {
    title:
      "Seller Circle | Our Work: A+ Content, Brand Stores, Brand Stories, and Videos",
    description:
      "Discover Seller Circle's impressive portfolio, featuring top-tier A+ Content, Brand Stores, Brand Stories, and Videos. See examples of our work that have boosted visibility and engagement for brands.",
    images: [
      {
        url: "[URL_TO_YOUR_IMAGE]", // Replace with the actual image URL
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/works",
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
          <Suspense>
            <Works />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
