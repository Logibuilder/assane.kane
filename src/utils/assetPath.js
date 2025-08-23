// utils/assetPath.js
export const getAssetPath = (path) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};