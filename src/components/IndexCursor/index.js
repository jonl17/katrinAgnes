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
  <Text style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }} display={display}>
    {hoveredImageIndex}/{length}
  </Text>
)

const mapStateToProps = state => ({
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(IndexCursor)
