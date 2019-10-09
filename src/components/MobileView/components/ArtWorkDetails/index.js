import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import Gallery from "./components/Gallery"
import Header from "./components/Header"

const ArtWorkDetails = ({ chosenArtWorkImages, detailPageVisable }) => {
  return (
    <Container display={detailPageVisable ? "block" : "none"}>
      <Header />
      <Gallery images={chosenArtWorkImages} />
    </Container>
  )
}

const mapStateToProps = state => ({
  chosenArtWorkImages: state.reducer.chosenArtWorkImages,
  detailPageVisable: state.reducer.detailPageVisable,
})

export default connect(mapStateToProps)(ArtWorkDetails)
