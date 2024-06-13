import React from "react";
import { Button } from "../ui/button";

const Works = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <h2 className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14">
        Check Our <span className="text-[#039BE4]">Works</span>
      </h2>
      <div className="flex flex-wrap items-center gap-7 justify-center">
        <Button variant="cta" className="w-[150px] text-center">
          A+
        </Button>
        <Button variant="cta" className="w-[150px] text-center">
          BRAND STORY
        </Button>
        <Button variant="cta" className="w-[150px] text-center">
          BRAND VIDEO
        </Button>
        <Button variant="cta" className="w-[150px] text-center">
          BRAND STORE
        </Button>
      </div>
    </div>
  );
};

export default Works;
