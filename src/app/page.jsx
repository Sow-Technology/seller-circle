import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Approach from "@/components/sections/Approach";
import Client from "@/components/sections/Client";
import Creative from "@/components/sections/Creative";
import Customers from "@/components/sections/Customers";
import Growth from "@/components/sections/Growth";
import Hero from "@/components/sections/Hero";
import Retail from "@/components/sections/Retail";
import Strategies from "@/components/sections/Strategies";
import WeAre from "@/components/sections/WeAre";
import Why from "@/components/sections/Why";
import Works from "@/components/sections/Works";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="relative z-10">
      <div className="relative">
        <Image
          height={2000}
          src="/images/bg1.png"
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
      <Customers />
      <Creative />
      <Footer />
    </div>
  );
};

export default Home;
