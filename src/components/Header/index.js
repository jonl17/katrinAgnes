import React from "react"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

import HeaderContainer from "./Views/HeaderContainer"
import ExitButton from "../ExitButton"
import FooterLeft from "../Footer/Views/FooterLeft"
import HeaderInfo from "../HeaderInfo"

import { showDetailPage } from "../../state/actions"

const Header = ({
  dispatch,
  info,
  chosenArtwork,
  detailPageVisable,
  device,
  infoPageVisable,
}) => {
  return (
    <HeaderContainer show={detailPageVisable} device={device}>
      <FooterLeft
        header
        title={detailPageVisable ? chosenArtwork.title : ""}
        technique={detailPageVisable ? chosenArtwork.technique : ""}
        year={detailPageVisable ? chosenArtwork.year : ""}
      />
      {device === `mobile` ? (
        <HeaderInfo
          device={device}
          handleClick={() => dispatch(showInfoPage(!infoPageVisable))}
          info={info}
        />
      ) : (
        <></>
      )}
      <ExitButton
        display={detailPageVisable ? "block" : "none"}
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
      />
    </HeaderContainer>
  )
}

const mapStateToProps = state => ({
  chosenArtwork: state.reducer.chosenArtwork,
  detailPageVisable: state.reducer.detailPageVisable,
  windowWidth: state.responsiveReducer.windowWidth,
  device: state.responsiveReducer.device,
  infoPageVisable: state.reducer.infoPageVisable,
})

export default connect(mapStateToProps)(Header)
