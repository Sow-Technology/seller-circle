"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6";
import { Pinterest } from "grommet-icons";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxLine, RiInstagramFill } from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
const Socials = () => {
  return (
    <div className="flex gap-7 flex-row mx-auto flex-wrap items-center justify-center max-lg:my-4 ">
      <div className="flex items-center flex-wrap  flex-row justify-center gap-7">
        <motion.div
          initial={{ y: 100, opacity: 80 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
            <FaLinkedin className="text-[#0762C8] text-xl" />
            LinkedIn
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
            <AiFillInstagram className=" text-xl" />
            Instagram
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
            <FaFacebook className="text-[#0762C8] text-xl" />
            Facebook
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
            <Pinterest className="text-[#E60023] text-xl" />
            Pinterest
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <Image
          src="/images/1.png"
          alt=""
          width={500}
          height={500}
          className="h-[150px] w-auto"
        />
      </motion.div>
    </div>
  );
};

export default Socials;
