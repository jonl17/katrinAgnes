import React from "react"
import { connect } from "react-redux"
import { toggleDisplayTitle } from "../state/app"
import "./index.css"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      displayTitle: "",
      blank: false,
    }
  }
  componentDidMount() {
    this.setState({
      name: this.props.alt,
    })
  }
  handleHover() {
    this.props.dispatch(toggleDisplayTitle(this.state.name))
  }
  handleOut() {
    this.props.dispatch(toggleDisplayTitle(""))
  }
  handleClick() {
    console.log(this.state.name)
  }
  render() {
    return (
      /* slack is good */
      <img
        onClick={() => this.handleClick()}
        onMouseOver={event => this.handleHover(event)}
        onMouseOut={() => this.handleOut()}
        alt={this.props.alt}
        style={this.props.style}
        src={this.props.src}
      />
    )
  }
}

export default connect(
  state => ({
    displayTitle: state.app.displayTitle,
  }),
  null
)(Image)
