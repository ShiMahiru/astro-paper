export const SITE = {
  website: "https://242531778.xyz/", // replace this with your deployed domain
  author: "ShiMahiru",
  profile: "https://github.com/ShiMahiru",
  desc: "一个简约、响应式且对 SEO 友好的 Astro 博客主题。",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  backgroundImageURL: "https://api.yppp.net/api.php",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑页面",
    url: "https://github.com/ShiMahiru/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  forceDesktopView: false, // keep responsive viewport for mobile devices
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

export const GISCUS = {
  enabled: true,
  repo: "ShiMahiru/bolg-Giscus",
  repoId: "R_kgDOR_rqPw",
  category: "Announcements",
  categoryId: "DIC_kwDOR_rqP84C6l8B",
  mapping: "pathname", // "pathname" | "url" | "title" | "og:title" | "specific" | "number"
  strict: "1",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top", // "top" | "bottom"
  lang: "zh-CN",
  loading: "lazy", // "lazy" | "eager"
} as const;
