/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compiler: { styledComponents: true },
  experimental: { webpackBuildWorker: true },
};

module.exports = withBundleAnalyzer(nextConfig);
