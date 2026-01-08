import type { NextConfig } from "next";
const repoName = "portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = {
  output: "export",
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  // assetPrefix: true ? 'https://time-557.github.io/portfolio/' : '',
};

export default nextConfig;
