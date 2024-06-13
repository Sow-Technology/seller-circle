import React from "react";
import CustomerMaqrquee from "./CustomerMarquee";

const Customers = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <h2 className="nunito font-extrabold text-6xl text-center my-14">
        What our <span className="text-[#039BE4]">customers say</span>
      </h2>
      <CustomerMaqrquee />
    </div>
  );
};

export default Customers;
