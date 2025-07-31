// src/app/(client)/layout.js
import { Kanit } from "next/font/google";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function UserLayout({ children }) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
