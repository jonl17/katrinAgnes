import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: auto 1fr;
`

/* Footer Container */
export default ({ children }) => <FooterContainer>{children}</FooterContainer>
