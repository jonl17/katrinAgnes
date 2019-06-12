import React from "react"
import styled from "styled-components"

import Text from "./Styled/FooterText"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-bottom: 35px;
  padding-left: 35px;
`
/* Footer Left */
export default ({ title, technique, year }) => (
  <Container>
    <Text>{title}</Text>
    <Text>{technique}</Text>
    <Text>{year}</Text>
  </Container>
)
