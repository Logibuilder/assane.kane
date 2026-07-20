// src/lib/paths.ts

export const withBasePath = (path: string): string => {
  // Récupère le basePath défini par Next.js lors du build sur GitHub Actions
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};