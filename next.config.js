const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 1200, 1920],
  },
};
module.exports = nextConfig // withContentlayer();
