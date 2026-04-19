import type { NextConfig } from "next";
import withMDX from "@next/mdx";
import fs from "fs";
import path from "path";

// Generate redirects from old blog URLs to new date-based URLs
function generateBlogRedirects() {
  try {
    const postsPath = path.join(process.cwd(), ".velite", "posts.json");
    if (!fs.existsSync(postsPath)) return [];
    
    const posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"));
    return posts
      .filter((post: any) => post.published)
      .map((post: any) => {
        const postDate = new Date(post.date);
        const year = postDate.getFullYear();
        const month = String(postDate.getMonth() + 1).padStart(2, "0");
        const day = String(postDate.getDate()).padStart(2, "0");
        const cleanSlug = post.slug.replace("blog/", "");
        return {
          source: `/blog/${cleanSlug}`,
          destination: `/blog/${year}/${month}/${day}/${cleanSlug}`,
          permanent: true,
        };
      });
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  redirects: async () => generateBlogRedirects(),
  images: {
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "svgl.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX()(nextConfig);
