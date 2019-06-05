import React from "react"
import { connect } from "react-redux"
import {
  toggleDisplayTitle,
  showDetailPage,
  chooseArtwork,
  setArtWorkImages,
} from "../../state/app"

import IMG from "./Views/IMG"

class Image extends React.Component {
  handleHover() {
    this.props.dispatch(toggleDisplayTitle(this.props.alt))
    this.props.dispatch(
      chooseArtwork({
        featuredImage: this.props.featuredImage.childImageSharp.fluid.src,
        title: this.props.alt,
      })
    )
    this.props.dispatch(setArtWorkImages(this.props.images))
  }
  handleClick() {
    this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
  }
  render() {
    return (
      <IMG
        handleClick={() => this.handleClick()}
        handleHover={() => this.handleHover()}
        handleOut={() => this.props.dispatch(toggleDisplayTitle(""))}
        style={this.props.style}
        /* only get first image for frontpage */
        src={this.props.images[0].childImageSharp.fluid.src}
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
