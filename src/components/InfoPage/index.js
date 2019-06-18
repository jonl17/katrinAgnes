import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../../state/actions"

import InfoPageContainer from "./Views/InfoPageContainer"
import InfoPageLeft from "./Views/InfopageLeft"
import InfoPageCenter from "./Views/InfoPageCenter"
import ExitButton from "../ExitButton"

const InfoPage = ({ infoPageVisable, dispatch, data }) => {
  const { title, email, bio } = data.siteMetadata
  return (
    <InfoPageContainer display={infoPageVisable ? "grid" : "none"}>
      <InfoPageLeft name={title} email={email} instagram={"instagram"} />
      <InfoPageCenter biography={bio} />
      <ExitButton
        handleClick={() => dispatch(showInfoPage(!infoPageVisable))}
      />
    </InfoPageContainer>
  )
}

const mapStateToProps = state => ({
  infoPageVisable: state.reducer.infoPageVisable,
})

export default connect(mapStateToProps)(InfoPage)
