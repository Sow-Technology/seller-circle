import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
const marqueeItem = [
  "/images/s1.webp",
  "/images/s2.webp",
  "/images/s3.webp",
  "/images/s4.webp",
  "/images/s5.webp",
  "/images/s6.webp",
  "/images/s7.webp",
  "/images/s8.webp",
  "/images/s9.webp",
  "/images/s10.webp",
];
const Awards = () => {
  return (
    <div className="my-20">
      <Marquee pauseOnHover className="flex items-center justify-center gap-5">
        {marqueeItem.map((item, index) => (
          <div className="max-w-[300px] flex items-center " key={index}>
            <Image src={item} alt="" loading="lazy" width={300} height={200} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Awards;
