import React from "react"
import { connect } from "react-redux"
import {
  toggleDisplayTitle,
  showDetailPage,
  chooseArtwork,
  setArtWorkImages,
  setImagesOnDisplay,
} from "../../state/actions"

import { initializeImagesOnDisplayArray } from "../../methods"

import IMG from "./Views/IMG"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
    }
  }
  componentDidMount() {
    if (window.innerWidth <= 500) {
      this.setState({
        mobile: true,
      })
    }
  }
  handleHover() {
    this.props.dispatch(toggleDisplayTitle(this.props.alt))
    this.props.dispatch(
      chooseArtwork({
        featuredImage: this.props.featuredImage.localFile.childImageSharp.fluid
          .src,
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
        style={this.props.device === `mobile` ? {} : this.props.style}
        device={this.props.device}
        className="frontpage-IMG"
        handleClick={() => this.handleClick()}
        handleHover={() => this.handleHover()}
        handleOut={() => this.props.dispatch(toggleDisplayTitle(""))}
        src={this.props.featuredImage.localFile.childImageSharp.fluid}
        screenSize={this.props.device}
      />
    )
  }
}

const mapStateToProps = state => ({
  displayTitle: state.reducer.displayTitle,
  detailPageVisable: state.reducer.detailPageVisable,
  chosenArtwork: state.reducer.chosenArtwork,
  chosenArtWorkImages: state.reducer.chosenArtWorkImages,
  imagesOnDisplay: state.reducer.imagesOnDisplay,
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(Image)
