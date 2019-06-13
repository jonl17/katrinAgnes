import React from "react"
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
  chosenArtWorkImages,
  chosenImageIndex,
}) => {
  return (
    <FooterContainer>
      <FooterLeft
        footer
        title={detailPageVisable ? chosenArtwork.title : displayTitle}
        technique={detailPageVisable ? chosenArtwork.technique : ""}
        year={detailPageVisable ? chosenArtwork.year : ""}
      />
      <FooterRight
        display={detailPageVisable ? "none" : "block"}
        onClick={() => dispatch(showInfoPage(!infoPageVisable))}
        info={info}
        detailPageVisable={detailPageVisable}
        chosenImageIndex={chosenImageIndex}
        len={chosenArtWorkImages.length}
      />
    </FooterContainer>
  )
}

const mapStateToProps = state => ({
  displayTitle: state.app.displayTitle,
  infoPageVisable: state.app.infoPageVisable,
  chosenArtwork: state.app.chosenArtwork,
  detailPageVisable: state.app.detailPageVisable,
  chosenArtWorkImages: state.app.chosenArtWorkImages,
  chosenImageIndex: state.app.chosenImageIndex,
})

export default connect(mapStateToProps)(Footer)
