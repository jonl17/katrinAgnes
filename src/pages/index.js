import React from "react"
import Wrap from "../Wrap"
import Information from "../Information"
import { graphql } from "gatsby"
import StickyImages from "../StickyImages"
import InfoPage from "../InfoPage"

const index = ({ data }) => {
  return (
    <Wrap>
      <StickyImages data={data} />
      <InfoPage />
      <Information info={"Information"} workTitle={"Work Title 2015"} />
    </Wrap>
  )
}

export default index

export const AllImages = graphql`
  query {
    allFile {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`
