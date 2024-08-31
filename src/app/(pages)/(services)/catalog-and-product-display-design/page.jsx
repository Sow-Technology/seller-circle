import React from "react";
import CatalogAndProduct from "./_client/CatalogAndProdduct";
export const metadata = {
  title: "Seller Circle | Expert Catalog and Product Display Design Services",
  description:
    "Transform your Amazon product listings with Seller Circle’s high-impact design services. We create visually compelling product pages that attract attention and drive conversions, leveraging over 1 million listings of experience.",
  openGraph: {
    title: "Seller Circle | Expert Catalog and Product Display Design Services",
    description:
      "Elevate your Amazon listings with Seller Circle’s expert design services. Our high-impact designs enhance visibility and drive conversions, drawing from extensive experience with over 1 million product listings.",
    images: [
      {
        url: "[URL_TO_YOUR_IMAGE]", // Replace with the actual image URL
        width: 800,
        height: 600,
      },
    ],
    url: "https://sellercircle.in/catalog-and-product-display-design",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function page() {
  return (
    <>
      <CatalogAndProduct />
    </>
  );
}
