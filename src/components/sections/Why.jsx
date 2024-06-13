import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <h2 className="nunito font-extrabold text-4xl lg:text-6xl text-center my-7">
        Why <span className="text-[#039BE4]">Seller circle? </span>
      </h2>
      <Image
        src="/images/why-us.png"
        alt=""
        width={1280}
        height={1500}
        className="inset-0 bg-cover object-cover"
      />
      <p className="my-20 font-bold text-xl lg:text-3xl text-justify p-5">
        Crafting Amazon narratives that convert: 30+ years of expertise blend
        into captivating stories through Product display images, A+, brand
        stories, videos, and a bespoke Brand store for maximum engagement .
      </p>
    </div>
  );
};

export default Why;
