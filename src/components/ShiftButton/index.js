import React from "react"
import styled from "styled-components"

const ShiftButton = styled.div`
  position: fixed;
  padding: 5px;
  color: white;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
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
