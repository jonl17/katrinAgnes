import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showDetailPage } from "../../state/app"

import Img from "gatsby-image"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"

const WorkDetails = ({
  detailPageVisable,
  chosenArtwork,
  dispatch,
  chosenArtWorkImages,
}) => {
  return (
    <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
      {chosenArtWorkImages.map((image, index) => (
        <Img
          key={image.id + "index"}
          className={"WorkDetails-img-" + index}
          fluid={image.childImageSharp.fluid}
          imgStyle={{ objectFit: `contain` }}
        />
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
