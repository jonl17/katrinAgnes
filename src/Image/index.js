import React from "react"
import { connect } from "react-redux"
import { toggleDisplayTitle, showDetailPage, chooseArtwork } from "../state/app"
import "./index.css"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      displayTitle: "",
      blank: false,
      visable: this.props.detailPageVisable,
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
    this.props.dispatch(showDetailPage(!this.state.visable))
    this.props.dispatch(
      chooseArtwork({
        image: this.props.src,
        title: this.state.name,
      })
    )
  }
  render() {
    return (
      /* slack is good */
      <img
        className="Sticky-image"
        onClick={() => this.handleClick()}
        onMouseOver={event => this.handleHover(event)}
        onMouseOut={() => this.handleOut()}
        alt={""}
        style={this.props.style}
        src={this.props.src}
      />
    )
  }
}

export default connect(
  state => ({
    displayTitle: state.app.displayTitle,
    detailPageVisable: state.app.detailPageVisable,
    chosenArtwork: state.app.chosenArtwork,
  }),
  null
)(Image)
