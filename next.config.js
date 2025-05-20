/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,     // Necessary for static export with next/image
    },
    // If you are using Turbopack and encountering issues with 'output: export',
    // you might temporarily disable it for the build by uncommenting the next lines:
    // experimental: {
    //   turbo: false,
    // },
  };
  
  module.exports = nextConfig;