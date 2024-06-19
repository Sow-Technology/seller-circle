import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ light = true }) => {
  return (
    <Link href="/">
      <Image
        src={light ? "/logo.svg" : "/logo-dark.svg"}
        alt="logo"
        width={500}
        height={100}
        className="md:h-[40px] h-[27px] w-max"
      />
    </Link>
  );
};

export default Logo;
