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
        <MobileImages artworks={data.allWordpressAcfVerk} />
      ) : (
        <StickyImages artworks={data.allWordpressAcfVerk} />
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
    allWordpressAcfVerk {
      edges {
        node {
          id
          acf {
            titill
            forsidu_mynd {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 700
                    traceSVG: {
                      color: "#FCF1F1"
                      turnPolicy: TURNPOLICY_MINORITY
                      blackOnWhite: false
                    }
                  ) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            myndir {
              mynd {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
            material
            year
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
