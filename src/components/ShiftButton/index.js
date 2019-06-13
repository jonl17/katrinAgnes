import React from "react"
import styled from "styled-components"

const ShiftButton = styled.div`
  position: fixed;
  padding: 5px;
  color: white;
  height: 100%;
  width: 45%;
  left: 27%;
  top: 0;
  &&:hover {
    cursor: none;
  }
`

export default ({ onClick, mouseRadar, mouseHide }) => {
  return (
    <ShiftButton
      onMouseLeave={() => mouseHide()}
      onMouseMove={event => mouseRadar(event)}
      onClick={() => onClick()}
    />
  )
}
