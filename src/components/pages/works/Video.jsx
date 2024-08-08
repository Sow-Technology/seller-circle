"use client";
import React from "react";
import { motion } from "framer-motion";
import VideoCard from "@/components/cards/VideoCard";
const videos = [
  {
    src: "/images/work/videos/1.mp4",
    thumb: "/images/work/videos/1.png",
  },
  {
    src: "/images/work/videos/2.mp4",
    thumb: "/images/work/videos/2.png",
  },
  {
    src: "/images/work/videos/3.mp4",
    thumb: "/images/work/videos/3.png",
  },
  {
    src: "/images/work/videos/4.mp4",
    thumb: "/images/work/videos/4.png",
  },
  {
    src: "/images/work/videos/5.mp4",
    thumb: "/images/work/videos/5.png",
  },
];
const Video = () => {
  return (
    <div className="flex flex-col gap-10 my-20">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        BRAND VIDEO{" "}
      </motion.h3>
      <div className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  ">
        {videos.map((video, index) => (
          <VideoCard src={video.src} thumb={video.thumb} key={index} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Video;
