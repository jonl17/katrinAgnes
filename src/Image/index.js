import React from "react"
import { connect } from "react-redux"
import { toggleDisplayTitle, showDetailPage, chooseArtwork } from "../state/app"
import "./index.css"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      displayTitle: this.props.displayTitle,
      blank: false,
      visable: this.props.detailPageVisable,
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
  handleClick() {
    this.props.dispatch(
      chooseArtwork({
        image: this.props.src,
        title: this.state.name,
      })
    )
    this.props.dispatch(showDetailPage(!this.state.visable))
  }
  render() {
    return (
      /* slack is good */
      <img
        className="Sticky-image"
        onClick={() => this.handleClick()}
        onMouseOver={() => this.handleHover()}
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
