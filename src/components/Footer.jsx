import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-background">
      {" "}
      <div className="mx-auto lg:px-20 px-8 max-w-7xl   py-5">
        <div className="flex flex-wrap max-lg:items-center max-lg:justify-center gap-5">
          <div className="lg:w-[55%] text-white font-bold flex-row p-5 flex lg:text-3xl text-xl bg-[#0BADFA] items-center justify-center drop-shadow-xl rounded-[19px]">
            <Image
              src="/images/1.svg"
              alt=""
              width={230}
              height={160}
              className="max-lg:w-[150px] max-lg:h-[120px]"
            />
            Top 1%: A testament to our continued performance.
          </div>
          <div className="lg:w-[40%] flex items-center justify-center">
            <Image src="/logo.svg" alt="" width={400} height={200} />
          </div>
        </div>
        <div className="h-0.5 w-full bg-white opacity-50 my-5"></div>
        {/* <div className="flex flex-wrap max-lg:items-center max-lg:justify-center gap-5">
          <div className="lg:w-[55%] text-white font-bold flex-row p-5 flex text-3xl bg-[#0BADFA] items-center justify-center drop-shadow-xl rounded-[19px]">
            <Image src="/images/1.svg" alt="" width={230} height={160} />
            Top 1%: A testament to our continued performance.
          </div>
          <div className="lg:w-[40%] flex items-center justify-center">
            <Image src="/logo.svg" alt="" width={400} height={200} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
