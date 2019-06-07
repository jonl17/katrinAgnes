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

const imageWrapStyle = {
  width: `100%`,
  maxHeight: `100%`,
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
  return (
    <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
      {imagesOnDisplay.map((image, index) => (
        <div
          // id={"image-wrap-" + index}
          className="image-wrap"
          style={{ width: `100%`, height: `100%`, display: image.display }}
          key={index}
        >
          <Img
            className={"WorkDetails-img WorkDetails-img-" + index}
            fluid={image.image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain`, width: `100%` }}
            style={{ ...imageWrapStyle }}
          />
          <HoverZone
            displayNextImage={index =>
              dispatch(
                setImagesOnDisplay(
                  incrementImagesOnDisplayArray(index, imagesOnDisplay)
                )
              )
            }
            activateIndexPointer={show => dispatch(activateIndexPointer(show))}
            setImageIndex={imageIndex => dispatch(setImageIndex(imageIndex))}
            index={index}
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
  imagesOnDisplay: state.app.imagesOnDisplay,
  mouse: state.app.mouse,
})

export default connect(mapStateToProps)(WorkDetails)
