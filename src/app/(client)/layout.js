import { Kanit } from "next/font/google";
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
        <main>{children}</main>
      </body>
    </html>
  );
}
