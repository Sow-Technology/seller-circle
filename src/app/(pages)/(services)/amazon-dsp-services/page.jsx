import React from "react";
import AmazonDsp from "./_client/AmazonDsp";
export const metadata = {
  title:
    "Seller Circle | Amazon Ads Advanced Partner Agency for Amazon DSP Services",
  description:
    "As an Amazon Ads Advanced Partner Agency, Seller Circle offers expert Amazon DSP management to elevate your brand. Our tailored strategies, advanced audience targeting, and data-driven insights ensure maximum visibility, enhanced brand awareness, and optimized ad performance.",
  openGraph: {
    title:
      "Seller Circle | Amazon Ads Advanced Partner Agency for Amazon DSP Services",
    description:
      "Discover how Seller Circle, an Amazon Ads Advanced Partner Agency, can enhance your Amazon DSP campaigns. Our expert team uses advanced audience targeting, data-driven strategies, and a full-funnel approach to drive visibility, boost sales, and maximize your ad spend. Explore our comprehensive DSP services and unlock your brand’s potential.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/amazon-dsp-services",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <AmazonDsp />
    </>
  );
}
