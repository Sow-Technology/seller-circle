import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo"
        width={500}
        height={100}
        className="h-[40px] w-max"
      />
    </div>
  );
};

export default Logo;
