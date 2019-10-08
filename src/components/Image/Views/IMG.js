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
  z-index: 0;
  ${props =>
    props.focus &&
    css`
      z-index: 4;
    `}
`
const GatsbyImg = styled(Img)`
  ${props =>
    props.focus &&
    css`
      box-shadow: 0px 0px 10px 1px rgba(16, 16, 16, 1);
      transition: 0.2s;
    `}
`

/* IMG */
export default ({
  handleClick,
  handleHover,
  handleOut,
  handleMove,
  style,
  src,
  device,
  front,
  focus,
}) => (
  <Image
    dimension
    focus={focus}
    device={device}
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    onMouseMove={e => handleMove(e)}
    style={style}
    front={front}
  >
    <GatsbyImg focus={focus} loading={"eager"} fluid={src} />
  </Image>
)
