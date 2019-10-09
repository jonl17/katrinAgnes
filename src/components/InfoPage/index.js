import React from "react"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

import InfoPageContainer from "./Views/InfoPageContainer"
import InfoPageLeft from "./Views/InfopageLeft"
import InfoPageCenter from "./Views/InfoPageCenter"
import ExitButton from "../ExitButton"

const InfoPage = ({ infoPageVisable, dispatch, device }) => {
  return (
    <InfoPageContainer
      device={device}
      display={infoPageVisable ? "grid" : "none"}
    >
      <InfoPageLeft />
      <InfoPageCenter device={device} />
      <ExitButton
        handleClick={() => dispatch(showInfoPage(!infoPageVisable))}
      />
    </InfoPageContainer>
  )
}

const mapStateToProps = state => ({
  infoPageVisable: state.reducer.infoPageVisable,
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(InfoPage)
