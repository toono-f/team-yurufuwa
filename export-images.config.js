/**
 * @type {import('next-export-optimize-images').Config}
 */

const environment =
  // 条件1 ? 条件2 ? 条件2がtrueの場合の処理 : 条件2がfalseの場合の処理 : 条件1がfalseの時の処理;
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_ENVIRONMENT == "development"
      ? process.env.NEXT_PUBLIC_API_ORIGIN_DEV
      : process.env.NEXT_PUBLIC_API_ORIGIN
    : "";

const config = {
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
  ],
  imageDir: environment,
  outDir: process.env.NODE_ENV == "production" ? "out" : "out_dev",
};

module.exports = config;
