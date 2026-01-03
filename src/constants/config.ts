// ==========================================
// 3. src/constants/config.ts
// ==========================================
export const siteConfig = {
  name: "Assane KANE",
  title: "Développeur Full Stack",
  description: "Portfolio de Assane KANE - Développeur Full Stack passionné par l'innovation",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://assane-kane.com",
  
  author: {
    name: "Assane KANE",
    email: "contact@assane-kane.com",
    github: "https://github.com/Logibuilder",
    linkedin: "https://www.linkedin.com/in/assane-kane-10bb19267/",
  },
  
  social: {
    github: "https://github.com/Logibuilder",
    linkedin: "https://www.linkedin.com/in/assane-kane-10bb19267/",
  },
  
  features: {
    darkMode: true,
    analytics: process.env.NODE_ENV === 'production',
    animations: true,
  },
} as const;