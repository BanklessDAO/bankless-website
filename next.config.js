/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3-alpha-sig.figma.com']
}
}

module.exports = nextConfig
