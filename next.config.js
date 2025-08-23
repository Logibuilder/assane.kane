const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "assane.kane"; // Remplace par ton repo

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export", // 🔥 Ajoute cette ligne
};

module.exports = nextConfig;
