import Navbar from "@/components/Navbar";
import Approach from "@/components/sections/Approach";
import Growth from "@/components/sections/Growth";
import Hero from "@/components/sections/Hero";
import WeAre from "@/components/sections/WeAre";
import Why from "@/components/sections/Why";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
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
          src="/images/weare.jpg"
          alt="background"
          className="absolute inset-0 mix-blend-multiply opacity-10 -mt-20"
          width={2000}
        />
        <WeAre />
      </div>
      <Growth />
      <Approach />
      <Why />
    </div>
  );
};

export default Home;
