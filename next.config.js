/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'youtube.com', 'vimeo.com'],
  },
}

module.exports = nextConfig
