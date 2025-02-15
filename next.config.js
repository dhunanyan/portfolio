/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });

    // Prevent warnings related to canvas
    config.resolve.alias.canvas = false;

    return config;
  },
};
