import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--nsans" });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seller Circle",
  description: "Seller Circle | Research | Growth | Accelerate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
