import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google Avatars
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Public GitHub Avatars
      },
      {
        protocol: 'https',
        hostname: 'private-avatars.githubusercontent.com', // Private GitHub Avatars
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // Correct hostname for i.ibb.co images
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Plus Unsplash images
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "margubur-rahman",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
