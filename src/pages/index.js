import React from "react"
import { graphql } from "gatsby"

import Wrap from "../components/Wrap"
import Footer from "../components/Footer"
import StickyImages from "../components/StickyImages"
import InfoPage from "../components/InfoPage"
import WorkDetails from "../components/WorkDetails"

export default ({ data }) => (
  <Wrap>
    <StickyImages artworks={data.allMarkdownRemark} />
    <InfoPage data={data.site} />
    <WorkDetails />
    <Footer info={"Information"} />
  </Wrap>
)

export const AllImages = graphql`
  query testerTemper {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            technique
            year
            images {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`
