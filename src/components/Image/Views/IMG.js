import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

const Image = styled.div`
  ${props =>
    props.device === `browser` &&
    css`
      width: 25vw;
      max-height: 500px;
      top: 0;
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      width: 40vw;
      max-height: 500px;
      top: 0;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: auto;
      max-height: 200px;
      top: 50px;
      padding: 50px;
    `}
  &&:hover {
    cursor: pointer;
  }
  position: -webkit-sticky !important;
  position: sticky !important;
  height: auto;
  background-size: contain;
  object-fit: contain;
  ${props =>
    props.focus &&
    css`
      z-index: 4;
    `}
`

/* IMG */
export default ({
  handleClick,
  handleHover,
  handleOut,
  style,
  src,
  device,
  front,
  focus,
}) => (
  <Image
    focus={focus}
    device={device}
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    style={style}
    front={front}
  >
    <Img loading={"eager"} fluid={src} />
  </Image>
)
