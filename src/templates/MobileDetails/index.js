import React from "react"
import { Container } from "./Styled"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import { connect } from "react-redux"
import { location } from "../../constants/other"

class mobileDetails extends React.Component {
  constructor(props) {
    super(props)
    this.redirectHome = this.redirectHome.bind(this)
  }
  redirectHome = () => {
    window.location = `${location.home}`
  }
  render() {
    const {
      pageContext: { acf },
      device,
    } = this.props
    return device !== `mobile` ? (
      this.redirectHome()
    ) : (
      <Container>
        <Header chosenArtwork={acf} />
        <Gallery images={acf.myndir} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(mobileDetails)
