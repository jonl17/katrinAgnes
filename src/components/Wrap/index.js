import React from "react"
import "./global.css"
import { connect } from "react-redux"
import { setScreenSize } from "../../state/actions"

import Container from "./Styled/Container"

class Wrap extends React.Component {
  componentDidMount() {
    this.props.dispatch(setScreenSize(window.innerWidth))
    window.addEventListener("resize", () => {
      this.props.dispatch(setScreenSize(window.innerWidth))
    })
  }
  render() {
    const { children, device } = this.props
    return <Container device={device}>{children}</Container>
  }
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(Wrap)
