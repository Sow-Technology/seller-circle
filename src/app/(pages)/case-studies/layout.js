import { Toaster } from "@/components/ui/sonner";
import { Montserrat_Alternates } from "next/font/google";
export const metadata = {
  title: "Seller Circle | Case Study",
  description:
    "Driving brand growth with holistic Amazon ads strategies, expert ad management, creative storytelling, and data-driven campaigns for maximum visibility and ROI.",
  openGraph: {
    title:
      "Seller Circle | Advanced Amazon Ads Partner | Growth & Creative Services",
    description:
      "Boost your brand with Seller Circle’s advanced Amazon ads strategies. Our full-service management includes Amazon advertising, DSP, A+, and Brand Store creation.",
    images: [
      {
        url: "https://sellercircle.in/logo-dark.svg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://www.sellercircle.in",
    type: "website",
    siteName: "Seller Circle",
  },
};
const Montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[100vw] overflow-x-hidden">
      <body className={Montserrat.className}>
        {children} <Toaster position={"top-center"} />
      </body>
    </html>
  );
}
