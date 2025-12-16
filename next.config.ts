import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: "https", hostname: "opengraph.githubassets.com" },
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
        ],
    },
    // Required for repo subdirectory:
    basePath: "/dhiraj-parida-portfolio",
    assetPrefix: "/dhiraj-parida-portfolio/",
};

export default nextConfig;
