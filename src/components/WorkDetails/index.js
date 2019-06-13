import React from "react"
import { connect } from "react-redux"
import {
  showDetailPage,
  incrementImageIndex,
  setMouseCords,
  activateIndexPointer,
} from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"
import ShiftButton from "../ShiftButton"
import IndexCursor from "../IndexCursor"

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
  indexPointerActive,
}) => {
  if (detailPageVisable) {
    return (
      <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
        <Img
          onClick={() => console.log("HOE")}
          className="image-wrap"
          style={imageWrapStyle}
          fluid={imagesOnDisplay[chosenImageIndex].image.childImageSharp.fluid}
          imgStyle={{ objectFit: `contain` }}
          loading={`lazy`}
        />
        <ExitButton
          handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
        />
        <ShiftButton
          mouseHide={() => dispatch(activateIndexPointer(false))}
          mouseRadar={e => dispatch(setMouseCords(e.clientX, e.clientY))}
          direction={`next`}
          onClick={() => dispatch(incrementImageIndex())}
        />
        <IndexCursor
          hoveredImageIndex={chosenImageIndex + 1}
          length={imagesOnDisplay.length}
          display={indexPointerActive ? `block` : `none`}
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
  indexPointerActive: state.app.indexPointerActive,
  imagesOnDisplay: state.app.imagesOnDisplay,
  chosenImageIndex: state.app.chosenImageIndex,
})

export default connect(mapStateToProps)(WorkDetails)
