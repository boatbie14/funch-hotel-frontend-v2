// src/lib/language.js

export function getLang(pathname) {
  if (pathname.startsWith("/en")) {
    return "en";
  }

  return "th";
}
