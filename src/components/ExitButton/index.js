import React from "react"
import styled from "styled-components"

const NewExitButton = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  top: 25px;
  &:hover {
    cursor: pointer;
  }
  display: ${props => props.display};
  flex-direction: column;
`
const Line = styled.span`
  background: black;
  width: 100%;
  height: 4px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  margin-top: -5px;
  transform: ${props => (props.differ ? "rotate(45deg)" : "rotate(-45deg)")};
`

/* Exit btn */
export default ({ handleClick, display }) => (
  <NewExitButton display={display} onClick={() => handleClick()}>
    <Line differ />
    <Line />
  </NewExitButton>
)
