import React from "react"
import { connect } from "react-redux"
import { setScreenSize } from "../../state/actions"

import Container from "./Styled/Container"

class Wrap extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(setScreenSize(window.innerWidth))
    window.addEventListener("resize", () => this.callBack())
  }
  componentWillUnmount() {
    window.removeEventListener("resize", () => this.callBack())
  }
  callBack() {
    this.props.dispatch(setScreenSize(window.innerWidth))
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
