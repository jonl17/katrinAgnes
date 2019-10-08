import React from "react"
import {
  InfoTextContainer,
  Container,
  ArtInfoContainer,
  ArtInfoText,
  Text,
} from "./Styled"
import ExitButton from "../../../ExitButton"

import { connect } from "react-redux"
import { showDetailPage, showInfoPage } from "../../../../state/actions"

const Header = ({
  dispatch,
  detailPageVisable,
  chosenArtWork,
  infoPageVisable,
}) => {
  return (
    <Container>
      <InfoTextContainer
        onClick={() => dispatch(showInfoPage(!infoPageVisable))}
      >
        <Text>Information</Text>
      </InfoTextContainer>
      <ArtInfoContainer display={detailPageVisable ? "block" : "none"}>
        <ArtInfoText>YO</ArtInfoText>
      </ArtInfoContainer>
      <ExitButton
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
        display={detailPageVisable ? "block" : "none"}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
  chosenArtWork: state.reducer.chosenArtWork,
  detailPageVisable: state.reducer.detailPageVisable,
  infoPageVisable: state.reducer.infoPageVisable,
})

export default connect(mapStateToProps)(Header)
