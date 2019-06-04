import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/app"

import FooterContainer from "./Views/FooterContainer"
import FooterLeft from "./Views/FooterLeft"
import FooterRight from "./Views/FooterRight"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.dispatch(showInfoPage(!this.props.infoPageVisable))
  }
  render() {
    return (
      <FooterContainer>
        <FooterLeft
          title={
            this.props.detailPageVisable
              ? this.props.chosenArtwork.title
              : this.props.displayTitle
          }
        />
        <FooterRight
          display={this.props.detailPageVisable ? "none" : "block"}
          onClick={() => this.handleClick()}
          info={this.props.info}
        />
      </FooterContainer>
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
