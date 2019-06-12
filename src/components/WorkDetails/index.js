import React from "react"
import { connect } from "react-redux"
import {
  showDetailPage,
  incrementImageIndex,
  decrementImageIndex,
} from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"
import ShiftButton from "../ShiftButton"

const imageWrapStyle = {
  maxHeight: `100%`,
  height: `100%`,
  width: `100%`,
  position: `absolute`,
  gridRow: `2/3`,
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
          fixed={imagesOnDisplay[chosenImageIndex].image.childImageSharp.fixed}
          imgStyle={{ objectFit: `contain` }}
          loading={`lazy`}
          critical={true}
        />
        <ExitButton
          handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
        />
        <ShiftButton
          direction={`next`}
          onClick={() => dispatch(incrementImageIndex())}
        />
        <ShiftButton
          direction={`previous`}
          onClick={() => dispatch(decrementImageIndex())}
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
  chosenImageIndex: state.app.chosenImageIndex,
})

export default connect(mapStateToProps)(WorkDetails)
