import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const Image = styled.div`
  &&:hover {
    cursor: pointer;
  }
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0;
  width: 25vw;
  height: auto;
  background-size: contain;
  max-height: 500px;
  object-fit: contain;
`

/* IMG */
export default ({ handleClick, handleHover, handleOut, style, src }) => (
  <Image
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    style={style}
  >
    <Img fluid={src} />
  </Image>
)
