import React from "react";
import BrandVideo from "./_client/BrandVideos";
export const metadata = {
  title: "Seller Circle | Professional Brand & Ad Video Production Services",
  description:
    "Enhance your Amazon presence with Seller Circle’s expert brand and ad video production services. We create captivating videos that boost engagement, drive conversions, and elevate your brand’s story.",
  openGraph: {
    title: "Seller Circle | Professional Brand & Ad Video Production Services",
    description:
      "Elevate your brand with Seller Circle’s high-quality brand and ad videos. Our expert production services are designed to boost engagement and drive conversions with captivating visuals and compelling storytelling.",
    images: [
      {
        url: "[URL_TO_YOUR_IMAGE]", // Replace with the actual image URL
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/brand-videos-and-ad-videos",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <BrandVideo />
    </>
  );
}
