import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showDetailPage } from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"

const imageWrapStyle = {
  width: `100%`,
  maxHeight: `100%`,
}

const WorkDetails = ({ detailPageVisable, dispatch, chosenArtWorkImages }) => {
  return (
    <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
      {chosenArtWorkImages.map((image, index) => (
        <div
          id={"image-wrap-" + index}
          style={{ width: `100%`, height: `100%` }}
          key={index}
        >
          <Img
            className={"Workdetails-img WorkDetails-img-" + index}
            fluid={image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain`, width: `100%` }}
            style={{ ...imageWrapStyle }}
          />
          <div className={"Workdetails-img Workdetails-img-" + index} />
        </div>
      ))}
      <ExitButton
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
      />
    </WorkDetailsContainer>
  )
}

const mapStateToProps = state => ({
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
})

export default connect(mapStateToProps)(WorkDetails)
