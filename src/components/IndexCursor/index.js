import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const Text = styled.p`
  position: absolute;
  display: ${props => props.display};
  color: black;
  font-size: 30px !important;
`

const IndexCursor = ({ hoveredImageIndex, length, display, mouse }) => (
  <Text
    style={{ left: `${mouse.x - 10}px`, top: `${mouse.y - 10}px` }}
    display={display}
  >
    {hoveredImageIndex}/{length}
  </Text>
)

const mapStateToProps = state => ({
  mouse: state.reducer.mouse,
})

export default connect(mapStateToProps)(IndexCursor)
