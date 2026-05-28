import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix a public asset path with the configured base path so it resolves
// when the site is served from a subpath (GitHub project pages). next/image
// does not apply basePath to static `public/` assets in static export, so we
// do it explicitly.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
