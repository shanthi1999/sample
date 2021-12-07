module.exports = {
  siteUrl: 'http://localhost:3001',
  generateRobotsTxt: true,
  // optional
  robotsTxtOptions: {
    additionalSitemaps: [
      'http://localhost:3001/sitemap.xml',
      'http://localhost:3001/my-custom-sitemap-2.xml',
      'http://localhost:3001/my-custom-sitemap-3.xml',
    ],
  },
}
