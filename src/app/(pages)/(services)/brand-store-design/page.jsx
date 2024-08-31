import React from "react";
import BrandStoreCreation from "./_client/BrandStore";
export const metadata = {
  title: "Seller Circle | Amazon Brand Store Creation Services",
  description:
    "Boost your Amazon presence with Seller Circle’s Brand Store creation services. We design and develop engaging, custom-brand stores that showcase your products, enhance brand identity, and drive customer engagement.",
  openGraph: {
    title: "Seller Circle | Amazon Brand Store Creation Services",
    description:
      "Discover Seller Circle’s Amazon Brand Store creation services. We build engaging, customized brand stores to highlight your products, improve brand identity, and boost customer engagement on Amazon.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/brand-store-creation",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <BrandStoreCreation />
    </>
  );
}
