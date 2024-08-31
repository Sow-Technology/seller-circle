import React from "react";
import BrandStoryCreation from "./_client/BrandStoryCreation";
export const metadata = {
  title: "Seller Circle | Crafting Compelling Brand Stories for Amazon",
  description:
    "Elevate your brand with Seller Circle’s expert brand story creation services. We craft engaging narratives that connect with your audience, enhance brand identity, and drive conversions. Discover how our storytelling can transform your Amazon presence.",
  openGraph: {
    title: "Seller Circle | Crafting Compelling Brand Stories for Amazon",
    description:
      "Unlock the power of storytelling with Seller Circle’s brand story creation services. We develop engaging narratives that resonate with your audience, enhance brand identity, and drive conversions on Amazon.",
    images: [
      {
        url: "[URL_TO_YOUR_IMAGE]", // Replace with the actual image URL
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/brand-story-creation",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <BrandStoryCreation />
    </>
  );
}
