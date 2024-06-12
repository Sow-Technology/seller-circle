import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center flex-col ">
      <div className=" flex flex-row flex-wrap items-center justify-center gap-6 py-20 ">
        <div className="max-w-[42%] flex flex-col items-center  min-w-[300px]">
          <video src="/hero.mp4" autoPlay muted loop></video>
        </div>
        <div className="max-w-[55%] flex flex-col items-center min-w-[300px] text-center">
          <h3 className="uppercase text-[21px] font-bold">seller circle</h3>
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-6xl uppercase text-center">
            driving growth with a{" "}
            <span className="text-[#039BE4]">proven holistic approach</span>
          </h2>
          <p>
            With over 7 years of expertise, we&#39;ve empowered 1000+ brands
            with highly optimized campaigns and creatives that maximize
            visibility, conversions, and ROI. Experience our award-winning
            holistic approach to scale your brand.
          </p>
          <div className="flex flex-row gap-5 mt-10">
            <Button variant="cta">Get Started </Button>
            <Button variant="cta">Our story </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-7 flex-row mx-auto mb-16 flex-wrap items-center justify-center">
        <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
          <FaLinkedin className="text-[#0762C8] text-xl" />
          LinkedIn
        </div>
        <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
          <FaInstagram className=" text-xl" />
          Instagram
        </div>
        <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
          <FaFacebook className="text-[#0762C8] text-xl" />
          Facebook
        </div>
        <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
          <FaPinterest className="text-[#E60023] text-xl" />
          LinkedIn
        </div>
        <div>
          <Image src="/images/1.svg" alt="" width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
