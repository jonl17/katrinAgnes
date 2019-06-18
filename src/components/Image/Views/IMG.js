import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { device } from "../../../constants/screenSizes"

const Image = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
    width: 40vw;
  }
  @media ${device.browser} {
    width: 25vw;
  }
  &&:hover {
    cursor: pointer;
  }
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0;

  height: auto;
  background-size: contain;
  max-height: 500px;
  object-fit: contain;
`

/* IMG */
export default ({
  handleClick,
  handleHover,
  handleOut,
  style,
  src,
  screenSize,
}) => (
  <Image
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    style={style}
  >
    <Img fluid={src} />
  </Image>
)
