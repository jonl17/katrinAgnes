import React from "react"
import styled, { css } from "styled-components"
import { Text } from "../Views/Styled"

const Center = styled.div`
  box-sizing: border-box;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
  ${props =>
    props.device === `browser` &&
    css`
      width: 600px;
      line-height: 1.5;
    `}
`

/* Info page Center */
export default ({ biography, device }) => (
  <Center device={device}>
    <Text heiti>{biography}</Text>
  </Center>
)
