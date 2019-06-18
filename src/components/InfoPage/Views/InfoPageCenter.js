import React from "react"
import styled, { css } from "styled-components"

const Center = styled.div`
  box-sizing: border-box;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
  ${props =>
    props.device === `browser` ||
    (props.device === `tablet` &&
      css`
        width: 75%;
      `)}
`

/* Info page Center */
export default ({ biography, device }) => (
  <Center device={device}>
    <p>{biography}</p>
  </Center>
)
