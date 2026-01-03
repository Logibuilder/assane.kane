const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "assane.kane";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: isGithubActions ? [
      {
        protocol: 'https',
        hostname: 'assane-kane.github.io',
        pathname: `/${repo}/**`,
      }
    ] : [],
  },
  output: "export",
  trailingSlash: true,
  // Important pour GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : '',
  },
};

module.exports = nextConfig;