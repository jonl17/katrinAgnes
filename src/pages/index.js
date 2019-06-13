import React from "react"
import { graphql } from "gatsby"

import Wrap from "../components/Wrap"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StickyImages from "../components/StickyImages"
import InfoPage from "../components/InfoPage"
import WorkDetails from "../components/WorkDetails"

export default ({ data }) => (
  <Wrap>
    <Header info={"Information"} />
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
              id
              name
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
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
        bio
      }
    }
  }
`
