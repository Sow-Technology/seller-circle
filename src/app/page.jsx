import React from "react";
import Home from "./_client/Home";
export const metadata = {
  title: "Seller Circle | Amazon Growth, Advertising & Creative Services",
  description:
    "Driving brand growth with holistic Amazon ads strategies, expert ad management, creative storytelling, and data-driven campaigns for maximum visibility and ROI.",
  openGraph: {
    title:
      "Seller Circle | Advanced Amazon Ads Partner | Growth & Creative Services",
    description:
      "Boost your brand with Seller Circle’s advanced Amazon ads strategies. Our full-service management includes Amazon advertising, DSP, A+, and Brand Store creation.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://www.sellercircle.in",
    type: "website",
    siteName: "Seller Circle",
  },
};

function page() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default page;
