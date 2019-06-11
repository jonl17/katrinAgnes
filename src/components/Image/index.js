import React from "react"
import { connect } from "react-redux"
import {
  toggleDisplayTitle,
  showDetailPage,
  chooseArtwork,
  setArtWorkImages,
  setImagesOnDisplay,
} from "../../state/app"

import { initializeImagesOnDisplayArray } from "../../methods"

import IMG from "./Views/IMG"

class Image extends React.Component {
  handleHover() {
    this.props.dispatch(toggleDisplayTitle(this.props.alt))
    this.props.dispatch(
      chooseArtwork({
        featuredImage: this.props.featuredImage.childImageSharp.fluid.src,
        title: this.props.alt,
        technique: this.props.technique,
        year: this.props.year,
      })
    )
    this.props.dispatch(setArtWorkImages(this.props.images))
  }
  handleClick() {
    this.props.dispatch(
      setImagesOnDisplay(
        initializeImagesOnDisplayArray(this.props.chosenArtWorkImages)
      )
    )
    this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
  }
  render() {
    return (
      <IMG
        className="frontpage-IMG"
        handleClick={() => this.handleClick()}
        handleHover={() => this.handleHover()}
        handleOut={() => this.props.dispatch(toggleDisplayTitle(""))}
        style={this.props.style}
        src={this.props.featuredImage.childImageSharp.fluid.src}
      />
    )
  }
}

const mapStateToProps = state => ({
  displayTitle: state.app.displayTitle,
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
  imagesOnDisplay: state.app.imagesOnDisplay,
})

export default connect(mapStateToProps)(Image)
