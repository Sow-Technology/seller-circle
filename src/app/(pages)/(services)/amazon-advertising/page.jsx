import React from "react";
import AmazonAdvertising from "./_client/AmazonAdvertising";
export const metadata = {
  title: "Seller Circle | Amazon Ads Advanced Partner Agency for Optimal ROI",
  description:
    "As an Amazon Ads Advanced Partner Agency, Seller Circle excels in boosting your Amazon presence through targeted advertising campaigns. Our holistic Flywheel strategy, advanced tech integration, and data-driven insights ensure enhanced visibility, sustainable growth, and maximized ROI for your brand.",
  openGraph: {
    title: "Seller Circle | Amazon Ads Advanced Partner Agency for Optimal ROI",
    description:
      "Discover how Seller Circle, an Amazon Ads Advanced Partner Agency, can elevate your Amazon presence. Our tailored advertising services, holistic Flywheel strategy, and advanced technology are designed to enhance visibility, drive sales, and achieve sustainable growth. Learn more about how we can unlock your brand’s full potential.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/amazon-advertising",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <AmazonAdvertising />
    </>
  );
}
