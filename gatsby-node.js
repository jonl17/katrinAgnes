const path = require(`path`)
const slash = require(`slash`)
const slugify = require(`slugify`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWordpressAcfVerk {
        edges {
          node {
            id
            acf {
              titill
              year
              material
              myndir {
                mynd {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                        aspectRatio
                        srcSet
                        sizes
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const mobileDetails = path.resolve(`./src/templates/MobileDetails/index.js`)
  result.data.allWordpressAcfVerk.edges.forEach(item => {
    createPage({
      path: slugify(item.node.acf.titill),
      component: slash(mobileDetails),
      context: {
        acf: item.node.acf,
      },
    })
  })
}
