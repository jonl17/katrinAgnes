import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 25px;
  z-index: 8;
  background-color: white;
  /* grid options */
  display: ${props => props.display};
  grid-template-columns: 30% 60% 10%;
`
export default ({ children, display }) => (
  <Container display={display}>{children}</Container>
)
