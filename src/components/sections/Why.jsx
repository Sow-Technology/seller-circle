import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <h2 className="nunito font-extrabold text-6xl text-center my-7">
        Why <span className="text-[#039BE4]">Seller circle? </span>
      </h2>
      <Image
        src="/images/why-us.png"
        alt=""
        width={1280}
        height={1500}
        className="inset-0 bg-cover object-cover"
      />
    </div>
  );
};

export default Why;
