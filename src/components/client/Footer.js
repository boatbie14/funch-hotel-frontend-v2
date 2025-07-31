// src/components/client/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLang } from "@/lib/language";
import { NAV_ITEMS } from "@/lib/constants/navigation";

export default function Footer() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const navItems = NAV_ITEMS[lang];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Logo & Contact */}
            <div className="space-y-4">
              {/* Logo */}
              <Link href={lang === "en" ? "/en" : "/"} className="inline-block">
                <Image src="/images/funch-logo.png" alt="Funch Hotel" width={180} height={45} className="object-contain" />
              </Link>

              {/* Address */}
              <div className="space-y-2 text-gray-300">
                <p className="leading-relaxed">
                  44 พัฒนาการ 17 ถนนพัฒนาการ เขตสวนหลวง
                  <br />
                  แขวงสวนหลวง 10250
                </p>

                {/* Phone */}
                <p>
                  <a href="tel:0880999018" className="hover:text-white transition-colors">
                    088-099-9018
                  </a>
                </p>
              </div>
            </div>

            {/* Right Section - Menu */}
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4">เมนู</h3>
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const href = lang === "en" ? `/en${item.href}` : item.href;

                  return (
                    <li key={item.id}>
                      <Link href={href} className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Border & Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Funch Hotel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
