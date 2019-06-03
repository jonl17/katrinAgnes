module.exports = {
  siteMetadata: {
    title: `Katrín Agnes Klar`,
    email: `katrinagnes@gmail.com`,
  },

  plugins: [
    /* filesystem */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `temp`,
        path: `${__dirname}/static/temp/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/static/icons/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tempWorks`,
        path: `${__dirname}/static/tempWorks/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
