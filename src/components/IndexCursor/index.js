import React from "react"
import styled from "styled-components"

const Text = styled.p`
  position: absolute;
  display: ${props => props.display};
  color: white;
`

export default ({ hoveredImageIndex, length, display }) => (
  <Text display={display}>
    {hoveredImageIndex}/{length}
  </Text>
)
