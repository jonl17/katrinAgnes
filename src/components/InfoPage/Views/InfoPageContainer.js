import React from "react"
import styled, { css } from "styled-components"
import { distance, styles } from "../../../constants/styles"

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: ${distance.infoPage};
  background-color: white;
  /* grid options */
  display: ${props => props.display};
  ${props =>
    props.device === `mobile` &&
    css`
      grid-gap: ${styles.mobileMargin};
      grid-template-columns: 1fr;
      overflow-y: scroll;
      padding: ${styles.mobileMargin};
    `}
  ${props =>
    props.device === `browser` &&
    css`
      overflow-y: scroll;
      padding: 25px;
      grid-template-columns: 30% 60% 10%;
    `}
    ${props =>
      props.device === `tablet` &&
      css`
        overflow-y: scroll;
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
