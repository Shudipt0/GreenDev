import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9q6klkylv0.ufs.sh" ,

      },
    ]
  }
};

export default nextConfig;
