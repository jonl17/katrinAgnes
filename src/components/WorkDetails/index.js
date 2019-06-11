import React from "react"
import "./index.css"
import { connect } from "react-redux"
import {
  showDetailPage,
  setImageIndex,
  activateIndexPointer,
  setImagesOnDisplay,
} from "../../state/app"

import { incrementImagesOnDisplayArray } from "../../methods"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"
import HoverZone from "../ImageHoverZone"
import IndexCursor from "../IndexCursor"
import ImageWrap from "../ImageWrap"

const imageWrapStyle = {
  maxHeight: `100%`,
  height: `100%`,
  width: `100%`,
}

const WorkDetails = ({
  detailPageVisable,
  dispatch,
  chosenArtWorkImages,
  imagesOnDisplay,
  hoveredImageIndex,
  indexPointerActive,
  mouse,
}) => {
  console.log(imagesOnDisplay)
  if (detailPageVisable) {
    return (
      <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
        <Img
          className="image-wrap"
          style={imageWrapStyle}
          fluid={imagesOnDisplay[0].image.childImageSharp.fluid}
          imgStyle={{ objectFit: `contain` }}
        />
        <ExitButton
          handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
        />
        <IndexCursor
          hoveredImageIndex={hoveredImageIndex}
          length={chosenArtWorkImages.length}
          display={indexPointerActive ? "block" : "none"}
          mouse={mouse}
        />
      </WorkDetailsContainer>
    )
  } else {
    return <div />
  }
}

const mapStateToProps = state => ({
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
  hoveredImageIndex: state.app.hoveredImageIndex,
  indexPointerActive: state.app.indexPointerActive,
  imagesOnDisplay: state.app.imagesOnDisplay,
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(WorkDetails)
