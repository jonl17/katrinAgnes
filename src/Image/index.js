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
    this.handleHover = this.handleHover.bind(this)
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
  render() {
    return (
      /* slack is good */
      <img
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
