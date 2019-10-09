import React from "react"
import { Text, InfoPageLeftBox, Instagram } from "../Views/Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

const KickOutTheJams = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfInformation {
          edges {
            node {
              acf {
                nafn
                email
                instagram_linkur
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Text>{data.allWordpressAcfInformation.edges[0].node.acf.nafn}</Text>
        <Text>{data.allWordpressAcfInformation.edges[0].node.acf.email}</Text>
        <Instagram
          href={
            data.allWordpressAcfInformation.edges[0].node.acf.instagram_linkur
          }
        >
          <Text>instagram</Text>
        </Instagram>
      </>
    )}
  />
)

/* Info page Left */
const InfoPageLeft = ({ device }) => (
  <InfoPageLeftBox device={device}>{KickOutTheJams()}</InfoPageLeftBox>
)

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(InfoPageLeft)
