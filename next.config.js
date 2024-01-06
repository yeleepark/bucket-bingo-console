/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  basePath: '/bucket-bingo-console',
  compiler: { styledComponents: true },
  experimental: { webpackBuildWorker: true },
};

module.exports = withBundleAnalyzer(nextConfig);
