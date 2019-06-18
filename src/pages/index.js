import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import Wrap from "../components/Wrap"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StickyImages from "../components/StickyImages"
import InfoPage from "../components/InfoPage"
import WorkDetails from "../components/WorkDetails"
import MobileImages from "../components/MobileImages"

const index = ({ data, device }) => {
  return (
    <Wrap>
      <Header info={"Information"} />
      {device === `mobile` ? (
        <MobileImages artworks={data.allMarkdownRemark} />
      ) : (
        <StickyImages artworks={data.allMarkdownRemark} />
      )}
      <InfoPage data={data.site} />
      <WorkDetails />
      <Footer info={"Information"} />
    </Wrap>
  )
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(index)

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
