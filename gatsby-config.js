module.exports = {
  siteMetadata: {
    title: `Zenith a series of events.`,
    description: `Welcome to a series of coding and fun events`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenith`,
        short_name: `Zenith`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `standalone`,
        icon: `src/images/logo_cover.png`, // This path is relative to the root of the site.
      },
    },
  `gatsby-plugin-offline`,
  ],
}
