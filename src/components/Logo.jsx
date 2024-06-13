import Image from "next/image";
import React from "react";

const Logo = ({ light = true }) => {
  return (
    <div>
      <Image
        src={light ? "/logo.svg" : "/logo-dark.svg"}
        alt="logo"
        width={500}
        height={100}
        className="md:h-[40px] h-[27px] w-max"
      />
    </div>
  );
};

export default Logo;
