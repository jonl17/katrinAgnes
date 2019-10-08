import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import Wrap from "../components/Wrap"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StickyImages from "../components/StickyImages"
import InfoPage from "../components/InfoPage"
import WorkDetails from "../components/WorkDetails"
import MobileView from "../components/MobileView"

const prufa = ({
  data: {
    allWordpressAcfVerk,
    allWordpressAcfText,
    allWordpressAcfInformation,
  },
  device,
}) => {
  return (
    <Wrap>
      {device !== `mobile` ? (
        <>
          <Header info={"Information"} />
          <StickyImages artworks={allWordpressAcfVerk} />
          <InfoPage
            texts={allWordpressAcfText}
            info={allWordpressAcfInformation}
          />
          <WorkDetails />
          <Footer info={"Information"} />
        </>
      ) : (
        <>
          <MobileView artworks={allWordpressAcfVerk} />
        </>
      )}
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
