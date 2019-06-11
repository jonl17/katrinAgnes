import React from "react"

const style = {
  height: `100%`,
  width: `100%`,
}

class ImageWrap extends React.Component {
  // componentWillReceiveProps() {
  //   if (this.state.show !== this.props.display) {
  //     this.setState({
  //       show: this.props.display,
  //     })
  //     console.log(this.props.display)
  //   }
  // }
  render() {
    const { display, children } = this.props
    return (
      <div style={{ ...style, display: display }} className="image-wrap">
        {children}
      </div>
    )
  }
}

export default ImageWrap
