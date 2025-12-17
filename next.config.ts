import type { NextConfig } from "next";

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

    basePath: isProd ? "/dhiraj-parida-portfolio" : "",
    assetPrefix: isProd ? "/dhiraj-parida-portfolio/" : "",
};

export default nextConfig;
