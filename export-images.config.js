/**
 * @type {import('next-export-optimize-images').Config}
 */

const imageDir =
  process.env.NEXT_PUBLIC_ENVIRONMENT == "development"
    ? process.env.NEXT_PUBLIC_API_ORIGIN_DEV
    : process.env.NEXT_PUBLIC_API_ORIGIN;

const outDir =
  process.env.NEXT_PUBLIC_ENVIRONMENT == "development" ? "out_dev/" : "out";

const config = {
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
  ],
  imageDir,
  outDir,
};

module.exports = config;
