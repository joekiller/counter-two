const { version } = require('./package.json');
const lastUpdatedAt =  new Date().toString();
const countUpdatedAt = 1755760255;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PACKAGE_VERSION: typeof version === "string" ? version : 'unknown',
    NEXT_PUBLIC_LAST_UPDATED_AT: lastUpdatedAt,
    NEXT_PUBLIC_COUNTS_UPDATED_AT: new Date(countUpdatedAt * 1000).toString(),
  },
  output: 'export'
}

module.exports = nextConfig
