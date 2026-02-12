/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export (VERY IMPORTANT)
  output: "export",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
