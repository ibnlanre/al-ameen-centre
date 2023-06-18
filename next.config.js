const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 1200, 1540],
  },
};
module.exports = withContentlayer(nextConfig);
