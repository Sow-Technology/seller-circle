"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Audit from "@/components/forms/Audit";
import { BorderBeam } from "@/components/ui/border-beam";
import ContactForm from "@/components/forms/ContactForm";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.2] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto my-20 ">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Let&#39;S CHAT
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            No one-size-fits-all here,{" "}
            <span className="text-[#039BE4]">only tailored strategies.  </span>
          </motion.h2>
          <div className="mx-auto flex  items-center justify-center">
            <ContactForm />
          </div>
          <div className="w-full p-20 flex max-sm:max-w-[300px] items-center  justify-center  mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5077.125716430933!2d77.63824153494029!3d13.016819484828028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c2a05035e5%3A0xe96d55c4d7489f26!2sAJ%20Digi%20Media%20Private%20Limited%20(Seller%20Circle)!5e0!3m2!1sen!2sin!4v1718807011204!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
