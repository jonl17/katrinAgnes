import React from "react"
import styled, { css } from "styled-components"
import { distance } from "../../../constants/styles"

const FooterContainer = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
  grid-template-columns: auto 1fr;
  ${props =>
    props.display === `true` &&
    css`
      z-index: ${distance.footerDetailPage};
    `}
`

/* Footer Container */
export default ({ children, device, display }) => (
  <FooterContainer display={display} device={device}>
    {children}
  </FooterContainer>
)
