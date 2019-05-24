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
        /* gatsby image */
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
