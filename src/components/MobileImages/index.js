import React from "react"
import { Container } from "./Styled"
import Img from "gatsby-image"

const imageStyle = {
  objectFit: `contain`,
  boxSizing: `border-box`,
  padding: `0 10px 0 10px`,
  backgroundColor: `white`,
}
const style = {
  height: `100%`,
  marginTop: `40vh`,
}
const paragraphStyle = {
  position: `sticky`,
  top: `90vh`,
  padding: `10px`,
  marginBottom: `50px`,
  backgroundColor: `white`,
}

export default ({ artworks }) => (
  <Container>
    {artworks.edges.map((artwork, index) => (
      <div style={{ position: `sticky`, top: `20vh` }}>
        <Img
          key={index}
          style={{
            ...style,
            zIndex: `${artworks.edges.length}`,
            overflow: `visible`,
          }}
          imgStyle={{ ...imageStyle }}
          fluid={artwork.node.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <p key={index + 100} style={{ ...paragraphStyle, zIndex: `${index}` }}>
          {artwork.node.frontmatter.title}
        </p>
      </div>
    ))}
  </Container>
)
