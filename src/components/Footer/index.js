import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/app"

import FooterContainer from "./Views/FooterContainer"
import FooterLeft from "./Views/FooterLeft"
import FooterRight from "./Views/FooterRight"

const Footer = ({
  detailPageVisable,
  chosenArtwork,
  displayTitle,
  infoPageVisable,
  info,
  dispatch,
}) => {
  return (
    <FooterContainer>
      <FooterLeft
        title={detailPageVisable ? chosenArtwork.title : displayTitle}
        technique={detailPageVisable ? chosenArtwork.technique : ""}
        year={detailPageVisable ? chosenArtwork.year : ""}
      />
      <FooterRight
        display={detailPageVisable ? "none" : "block"}
        onClick={() => dispatch(showInfoPage(!infoPageVisable))}
        info={info}
      />
    </FooterContainer>
  )
}

const mapStateToProps = state => ({
  displayTitle: state.app.displayTitle,
  infoPageVisable: state.app.infoPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  detailPageVisable: state.app.detailPageVisable,
})

export default connect(mapStateToProps)(Footer)
