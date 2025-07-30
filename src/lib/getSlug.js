//lib/getSlug.js

export function getSlug(pathname, params) {
  return params?.slug || pathname.slice(1) || "";
}
