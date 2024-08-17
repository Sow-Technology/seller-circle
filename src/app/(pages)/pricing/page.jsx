import Pricing from "@/components/pages/Pricing";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <Pricing />
    </Suspense>
  );
};

export default page;
