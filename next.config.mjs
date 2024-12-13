/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // For Google Avatars
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // For public GitHub avatars
      },
      {
        protocol: 'https',
        hostname: 'private-avatars.githubusercontent.com', // For private GitHub avatars
      },
    ],
  },
};

export default nextConfig;
