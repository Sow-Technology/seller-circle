import React from "react";
import Contact from "./_client/Contact";
export const metadata = {
  title: "Seller Circle | Contact Us for Amazon Growth Solutions",
  description:
    "Get in touch with Seller Circle to discuss how our Amazon growth and advertising solutions can benefit your brand. We offer personalized strategies and expert support to drive your success.",
  openGraph: {
    title: "Seller Circle | Contact Us for Amazon Growth Solutions",
    description:
      "Contact Seller Circle to learn more about our Amazon growth and advertising services. Our team provides customized solutions and expert support to help your brand succeed on Amazon. Reach out to discuss your needs.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/contact",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <Contact />
    </>
  );
}
