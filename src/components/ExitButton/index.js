import React from "react"
import icon from "../../../static/icons/x.png"
import styled from "styled-components"

const ExitButton = styled.img`
  margin: 0;
  top: 0;
  right: 0;
  padding: 25px;
  height: 25px;
  width: 25px;
  position: absolute;
  &:hover {
    cursor: pointer !important;
  }
  z-index: 4;
`

/* Exit btn */
export default ({ handleClick }) => (
  <ExitButton alt={""} src={icon} onClick={() => handleClick()} />
)
