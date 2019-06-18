import React from "react"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

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
  device,
}) => {
  console.log(device)
  return (
    <FooterContainer device={device}>
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
  displayTitle: state.reducer.displayTitle,
  infoPageVisable: state.reducer.infoPageVisable,
  chosenArtwork: state.reducer.chosenArtwork,
  detailPageVisable: state.reducer.detailPageVisable,
  chosenArtWorkImages: state.reducer.chosenArtWorkImages,
  chosenImageIndex: state.reducer.chosenImageIndex,
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(Footer)
