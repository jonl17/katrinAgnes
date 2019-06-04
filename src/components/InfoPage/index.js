import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/app"

import InfoPageContainer from "./Views/InfoPageContainer"
import InfoPageLeft from "./Views/InfopageLeft"
import InfoPageCenter from "./Views/InfoPageCenter"
import ExitButton from "../ExitButton"

const InfoPage = props => {
  return (
    <InfoPageContainer display={props.infoPageVisable ? "grid" : "none"}>
      <InfoPageLeft
        name={"Katrín Brugge"}
        email={"Sven@Svencock.com"}
        instagram={"link to insta"}
      />
      <InfoPageCenter biography={"biography..."} />
      <ExitButton
        handleClick={() => props.dispatch(showInfoPage(!props.infoPageVisable))}
      />
    </InfoPageContainer>
  )
}

export default connect(
  state => ({
    infoPageVisable: state.app.infoPageVisable,
  }),
  null
)(InfoPage)
