/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.kampunginggrislc.com",
      },
    ],
  },
};

module.exports = nextConfig;
