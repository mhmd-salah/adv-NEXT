import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    authInterrupts: true,
  },
  cacheComponents: true,
  cacheLife: {
    'half-day': {
      stale: 10,
      expire: 80,
      revalidate: 30,
    }
  },
  redirects: () => [
    {
      source: '/old-blog',
      destination: '/new-blog',
      permanent: true,
    },
  ]
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig)