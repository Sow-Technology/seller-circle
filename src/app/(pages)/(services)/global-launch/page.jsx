import React from "react";
import GlobalLaunchStrategies from "./_client/GlobalLaunchStrategies";
export const metadata = {
  title: "Seller Circle | Global Launch Strategies for Amazon Success",
  description:
    "Expand your Amazon presence globally with Seller Circle’s launch strategies. We provide expert guidance and execution for successful product launches across international markets, ensuring optimal visibility and market entry.",
  openGraph: {
    title: "Seller Circle | Global Launch Strategies for Amazon Success",
    description:
      "Unlock international success with Seller Circle’s global launch strategies for Amazon. Our team offers expert guidance and execution to ensure successful product launches across global markets, enhancing visibility and optimizing market entry.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/global-launch-strategies",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <GlobalLaunchStrategies />
    </>
  );
}
