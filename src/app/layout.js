import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--nsans" });
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Suspense } from "react";

export const metadata = {
  title: "Seller Circle",
  description: "Seller Circle | Research | Growth | Accelerate",
};
// export const runtime = "edge";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[100vw] overflow-x-hidden">
      <body className={nunito.className}>
        {children} <Toaster position={"top-center"} />
      </body>
    </html>
  );
}
