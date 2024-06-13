import Image from "next/image";
import React from "react";

const Retail = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <h2 className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14">
        Let&#39;s get you <span className="text-[#039BE4]">Retail Ready </span>
      </h2>
      <video src="/retail.mp4" autoPlay muted loop></video>
    </div>
  );
};

export default Retail;
