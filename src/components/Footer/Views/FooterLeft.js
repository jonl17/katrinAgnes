import React from "react"
import styled, { css } from "styled-components"
import { device } from "../../../constants/screenSizes"

import Text from "./Styled/FooterText"

const Container = styled.div`
  @media ${device.mobile} {
    display: ${props => (props.header ? "flex" : "none")}
  } 
  @media ${device.tablet} {
    display: ${props => (props.header ? "flex" : "none")}
  } 
  @media ${device.browser} {
    display: ${props => (props.footer ? "flex" : "none")}
  }
  flex-direction: column;
  margin-top: auto;
  padding: ${props => (props.footer ? "0 0 35px 35px" : "35px 0 0 35px")};
  
  
    /* @media ${device.tablet} {
    padding: 10px;
  }
  @media ${device.mobile} {
    padding: 0;
  } */
`
/* Footer Left */

export default ({ title, technique, year, footer, header }) => (
  <Container header={header} footer={footer}>
    <Text>{title}</Text>
    <Text>{technique}</Text>
    <Text>{year}</Text>
  </Container>
)
