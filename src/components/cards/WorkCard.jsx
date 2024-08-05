import Image from "next/image";
import React from "react";

const WorkCard = ({ src }) => {
  return (
    <div className="shadow-md p-4 px-10 rounded-md border border-gray-200 bg-white object-contain ">
      <Image
        alt=""
        width={500}
        height={300}
        src={src}
        className="h-[400px] w-auto object-contain"
      />
    </div>
  );
};

export default WorkCard;
