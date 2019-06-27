import React from "react"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

import InfoPageContainer from "./Views/InfoPageContainer"
import InfoPageLeft from "./Views/InfopageLeft"
import InfoPageCenter from "./Views/InfoPageCenter"
import ExitButton from "../ExitButton"

const InfoPage = ({ infoPageVisable, dispatch, info, device, texts }) => {
  const {
    nafn,
    email,
    instagram_linkur,
    about_texti: bio,
  } = info.edges[0].node.acf
  return (
    <InfoPageContainer
      device={device}
      display={infoPageVisable ? "grid" : "none"}
    >
      <InfoPageLeft name={nafn} email={email} instagram={instagram_linkur} />
      <InfoPageCenter device={device} biography={bio} texts={texts} />
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
