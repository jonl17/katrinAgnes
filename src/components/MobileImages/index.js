import React from "react"
import { Container } from "./Styled"
import Img from "gatsby-image"

const imageStyle = {
  objectFit: `contain`,
  boxSizing: `border-box`,
  padding: `0 10px 0 10px`,
}
const style = {
  height: `100vh`,
}

export default ({ artworks }) => (
  <Container>
    {artworks.edges.map((artwork, index) => (
      <Img
        key={index}
        style={style}
        imgStyle={imageStyle}
        fluid={artwork.node.frontmatter.featuredImage.childImageSharp.fluid}
      />
    ))}
  </Container>
)
