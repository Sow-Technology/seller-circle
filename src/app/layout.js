import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--nsans" });
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ClientProviders from "@/providers/ClientProviders";
export const metadata = {
  title: "Seller Circle | Amazon Growth, Advertising & Creative Services",
  description:
    "Driving brand growth with holistic Amazon ads strategies, expert ad management, creative storytelling, and data-driven campaigns for maximum visibility and ROI.",
  openGraph: {
    title:
      "Seller Circle | Advanced Amazon Ads Partner | Growth & Creative Services",
    description:
      "Boost your brand with Seller Circle’s advanced Amazon ads strategies. Our full-service management includes Amazon advertising, DSP, A+, and Brand Store creation.",
    images: [
      {
        url: "https://sellercircle.in/meta.png",
        width: 800,
        height: 600,
      },
    ],
    url: "https://www.sellercircle.in",
    type: "website",
    siteName: "Seller Circle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[100vw] overflow-x-hidden">
      <body>
        <ClientProviders>
          <main className={nunito.className}>{children} </main>
        </ClientProviders>
      </body>
    </html>
  );
}
