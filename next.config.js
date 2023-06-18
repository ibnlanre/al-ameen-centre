const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    de,
  },
};
module.exports = withContentlayer(nextConfig);
