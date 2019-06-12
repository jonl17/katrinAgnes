import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const Image = styled.div`
  &&:hover {
    cursor: pointer;
  }
`

/* IMG */
export default ({ handleClick, handleHover, handleOut, style, src }) => (
  <Image
    className="Sticky-image"
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    style={style}
    // src={src}
  >
    <Img fluid={src} critical={true} />
  </Image>
)
