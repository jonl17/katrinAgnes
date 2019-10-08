import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const Text = styled.p`
  position: absolute;
  color: black;
  font-size: 30px !important;
`

const InfoPointer = ({ mouse }) => (
  <Text style={{ left: `${mouse.x}px`, top: `${mouse.y + 0}px` }}>Info</Text>
)

const mapStateToProps = state => ({
  mouse: state.reducer.mouse,
})

export default connect(mapStateToProps)(InfoPointer)
