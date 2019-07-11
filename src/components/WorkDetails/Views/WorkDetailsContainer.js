import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding-bottom: 50px;
  background-color: white;
  display: ${props => props.display};
  align-content: center;
  justify-content: center;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    "..."
    "center"
    "...";
`

export default ({ children, display }) => {
  return <Container display={display}>{children}</Container>
}
