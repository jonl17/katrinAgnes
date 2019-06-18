import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 8;
  background-color: white;
  /* grid options */
  display: ${props => props.display};
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: 1fr;
      overflow: scroll;
      padding: 35px 10px 35px 10px;
    `}
  ${props =>
    props.device === `browser` &&
    css`
      padding: 25px;
      grid-template-columns: 30% 60% 10%;
    `}
    ${props =>
      props.device === `tablet` &&
      css`
        padding: 25px;
        grid-template-columns: 1fr;
        overflow: scroll;
      `}
`
export default ({ children, display, device }) => (
  <Container device={device} display={display}>
    {children}
  </Container>
)
