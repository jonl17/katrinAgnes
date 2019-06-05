import React from "react"
import { connect } from "react-redux"
import {
  toggleDisplayTitle,
  showDetailPage,
  chooseArtwork,
} from "../../state/app"

import IMG from "./Views/IMG"

class Image extends React.Component {
  handleHover() {
    this.props.dispatch(toggleDisplayTitle(this.props.alt))
    this.props.dispatch(
      chooseArtwork({
        image: this.props.src,
        title: this.props.alt,
      })
    )
  }
  render() {
    return (
      <IMG
        handleClick={() =>
          this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
        }
        handleHover={() => this.handleHover()}
        handleOut={() => this.props.dispatch(toggleDisplayTitle(""))}
        style={this.props.style}
        src={this.props.src}
      />
    )
  }
}

const mapStateToProps = state => ({
  displayTitle: state.app.displayTitle,
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
})

export default connect(mapStateToProps)(Image)
