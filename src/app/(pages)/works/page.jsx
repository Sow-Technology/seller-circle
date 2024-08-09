import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Works from "@/components/sections/Works";
import React, { Suspense } from "react";

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
