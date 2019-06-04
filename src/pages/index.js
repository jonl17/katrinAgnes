import React from "react"
import { graphql } from "gatsby"

import Wrap from "../components/Wrap"
import Footer from "../components/Footer"
import StickyImages from "../components/StickyImages"
import InfoPage from "../components/InfoPage"
import WorkDetails from "../components/WorkDetails"

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
