import React from "react"
import Theme from "../Theme"
import Information from "../Information"
import ArtImg from "../ArtImage"
import TestImg from "../../static/temp/work1.png"
import Frame from "../Frame"
import { graphql } from "gatsby"

const index = ({ data }) => {
  return (
    <Theme>
      <Frame />
      <ArtImg images={data} image={TestImg} move={true} />
      <Information info={"Info"} workTitle={"Work Title 2015"} />
    </Theme>
  )
}

export default index

export const AllImages = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
