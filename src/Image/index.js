import React from "react"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
    this.handleHover = this.handleHover.bind(this)
  }
  componentDidMount() {
    this.setState({
      name: this.props.alt,
    })
  }
  handleHover(e) {
    console.log(this.state.name)
  }
  render() {
    return (
      /* slack is good */
      <img
        onMouseOver={event => this.handleHover(event)}
        alt={this.props.alt}
        style={this.props.style}
        src={this.props.src}
      />
    )
  }
}

export default Image
