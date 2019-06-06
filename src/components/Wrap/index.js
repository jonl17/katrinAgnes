import React from "react"
import "./fonts.css"
import "./global.css"

class Wrap extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return <div className="Wrap-container">{children} </div>
  }
}

export default Wrap
