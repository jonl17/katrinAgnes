import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

import InfoPageContainer from "./Views/InfoPageContainer"
import InfoPageLeft from "./Views/InfopageLeft"
import InfoPageCenter from "./Views/InfoPageCenter"
import ExitButton from "../ExitButton"

const InfoPage = ({ infoPageVisable, dispatch, data, device }) => {
  const {
    nafn,
    email,
    instagram_linkur,
    about_texti: bio,
  } = data.allWordpressAcfInformation.edges[0].node.acf
  return (
    <InfoPageContainer
      device={device}
      display={infoPageVisable ? "grid" : "none"}
    >
      <InfoPageLeft name={nafn} email={email} instagram={instagram_linkur} />
      <InfoPageCenter device={device} biography={bio} />
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
