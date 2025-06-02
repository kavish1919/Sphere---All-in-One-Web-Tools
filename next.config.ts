const nextConfig = {
  experimental: {
    serverActions: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default nextConfig;
