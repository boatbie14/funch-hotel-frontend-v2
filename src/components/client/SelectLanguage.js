// src/components/client/SelectLanguage.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLang } from "@/lib/language";

export default function SelectLanguage() {
  const pathname = usePathname();
  const lang = getLang(pathname);

  return (
    <div className="flex items-center gap-2">
      <Link
        href={lang === "en" ? "/" : "/en"}
        className={cn("text-white/70 text-sm transition-all duration-200 hover:text-white", lang === "th" && "text-white font-semibold")}
      >
        TH
      </Link>
      <span className="text-white/50">|</span>
      <Link
        href={lang === "th" ? "/en" : "/"}
        className={cn("text-white/70 text-sm transition-all duration-200 hover:text-white", lang === "en" && "text-white font-semibold")}
      >
        EN
      </Link>
    </div>
  );
}
