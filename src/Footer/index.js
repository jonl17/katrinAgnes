import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../state/app"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visable: this.props.infoPageVisable,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.dispatch(showInfoPage(!this.props.infoPageVisable))
  }
  render() {
    return (
      <div className="Footer-container">
        <p className="Footer-text Footer-text-one">
          {this.props.detailPageVisable
            ? this.props.chosenArtwork.title
            : this.props.displayTitle}
        </p>
        <p
          style={{ display: this.props.detailPageVisable ? "none" : "block" }}
          onClick={() => this.handleClick()}
          className="Footer-text Footer-text-two"
        >
          {this.props.info}
        </p>
      </div>
    )
  }
}

export default connect(
  state => ({
    displayTitle: state.app.displayTitle,
    infoPageVisable: state.app.infoPageVisable,
    chosenArtwork: state.app.chosenArtwork,
    detailPageVisable: state.app.detailPageVisable,
  }),
  null
)(Footer)
