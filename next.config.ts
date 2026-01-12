import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "cmshoeclean.com",
          },
        ],
        destination: "https://www.cmshoeclean.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.cmshoeclean.com",
          },
        ],
        destination: "https://www.cmshoeclean.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
