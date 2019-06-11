import React from "react"
import "./index.css"
import { connect } from "react-redux"
import {
  showDetailPage,
  incrementImageIndex,
  decrementImageIndex,
} from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"
import NextButton from "../NextButton"
import PrevButton from "../PrevButton"

const imageWrapStyle = {
  maxHeight: `100%`,
  height: `100%`,
  width: `100%`,
}

const WorkDetails = ({
  detailPageVisable,
  dispatch,
  imagesOnDisplay,
  chosenImageIndex,
}) => {
  if (detailPageVisable) {
    return (
      <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
        <Img
          className="image-wrap"
          style={imageWrapStyle}
          fluid={imagesOnDisplay[chosenImageIndex].image.childImageSharp.fluid}
          imgStyle={{ objectFit: `contain` }}
        />
        <ExitButton
          handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
        />
        <PrevButton onClick={() => dispatch(decrementImageIndex())} />
        <NextButton onClick={() => dispatch(incrementImageIndex())} />
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
  chosenImageIndex: state.app.chosenImageIndex,
})

export default connect(mapStateToProps)(WorkDetails)
