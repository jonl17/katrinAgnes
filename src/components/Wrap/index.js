import React from "react"
import "./fonts.css"
import "./global.css"

import { setMouseCords } from "../../state/app"

import { connect } from "react-redux"

class Wrap extends React.Component {
  handleMouse(e) {
    this.props.dispatch(setMouseCords(e.clientX, e.clientY))
  }
  render() {
    const { children } = this.props
    return (
      <div onMouseMove={e => this.handleMouse(e)} className="Wrap-container">
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(Wrap)
