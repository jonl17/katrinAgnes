import React from "react"
import "./index.css"
import { connect } from "react-redux"
import {
  showDetailPage,
  setImageIndex,
  activateIndexPointer,
} from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"
import HoverZone from "../ImageHoverZone"
import IndexCursor from "../IndexCursor"

const imageWrapStyle = {
  width: `100%`,
  maxHeight: `100%`,
}

const WorkDetails = ({
  detailPageVisable,
  dispatch,
  chosenArtWorkImages,
  hoveredImageIndex,
  indexPointerActive,
  mouse,
}) => {
  return (
    <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
      {chosenArtWorkImages.map((image, index) => (
        <div
          id={"image-wrap-" + index}
          style={{ width: `100%`, height: `100%` }}
          key={index}
        >
          <Img
            className={"WorkDetails-img WorkDetails-img-" + index}
            fluid={image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain`, width: `100%` }}
            style={{ ...imageWrapStyle }}
          />
          <HoverZone
            activateIndexPointer={show => dispatch(activateIndexPointer(show))}
            setImageIndex={imageIndex => dispatch(setImageIndex(imageIndex))}
            index={index + 1}
          />
        </div>
      ))}
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
}

const mapStateToProps = state => ({
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
  hoveredImageIndex: state.app.hoveredImageIndex,
  indexPointerActive: state.app.indexPointerActive,
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(WorkDetails)
