import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showDetailPage } from "../state/app"
import X from "../../static/icons/x.png"

class WorkDetails extends React.Component {
  render() {
    console.log(this.props.chosenArtwork)
    return (
      <div
        style={{ display: this.props.detailPageVisable ? "grid" : "none" }}
        className="WorkDetails-container"
      >
        <img
          alt={""}
          className="WorkDetails-image image-one"
          src={this.props.chosenArtwork.image}
        />
        <img
          alt={""}
          src={X}
          className="Exit-infopage-btn"
          onClick={() =>
            this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
          }
        />
      </div>
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
