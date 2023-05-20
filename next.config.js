const fs = require("fs");
const path = require('path');
const { version } = require('./package.json');
const lastUpdatedAt =  new Date().toString();

const dates = fs.readdirSync('data').map(f => fs.statSync(path.join('data', f)).ctimeMs).sort();
const countsUpdatedAt = new Date(dates.pop()).toString();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PACKAGE_VERSION: typeof version === "string" ? version : 'unknown',
    NEXT_PUBLIC_LAST_UPDATED_AT: lastUpdatedAt,
    NEXT_PUBLIC_COUNTS_UPDATED_AT: countsUpdatedAt,
  }
}

module.exports = nextConfig
