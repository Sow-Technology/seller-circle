import React from "react";
import FullService from "./_client/FullService";
export const metadata = {
  title: "Seller Circle | Amazon Full Service Management & Growth Solutions",
  description:
    "Boost your Amazon business with our full-service management: tailored growth strategies, advanced advertising, SEO optimization, and collaborative support.",
  openGraph: {
    title: "Seller Circle | Amazon Full Service Management & Growth Solutions",
    description:
      "Discover Seller Circle’s comprehensive Amazon Full-Service Management, designed to enhance your business growth with tailored strategies, advanced advertising, and SEO optimization.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/full-service-management",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return <FullService />;
}
