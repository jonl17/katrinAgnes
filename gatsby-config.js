module.exports = {
  siteMetadata: {
    title: `Katrín Agnes Klar`,
    email: `katrinagnes@gmail.com`,
    bio: `german-icelandic artist based in munich and reykjavík. studied media art at the universtity of arts and design karlsruhe from 2007 to 2011 as well as graphics at the academy of fine arts munich. currently assistant teacher at the academy of fine arts munich with prof. peter kogler. projects include exhibitions distant matter at the living art museum, reykavík in 2018 (with lukas kindermann), birting at gerðarsafn art museum, reykavík in 2015 or complementary spectrum, a comissioned work for the federal office for materials research and testing in berlin in 2013. texts collection of moments katharina wendler, 2016 way over, icelandic art center, crymogea, reykjavík democratic moment aernout mik, 2014 democratic moment, revolver publishing, berlin self-portraits in the sublime ragnar kjartansson, 2014 democratic moment, revolver publishing, berlin `,
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
    `gatsby-plugin-styled-components`,
  ],
}
