import React from "react";
import Aplus from "./_client/Aplus";
export const metadata = {
  title: "Seller Circle | Transform Your Listings with Amazon A+ Content",
  description:
    "Elevate, engage, and convert with Seller Circle’s Amazon A+ / Enhanced Brand Content (EBC) services. We craft compelling product pages with detailed descriptions, high-quality visuals, and engaging brand stories to drive conversions and stand out in the marketplace.",
  openGraph: {
    title: "Seller Circle | Transform Your Listings with Amazon A+ Content",
    description:
      "Elevate your product listings with Seller Circle’s Amazon A+ Content services. Our team creates visually appealing, detailed product pages with high-quality images and engaging narratives to enhance brand presence and drive higher conversion rates.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/a+-content",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <Aplus />
    </>
  );
}
