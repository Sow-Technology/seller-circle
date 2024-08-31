import React from "react";
import About from "./_client/About";
export const metadata = {
  title:
    "Seller Circle | Empowering Brands with Tailored Marketplace Solutions",
  description:
    "Explore how Seller Circle drives brand success with customized Amazon strategies, expert advertising management, and innovative creative services.",
  openGraph: {
    title: "Seller Circle | Empowering Brands with Marketplace Solutions",
    description:
      "Discover Seller Circle’s commitment to scaling brands through personalized Amazon ads strategies, expert marketing solutions, and innovative creative services.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/about",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
