import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showDetailPage } from "../../state/app"

import WorkDetailsContainer from "./Views/WorkDetailsContainer"
import ExitButton from "../ExitButton"

class WorkDetails extends React.Component {
  render() {
    return (
      <WorkDetailsContainer
        display={this.props.detailPageVisable ? "grid" : "none"}
      >
        <img /* TODO */
          alt={""}
          className="WorkDetails-image image-one"
          src={this.props.chosenArtwork.image}
        />
        <ExitButton
          handleClick={() =>
            this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
          }
        />
      </WorkDetailsContainer>
    )
  }
}

export default connect(
  state => ({
    detailPageVisable: state.app.detailPageVisable,
    chosenArtwork: state.app.chosenArtwork,
  }),
  null
)(WorkDetails)
