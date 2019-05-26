import React from "react"
import Information from "../Information"
import "./index.css"
import "./fonts.css"
import { graphql } from "gatsby"
import StickyImages from "../StickyImages"

const index = ({ data }) => {
  return (
    <>
      <StickyImages data={data} />
      <Information info={"Information"} workTitle={"Work Title 2015"} />
    </>
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
