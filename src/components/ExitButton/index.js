import React from "react"
import styled, { css } from "styled-components"
import { connect } from "react-redux"

const NewExitButton = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  ${props =>
    props.device === `browser` &&
    css`
      right: 35px;
      top: 35px;
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      right: 35px;
      top: 35px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      right: 10px;
      top: 35px;
    `}

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
const ExitBtn = ({ handleClick, display, device }) => (
  <NewExitButton
    device={device}
    display={display}
    onClick={() => handleClick()}
  >
    <Line differ />
    <Line />
  </NewExitButton>
)

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(ExitBtn)
