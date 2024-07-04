/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picoshare.lucashost.fr',
        port: '',
        pathname: '/*'
      }
    ]
  }
};

export default nextConfig;
