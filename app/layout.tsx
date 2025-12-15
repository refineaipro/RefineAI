import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Refine AI",
  description: "Redefine Your Job Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
        <Navbar />

        {/* Main content offset for fixed navbar */}
        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
