import type { NextConfig } from "next";

// Static export for GitHub Pages / any static host.
// If deploying to a *project* page (e.g. username.github.io/syn.desi-website),
// set NEXT_PUBLIC_BASE_PATH="/syn.desi-website". For a custom domain (syn.desi)
// leave it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
