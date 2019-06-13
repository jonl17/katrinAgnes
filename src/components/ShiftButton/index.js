import React from "react"
import styled from "styled-components"

const ShiftButton = styled.div`
  position: fixed;
  padding: 5px;
  color: white;
  height: 100%;
  left: 50%;
  top: 50%;
  &&:hover {
    cursor: none;
  }
  width: ${props => props.width};
  margin-left: ${props => props.margLeft};
  height: ${props => props.height};
  margin-top: ${props => props.margTop};
`

export default ({
  onClick,
  mouseRadar,
  mouseHide,
  width,
  margLeft,
  height,
  margTop,
}) => {
  return (
    <ShiftButton
      height={height}
      margTop={margTop}
      margLeft={margLeft}
      width={width}
      onMouseLeave={() => mouseHide()}
      onMouseMove={event => mouseRadar(event)}
      onClick={() => onClick()}
    />
  )
}
