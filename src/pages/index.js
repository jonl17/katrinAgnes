import React from "react"
import Wrap from "../Wrap"
import Footer from "../Footer"
import { graphql } from "gatsby"
import StickyImages from "../StickyImages"
import InfoPage from "../InfoPage"
import WorkDetails from "../WorkDetails"

const index = ({ data }) => {
  return (
    <Wrap>
      <StickyImages data={data} />
      <InfoPage />
      <WorkDetails />
      <Footer info={"Information"} workTitle={"Work Title 2015"} />
    </Wrap>
  )
}

export default index

export const AllImages = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "temp" } }) {
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
