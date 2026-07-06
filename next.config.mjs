/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder imagery only — swap for local /public files later.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
