/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
// const nextConfig = {
//   output: "export",
//   basePath: isProd ? "/vc_fund" : "",
//   assetPrefix: isProd ? "/vc_fund/" : "",
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;
