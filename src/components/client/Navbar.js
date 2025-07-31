// src/components/client/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, AUTH_BUTTON } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";
import { getLang } from "@/lib/language";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = NAV_ITEMS[lang];
  const authButton = AUTH_BUTTON[lang];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-[9999] bg-transparent border-b border-white/30">
        <div className="container">
          <div className="row">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href={lang === "en" ? "/en" : "/"} className="flex items-center">
                <Image src="/images/funch-logo.png" alt="Funch Hotel" width={160} height={40} className="object-contain" priority />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {/* Menu Items */}
                <ul className="flex items-center gap-6">
                  {navItems.map((item) => {
                    const href = lang === "en" ? `/en${item.href}` : item.href;

                    return (
                      <li key={item.id}>
                        <Link
                          href={href}
                          className={cn(
                            "text-white font-medium transition-all duration-200",
                            "hover:text-white/80 hover:scale-105",
                            pathname === href && "text-white/90 font-semibold"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-200"
                >
                  <Link href={lang === "en" ? `/en${authButton.href}` : authButton.href}>{authButton.label}</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white p-2" aria-label="Toggle mobile menu" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[10000] md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white backdrop-blur-md z-[10001] md:hidden",
          "transform transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-black/20">
          <Link href={lang === "en" ? "/en" : "/"} onClick={closeMobileMenu}>
            <Image src="/images/funch-logo-gold.png" alt="Funch Hotel" width={150} height={30} className="object-contain" />
          </Link>
          <button onClick={closeMobileMenu} className="text-black p-2 rounded-lg transition-colors" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="p-4 space-y-2">
          {navItems.map((item) => {
            const href = lang === "en" ? `/en${item.href}` : item.href;
            const isActive = pathname === href;

            return (
              <li key={item.id}>
                <Link
                  href={href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-black transition-all duration-200",
                    "hover:bg-white/10 hover:pl-6",
                    isActive && "font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Login Button */}
        <div className="p-4 mt-auto absolute bottom-0 left-0 right-0">
          <Button asChild variant="outline" className="w-full bg-[#C69C52] text-white hover:bg-white transition-all duration-200">
            <Link href={lang === "en" ? `/en${authButton.href}` : authButton.href} onClick={closeMobileMenu}>
              {authButton.label}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
