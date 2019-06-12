import React from "react"
import "./fonts.css"

import Container from "./Styled/Container"

import { connect } from "react-redux"

const Wrap = ({ children }) => {
  return <Container>{children}</Container>
}

const mapStateToProps = state => ({
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(Wrap)
