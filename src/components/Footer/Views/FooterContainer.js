import React from "react"
import styled, { css } from "styled-components"

const FooterContainer = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
  ${props =>
    props.device === `mobile` &&
    css`
      top: 0;
    `}
  grid-template-columns: auto 1fr;
  ${props =>
    props.display &&
    css`
      z-index: 100;
    `}
`

/* Footer Container */
export default ({ children, device, display }) => (
  <FooterContainer display={display} device={device}>
    {children}
  </FooterContainer>
)
