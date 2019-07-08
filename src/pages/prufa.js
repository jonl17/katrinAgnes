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

const prufa = ({ data, device }) => {
  return (
    <Wrap>
      <Header info={"Information"} />
      {device === `mobile` ? (
        <MobileImages artworks={data.allWordpressAcfVerk} />
      ) : (
        <StickyImages artworks={data.allWordpressAcfVerk} />
      )}
      <InfoPage
        texts={data.allWordpressAcfText}
        info={data.allWordpressAcfInformation}
      />
      <WorkDetails />
      <Footer info={"Information"} />
    </Wrap>
  )
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(prufa)

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
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            myndir {
              mynd {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
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
    allWordpressAcfInformation {
      edges {
        node {
          acf {
            nafn
            email
            instagram_linkur
            about_texti
          }
        }
      }
    }
    allWordpressAcfText {
      edges {
        node {
          acf {
            titill
            hofundur
            year
            utgefandi
            pdf {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  }
`
