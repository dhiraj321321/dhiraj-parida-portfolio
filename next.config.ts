import type { NextConfig } from "next";

const repo = "dhiraj-parida-portfolio";
const isProd = process.env.NODE_ENV === "production";

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
    basePath: isProd ? `/${repo}` : "",
    assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
