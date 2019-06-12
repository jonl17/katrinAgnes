import React from "react"
import styled from "styled-components"
import { device } from "../../../constants/screenSizes"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 35px 200px 100px 200px;
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

  @media ${device.tablet} {
    padding: 10px;
  }
  @media ${device.mobile} {
    padding: 0;
  }
`

export default ({ children, display }) => {
  return <Container display={display}>{children}</Container>
}
