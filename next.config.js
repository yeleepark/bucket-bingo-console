/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: { webpackBuildWorker: true },
};

module.exports = withBundleAnalyzer(nextConfig);
