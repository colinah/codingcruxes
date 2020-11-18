module.exports = {
  siteMetadata: {
    title: `Coding Cruxes`,
    description: `Help to solve all your hardest coding cruxes.`,
    author: `https://halecolin.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/CC-Logo-Large.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
          // Specify the URL of the WordPress source
          baseUrl: `codingcruxes.local`,
          protocol: `http`,
          // Indicates if a site is hosted on WordPress.com
          hostingWPCOM: false,
          useACG: true,
          // Specify which URL structures to fetch
          includedRoutes: [
            '**/posts',
            '**/tags',
            '**/categories',
            '**/media',
            '**/pages'
          ]
      }
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
