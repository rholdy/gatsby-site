const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Holdy Portfolio Site', // Navigation and Site Title
  siteTitleAlt: 'Holdy', // Alternative Site title for SEO
  siteUrl: 'https://tender-williams-96d288.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'My super cool portfolio site',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ryan_holdaway', // Twitter Username
  ogSiteName: 'holdy', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
