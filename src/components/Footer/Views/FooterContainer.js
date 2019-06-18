import React from "react"
import styled, { css } from "styled-components"

const FooterContainer = styled.div`
  ${props =>
    props.device === `browser` &&
    css`
      display: grid;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      display: none;
    `}
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
  grid-template-columns: auto 1fr;
`

/* Footer Container */
export default ({ children, device }) => (
  <FooterContainer device={device}>{children}</FooterContainer>
)
