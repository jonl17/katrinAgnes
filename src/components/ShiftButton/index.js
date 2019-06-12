import React from "react"
import styled, { css } from "styled-components"

const ShiftButton = styled.div`
  position: fixed;
  top: 50%;
  border: 1px solid black;
  padding: 5px;
  color: white;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
  /* left or right */
  ${props =>
    props.direction === `next` &&
    css`
      right: 100px;
    `}
  ${props =>
    props.direction === `previous` &&
    css`
      left: 100px;
    `}
`

export default ({ onClick, direction }) => {
  return (
    <ShiftButton direction={direction} onClick={() => onClick()}>
      {direction}
    </ShiftButton>
  )
}
