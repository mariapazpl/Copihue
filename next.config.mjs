import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bytegrad.com",
            }
        ]
    }
};

export default withNextVideo(nextConfig);