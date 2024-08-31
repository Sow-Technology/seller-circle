import React from "react";
import CreativeServices from "./_client/CreativeServices";
export const metadata = {
  title:
    "Seller Circle | Amazon Ads Advanced Partner Agency for Creative Storytelling",
  description:
    "As an Amazon Ads Advanced Partner Agency, Seller Circle offers expert creative storytelling services including A+ content, brand stories, product display designs, and brand videos. Enhance your Amazon presence with compelling narratives and visuals that drive engagement and conversions.",
  openGraph: {
    title:
      "Seller Circle | Amazon Ads Advanced Partner Agency for Creative Storytelling",
    description:
      "Discover how Seller Circle, an Amazon Ads Advanced Partner Agency, transforms your Amazon presence with expert creative storytelling. Our services include A+ content, immersive brand stories, engaging product display designs, and dynamic brand videos. Elevate your brand experience and drive conversions with our tailored solutions.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/creative-services",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <CreativeServices />
    </>
  );
}
