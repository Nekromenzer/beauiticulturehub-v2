/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://beauiticulturehub.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/studio/*", "/api/*", "/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "*",
        disallow: ["/studio/", "/api/"]
      }
    ],
    additionalSitemaps: [
      "https://beauiticulturehub.com/server-sitemap.xml"
    ]
  },
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/post/")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/category/")) {
      priority = 0.7;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString()
    };
  }
};
