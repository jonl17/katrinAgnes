import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import { distance, colors } from "../../../constants/styles"

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
  z-index: ${distance.image};
  ${props =>
    props.focus &&
    css`
      z-index: ${distance.imageFocused};
    `}
`
const GatsbyImg = styled(Img)`
  ${props =>
    props.focus &&
    css`
      box-shadow: 0px 0px 10px 1px black;
      transition: 0.2s;
    `}
  &&:hover {
    box-shadow: 0px 0px 10px 1px ${colors.Yellow};
    transition: 0.2s;
  }
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
    <GatsbyImg focus={focus} fluid={src} />
  </Image>
)
