"use client";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import Footer from "@/components/Footer";
import TabsSection from "@/components/pages/creative/TabsSection";
import FAQ from "@/components/pages/creative/FAQ";
import Awards from "@/components/sections/Awards";
import AContent from "@/components/pages/creative/AContent";

const Aplus = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 z-[39] lg:px-5">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Creative storytelling
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Seamless Storytelling: Design That Converts Across{" "}
            <span className="text-background">
              Every Stage of the Buyer Journey.
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-4xl text-center p-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            At Seller Circle, we transform your Amazon presence through powerful
            creative storytelling. Our comprehensive services are designed to
            captivate and engage your audience, enhance your brand’s narrative,
            and drive conversions. From compelling A+ content and immersive
            brand stories to engaging product display designs and dynamic brand
            videos, we offer a holistic approach to elevate your product
            listings and marketing campaigns. Explore our specialized services
            below to see how we can help you craft a standout brand experience
            on Amazon.
          </motion.p>
          <div className="w-full h-auto my-12 p-5">
            <Image
              src="/images/services/whyaplus.jpg"
              width={1280}
              height={600}
              alt=""
            />
          </div>
          <TabsSection active={1} />
          <Suspense>
            {" "}
            <AContent />
          </Suspense>
          <FAQ />

          <Services slice="2" />
          <Awards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aplus;
