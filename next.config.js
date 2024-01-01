const { version } = require('./package.json');
const lastUpdatedAt =  new Date().toString();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PACKAGE_VERSION: typeof version === "string" ? version : 'unknown',
    NEXT_PUBLIC_LAST_UPDATED_AT: lastUpdatedAt,
    NEXT_PUBLIC_COUNTS_UPDATED_AT: new Date(1703392020).toString(),
  },
  output: 'export'
}

module.exports = nextConfig
