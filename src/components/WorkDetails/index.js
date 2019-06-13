import React from "react"
import { connect } from "react-redux"
import {
  showDetailPage,
  incrementImageIndex,
  setMouseCords,
  activateIndexPointer,
  setShiftzoneSize,
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
  display: `grid`,
}

class WorkDetails extends React.Component {
  handleMouse(e) {
    this.props.dispatch(setMouseCords(e.clientX, e.clientY))
  }
  handleClick() {
    this.props.dispatch(incrementImageIndex())
  }
  findWidth() {
    if (this.props.detailPageVisable) {
      const { offsetWidth, offsetHeight } = this.refs.inner.imageRef.current
      if (this.props.shiftZoneWidth !== offsetWidth) {
        if (offsetWidth === 0) {
          this.props.dispatch(setShiftzoneSize(offsetHeight, offsetWidth))
        }
        this.props.dispatch(setShiftzoneSize(offsetHeight, offsetWidth))
      }
    }
  }
  componentDidUpdate() {}

  render() {
    const {
      detailPageVisable,
      dispatch,
      imagesOnDisplay,
      chosenImageIndex,
      indexPointerActive,
      shiftZoneSize,
    } = this.props

    if (detailPageVisable) {
      return (
        <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
          <Img
            onLoad={() => this.findWidth()}
            className="image-wrap"
            style={imageWrapStyle}
            fluid={
              imagesOnDisplay[chosenImageIndex].image.childImageSharp.fluid
            }
            imgStyle={{
              objectFit: `contain`,
              width: `auto`,
              margin: `auto`,
              right: 0,
              left: 0,
            }}
            loading={`lazy`}
            ref={"inner"}
          />
          <ExitButton
            handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
          />
          <ShiftButton
            height={shiftZoneSize.height + "px"}
            margTop={(shiftZoneSize.height / 2) * -1 + "px"}
            width={shiftZoneSize.width + "px"}
            margLeft={(shiftZoneSize.width / 2) * -1 + "px"}
            mouseHide={() => dispatch(activateIndexPointer(false))}
            mouseRadar={e => this.handleMouse(e)}
            direction={`next`}
            onClick={() => this.handleClick()}
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
}

const mapStateToProps = state => ({
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
  indexPointerActive: state.app.indexPointerActive,
  imagesOnDisplay: state.app.imagesOnDisplay,
  chosenImageIndex: state.app.chosenImageIndex,
  shiftZoneSize: state.app.shiftZoneSize,
})

export default connect(mapStateToProps)(WorkDetails)
