import Image from "next/image";
import React from "react";

const Approach = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <h3 className="font-bold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto">
        Our approach{" "}
      </h3>
      <h2 className="nunito font-extrabold text-6xl max-w-5xl mx-auto text-center my-7">
        No one-size-fits-all here,{" "}
        <span className="text-[#039BE4]">only tailored strategies.  </span>
      </h2>
      <div>
        <div className="max-w-[50%]">
          <div className="rounded-r-full p-10 bg-[#039BE4] text-white px-20">
            Adopting a holistic approach to your entire account, not just
            individual ads, crafting strategies for increased visibility and
            optimized search flow.
          </div>
          <div>
            <Image src="/images/17.svg" alt="" width={500} height={700} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Approach;
