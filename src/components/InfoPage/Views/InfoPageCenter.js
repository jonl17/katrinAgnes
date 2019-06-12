import React from "react"
import styled from "styled-components"

const Center = styled.div`
  box-sizing: border-box;
  width: 70%;
`

/* Info page Center */
export default ({ biography }) => (
  <Center>
    <p>{biography}</p>
  </Center>
)
