import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Footer from "@/components/Footer";
import Approach from "@/components/sections/Approach";
import Client from "@/components/sections/Client";
import Creative from "@/components/sections/Creative";
import Customers from "@/components/sections/Customers";
import Growth from "@/components/sections/Growth";
import Retail from "@/components/sections/Retail";
import Strategies from "@/components/sections/Strategies";
import WeAre from "@/components/sections/WeAre";
import Why from "@/components/sections/Why";
// import Blogs from "@/components/sections/Blogs";
import Works from "@/components/sections/Works";
import HorizontalTestimonials from "./HorizontalTestimonials";

const HomeMobile = () => {
  return (
    <div className="relative z-10">
      <div className="relative">
        <Image
          height={2000}
          src="/images/bg1.webp"
          alt="background"
          className="absolute inset-0 mix-blend-multiply opacity-10"
          width={2000}
        />
        <Navbar />
        <Hero />
      </div>
      <div className="relative my-10">
        <Image
          height={2000}
          src="/images/weare.webp"
          alt="background"
          className="absolute inset-0 mix-blend-multiply opacity-10 -mt-20"
          width={2000}
        />
        <WeAre />
      </div>
      <div className="relative my-10">
        <Image
          height={3000}
          src="/images/bg2.webp"
          alt="background"
          className="absolute inset-0 mix-blend-multiply -z-10 -mt-20"
          width={2000}
        />
        <Growth />
      </div>
      <Approach />
      <Strategies />
      <div className="relative my-10">
        <Image
          height={2000}
          src="/images/bg2.webp"
          alt="background"
          className="absolute inset-0 mix-blend-multiply -z-10 -mt-20"
          width={2000}
        />
        <Why />
      </div>
      <Retail />
      <Works />
      <Client />
      <HorizontalTestimonials />
      <Creative />
      {/* <Blogs /> */}
      <Footer />
    </div>
  );
};

export default HomeMobile;
