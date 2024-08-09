import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/sections/about/Services";
import Works from "@/components/sections/Works";
import { services } from "@/lib/data";
import React from "react";

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
