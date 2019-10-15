import React from "react"
import { Container, Text } from "./Styled"
import ExitButton from "../../../../components/ExitButton"
import { connect } from "react-redux"

const Header = ({ chosenArtwork }) => {
  return (
    <Container>
      <Text>{chosenArtwork.titill}</Text>
      <Text>{chosenArtwork.material}</Text>
      <Text>{chosenArtwork.year}</Text>
      <ExitButton handleClick={() => window.history.back()} />
    </Container>
  )
}

const mapStateToProps = state => ({
  detailPageVisable: state.reducer.detailPageVisable,
})

export default connect(mapStateToProps)(Header)
