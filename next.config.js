const path = require("path");

const environment =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_ENVIRONMENT == "development"
      ? process.env.NEXT_PUBLIC_API_ORIGIN_DEV
      : process.env.NEXT_PUBLIC_API_ORIGIN
    : "";

const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  // write your next.js configuration values.
  assetPrefix: environment,
  basePath: environment,
  images: {
    deviceSizes: [640, 960, 1280, 1600, 1920],
  },
  publicRuntimeConfig: {
    basePath: environment,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
});
