import React from "react"
import { connect } from "react-redux"

import HeaderContainer from "./Views/HeaderContainer"
import ExitButton from "../ExitButton"
import FooterLeft from "../Footer/Views/FooterLeft"

import { showDetailPage } from "../../state/app"

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
  displayTitle: state.app.displayTitle,
  chosenArtwork: state.app.chosenArtwork,
  detailPageVisable: state.app.detailPageVisable,
})

export default connect(mapStateToProps)(Header)
