import Image from "next/image";
import React from "react";
const clientLogos = [
  "/images/51.svg",
  "/images/52.svg",
  "/images/53.svg",
  "/images/54.svg",
  "/images/55.svg",
  "/images/56.svg",
  "/images/57.svg",
  "/images/58.svg",
  "/images/51.svg",
  "/images/52.svg",
  "/images/53.svg",
  "/images/54.svg",
  "/images/55.svg",
  "/images/56.svg",
  "/images/57.svg",
  "/images/58.svg",
];
const Client = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <h2 className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14">
        Our <span className="text-[#039BE4]">Client List</span>
      </h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {clientLogos.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={280}
            height={130}
            alt=""
            className="object-contain lg:w-[280px] lg:h-[130px] w-[140px] h-[70px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Client;
