import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showDetailPage } from "../../state/app"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"

const WorkDetails = ({ detailPageVisable, chosenArtwork, dispatch }) => {
  return (
    <WorkDetailsContainer display={detailPageVisable ? "grid" : "none"}>
      <img /* TODO */
        alt={""}
        className="WorkDetails-image image-one"
        src={chosenArtwork.image}
      />
      <ExitButton
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
      />
    </WorkDetailsContainer>
  )
}

const mapStateToProps = state => ({
  detailPageVisable: state.app.detailPageVisable,
  chosenArtwork: state.app.chosenArtwork,
})

export default connect(mapStateToProps)(WorkDetails)
