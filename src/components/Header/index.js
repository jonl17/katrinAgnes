import React from "react"
import { connect } from "react-redux"

import HeaderContainer from "./Views/HeaderContainer"
import ExitButton from "../ExitButton"
import FooterLeft from "../Footer/Views/FooterLeft"

import { showDetailPage } from "../../state/actions"

const Header = ({
  dispatch,
  info,
  displayTitle,
  chosenArtwork,
  detailPageVisable,
}) => {
  return (
    <HeaderContainer>
      <FooterLeft
        header
        title={detailPageVisable ? chosenArtwork.title : ""}
        technique={detailPageVisable ? chosenArtwork.technique : ""}
        year={detailPageVisable ? chosenArtwork.year : ""}
      />
      <ExitButton
        display={detailPageVisable ? "block" : "none"}
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
      />
    </HeaderContainer>
  )
}

const mapStateToProps = state => ({
  displayTitle: state.reducer.displayTitle,
  chosenArtwork: state.reducer.chosenArtwork,
  detailPageVisable: state.reducer.detailPageVisable,
  windowWidth: state.responsiveReducer.windowWidth,
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(Header)
