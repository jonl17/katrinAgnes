import React from "react"
import { Container } from "./Styled"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import { connect } from "react-redux"
import { location } from "../../constants/other"

const RedirectHome = () => {
  window.location = `${location.home}`
}

const mobileDetails = ({ pageContext: { acf }, device }) => {
  console.log(device)
  return device !== `mobile` ? (
    RedirectHome()
  ) : (
    <Container>
      <Header chosenArtwork={acf} />
      <Gallery images={acf.myndir} />
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(mobileDetails)
