import React from "react"
import { connect } from "react-redux"
import {
  toggleDisplayTitle,
  showDetailPage,
  chooseArtwork,
} from "../../state/app"

import IMG from "./Views/IMG"

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
    this.props.dispatch(
      chooseArtwork({
        image: this.props.src,
        title: this.state.name,
      })
    )
  }
  handleOut() {
    this.props.dispatch(toggleDisplayTitle(""))
  }
  handleClick() {
    this.props.dispatch(showDetailPage(!this.state.visable))
  }
  render() {
    return (
      <IMG
        handleClick={() => this.handleClick()}
        handleHover={() => this.handleHover()}
        handleOut={() => this.handleOut()}
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
