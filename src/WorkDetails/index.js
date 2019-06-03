import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./index.css"
import Img from "gatsby-image"
import { connect } from "react-redux"
import { showDetailPage } from "../state/app"
import X from "../../static/icons/x.png"

const WorkDetails = props => {
  //   const { frontmatter } = data.markdownRemark

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "Test Work" } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  images {
                    src
                  }
                }
              }
            }
          }
          allImageSharp(
            filter: { fluid: { originalName: { eq: "work3.png" } } }
          ) {
            edges {
              node {
                fluid {
                  originalName
                  src
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div
          style={{ display: props.detailPageVisable ? "grid" : "none" }}
          className="WorkDetails-container"
        >
          <Img
            style={{ height: `100%` }}
            imgStyle={{ objectFit: `contain` }}
            fluid={data.allImageSharp.edges[0].node.fluid}
          />
          <img
            alt={""}
            src={X}
            className="Exit-infopage-btn"
            onClick={() =>
              props.dispatch(showDetailPage(!props.detailPageVisable))
            }
          />
        </div>
      )}
    />
  )
}

export default connect(
  state => ({
    detailPageVisable: state.app.detailPageVisable,
  }),
  null
)(WorkDetails)
