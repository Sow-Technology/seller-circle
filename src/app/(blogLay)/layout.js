import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
      <html lang="en" className="max-w-[100vw] overflow-x-hidden">
        <body >
       <div>
        <Navbar/>
       </div>
       <div>
        {children}
       </div>
        </body>
        <footer>
            <Footer/>
        </footer>
      </html>
    );
  }
  