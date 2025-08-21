import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: 'export',
};

const withMDX = createMDX({
  // Allow .mdx extensions for files
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      // Without options
      "remark-gfm",
      // With options
      ["remark-toc", { heading: "The Table" }],
    ],
    rehypePlugins: [
      // Without options
      "rehype-slug",
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
